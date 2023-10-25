import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import * as utils from "./utils";
import axios from "axios";

const router = new Navigo("/");

function storeUsers(response) {
  response ? localStorage.setItem("storedUsers", JSON.stringify(response)) : [];
}

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

function axiosCall() {
  axios
    .get(`${process.env.PASSLOCKR_API_URL}/users`)
    .then(response => {
      storeUsers(response.data);
    })
    .catch(error => {
      console.log("Error occurred: ", error);
    });
}

let formUsername, formPassword;
function handleChange() {
  let form = {};
  form.username = formUsername.value;
  form.password = formPassword.value;
  save(form);
}

function save(param) {
  const form = JSON.stringify(param);
  window.localStorage.setItem("form", form);
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
      window.localStorage.setItem("axios", "still loading");
      window.localStorage.setItem("page", "still loading");
      await axiosCall();
      window.localStorage.setItem("axios", "loaded");
      authenticate("reload");
    })();

    wait();

    (function() {
      window.localStorage.setItem("page", "loaded");
      loaded();
      formUsername = document.querySelector("#username");
      formPassword = document.querySelector("#password");
      let formItems = Array.from(document.querySelectorAll("input"));
      formItems.forEach(el =>
        el.addEventListener("input", handleChange, false)
      );
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
      case "Library":
        axios
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
