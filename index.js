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
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    switch (view) {
      // const storedUserId = window.localStorage.getItem("user_id");
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
      axios
        .get(`${process.env.PASSLOCKR_API_URL}/users`)
        .then(response => {
          storeUsers(response.data);
        })
        .catch(error => {
          console.log("Error occurred: ", error);
        });
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
