import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import * as utils from "./utils";
import axios from "axios";

const router = new Navigo("/");

function hasAccess() {
  const approved = window.localStorage.getItem("user_id");
  if (approved) {
    return true;
  }
  return false;
}

function mySort(a, b) {
  return a.platform.localeCompare(b.platform);
}

let count = 0;
function wait() {
  const waitingText = document.querySelector("#signIn");
  let waitTimeOut = setTimeout(() => {
    count++;
    waitingText.innerHTML += ".";
    if (count === 6) {
      waitingText.innerHTML = "Loading Users";
      count = 0;
    }
    wait();
  }, 500);
  waitingText.innerHTML.includes("Loading User") ? waitTimeOut : clearID;
  const clearID = clearTimeout(waitTimeOut);
}

function loaded() {
  const axios = window.localStorage.getItem("axios");
  const page = window.localStorage.getItem("page");
  let timeoutID = setTimeout(() => {
    loaded();
  }, 500);

  axios === "loaded" && page === "loaded" ? setButton() : timeoutID;

  function setButton() {
    const buttonText = document.querySelector("#signIn");
    buttonText.innerHTML = `<div onClick="toggleSignIn()">Sign In</div>`;
    clearTimeout(timeoutID);
  }
}

function render(state = store.Home) {
  let renderThis = `${Header(state)} ${Main(state)}
  ${Footer()}`;
  hasAccess()
    ? (renderThis += `${Nav(store.fullLinks, state)}`)
    : (renderThis += `${Nav(store.Links, state)}`);
  document.querySelector("#root").innerHTML = renderThis;
  router.updatePageLinks();
  if (state == store.Home) {
    utils.playSlider();
    utils.homeAbstract();
    utils.scrollDetect();
    utils.marketingAnim();
  }
  afterRender(state);
}
function afterRender(page) {
  if (page === store.Login) {
    (async () => {
      try {
        window.localStorage.setItem("axios", "still loading");
        window.localStorage.setItem("page", "still loading");
        await axios
          .get(`${process.env.PASSLOCKR_API_URL}/users`)
          .then(response => {
            store.Library.users = response.data;
          })
          .catch(error => {
            console.log("Error occurred: ", error);
          });
        window.localStorage.setItem("axios", "loaded");
      } catch (error) {
        console.log(error);
      }
    })();

    wait();

    (function() {
      window.localStorage.setItem("page", "loaded");
      loaded();
    })();
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    switch (view) {
      case "Home":
        (async () => {
          await axios
            .get(`${process.env.PASSLOCKR_API_URL}/status`)
            .then(response => {
              console.log(response.data.message);
              done();
            })
            .catch(error => {
              console.log("Error occurred: ", error);
              done();
            });
        })();
        break;
      case "Library":
        (async () => {
          await axios
            .get(
              `${
                process.env.PASSLOCKR_API_URL
              }/database/?user_id=${window.localStorage.getItem("user_id")}`
            )
            .then(response => {
              const alpha = response.data.sort(mySort);
              store.Library.passwords = alpha;
              done();
            })
            .catch(error => {
              console.log("Error occurred: ", error);
              done();
            });
        })();
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    render(store[view]);
  }
});

router
  .on({
    "/": () => {
      window.localStorage.clear();
      hasAccess();
      render();
    },
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
