import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import * as utils from "./utils";

const router = new Navigo("/");

function render(state = store.Home) {
  let renderThis = `${Header(state)} ${Main(state)}
  ${Footer()}`;
  if (utils.hasAccess()) {
    renderThis += `${Nav(store.fullLinks, state)}`;
  } else {
    renderThis += `${Nav(store.Links, state)}`;
  }

  document.querySelector("#root").innerHTML = renderThis;
  router.updatePageLinks();
  if (state == store.Home) {
    utils.playSlider();
  }
}

router
  .on({
    "/": () => render(),
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
