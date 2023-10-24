import * as state from "../store/index.js";

export default function toggleFilter() {
  let formText;
  function init() {
    formText = document.querySelector("#filtered--text");
    let formItems = Array.from(document.querySelectorAll("input"));
    formItems.forEach(el =>
      el.addEventListener("input", filterFunction, false)
    );
  }
  init();

  function filterFunction() {
    const filterArr = state.Library.passwords.filter(el =>
      el.platform.includes(formText.value)
    );
    renderToPage(filterArr);
  }

  function renderToPage(param) {
    const render = document.querySelector("#filter--root");
    const renderIt = param.map(el => `<div>${el.platform}</div>`);
    console.log(renderIt.toString("").replace(",", ""));
    render.innerHTML = renderIt.toString("").replace(/,/g, "");
  }

  const filterList = document.querySelector("#filtered--list");
  const filterButton = document.querySelector(".library--button:nth-child(2)");
  const buttonText = filterButton.innerHTML.trim();
  filterList.classList.toggle("hideFilter");
  filterButton.classList.toggle("listToggle");
  filterButton.innerHTML = buttonText === "filter" ? "close" : "filter";
}
