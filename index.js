import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import * as utils from "./utils";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  let renderThis = `${Header(state)} ${Main(state)}
  ${Footer()}`;
  utils.hasAccess()
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
      case "Login":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
          )
          .then(response => {
            // Convert Kelvin to Fahrenheit since OpenWeatherMap does provide otherwise
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
            store.Login.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };
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
