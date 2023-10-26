import * as state from "../store/index";

export default function clearFilter() {
  const textField = document.querySelector("input#filtered--text");
  textField.value = "";

  function renderToPage(param = state.Library.passwords) {
    const render = document.querySelector("#filter--root");
    const renderIt = param.map(
      (el, index) =>
        `<div class="hover--container"><i class="fa-solid fa-pencil" onclick="editPassword(${index})"></i><i class="fa-solid fa-trash" onclick="deletePassword(${index})"></i><i class="fa-solid fa-check fadeOut hide" onclick="submitUpdate(${index})"></i><div class="password--platform" onmouseover="viewPassword()">${el.platform}</div><div class="user--password">${el.password}</div><form autocomplete="off" onkeydown="return event.key != 'Enter';"><input type="text" class="edit--password" value="${el.password}"></form><div class="user--id" style="display:none;">${el._id}</div></div>`
    );
    render.innerHTML = renderIt.toString("").replace(/,/g, "");
  }
  renderToPage();
}
