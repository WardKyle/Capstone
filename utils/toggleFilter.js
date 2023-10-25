import * as state from "../store/index.js";

export default function toggleFilter() {
  // const lockTop = document.querySelector("#lock--top");
  // const lockTopInner = document.querySelector("#lock--top--circle");
  // lockTop.classList.toggle("open--lock");
  // lockTopInner.classList.toggle("open--lock");
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
      el.platform.toLowerCase().includes(formText.value.toLowerCase())
    );
    renderToPage(filterArr);
  }

  function renderToPage(param = state.Library.passwords) {
    const render = document.querySelector("#filter--root");
    const renderIt = param.map(
      el =>
        `<div class="hover--container"><div class="password--platform" onmouseover="viewPassword()">${el.platform}</div><div class="user--password">${el.password}</div></div>`
    );
    render.innerHTML = renderIt.toString("").replace(/,/g, "");
  }
  renderToPage();

  const filterList = document.querySelector("#filtered--list");
  const filterButton = document.querySelector(".library--button:nth-child(1)");
  const filterText = document.querySelector("#filtered--text");
  const addButton = document.querySelector("#button--add");
  const newpass_platform = document.querySelector("#newPassword--platform");
  const newpass_password = document.querySelector("#newPassword--password");
  const buttonText = filterButton.innerHTML.trim();
  filterList.classList.toggle("hideFilter");
  filterButton.classList.toggle("listToggle");

  if (buttonText === "view all") {
    filterButton.innerHTML = "close";
  } else {
    filterButton.innerHTML = "view all";
    filterButton.classList.remove("hideFilter");
    filterText.classList.remove("hideFilter");
    addButton.innerHTML = "add";
    newpass_platform.classList.add("hideFilter");
    newpass_password.classList.add("hideFilter");
    filterText.value = "";
  }
}