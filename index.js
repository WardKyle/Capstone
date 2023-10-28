import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import * as js from "./utils";
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

function asynchronous() {
  try {
    axios
      .get(`${process.env.PASSLOCKR_API_URL}/users`)
      .then(response => {
        store.Library.users = response.data;
      })
      .catch(error => {
        console.log("Error occurred: ", error);
      });
    store.Login.axios = "Loaded";
    loaded();
  } catch (error) {
    console.log(error);
  }
}
async function asyncCall() {
  const result = await asynchronous();
}

function loaded() {
  const axios = store.Login.axios;
  const page = store.Login.page;
  let timeoutID = setTimeout(() => {
    loaded();
  }, 500);
  axios === "Loaded" && page === "Loaded" ? setButton() : timeoutID;
  function setButton() {
    const buttonText = document.querySelector("#signIn");
    buttonText.innerHTML = `<div id="layerOne"></div><div onClick="toggleSignIn()">Sign In</div>`;
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
  afterRender(state);
}
function afterRender(page) {
  if (page == store.Home) {
    js.playSlider();
    js.homeAbstract();
    js.scrollDetect();
    js.marketingAnim();
  }
  if (page === store.Contact) {
    js.fadeInUp(".row1");
  }
  if (page === store.Login) {
    asyncCall();
    store.Login.page = "Loaded";
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
