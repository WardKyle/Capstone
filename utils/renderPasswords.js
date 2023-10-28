import * as state from "../store/index";
import * as js from "../utils";

export function renderPasswords(param = state.Library.passwords) {
  function renderToPage(param) {
    const render = document.querySelector("#filter--root");
    const renderIt = param.map(
      (el, index) =>
        `<div class="hover--container"><i class="fa-solid fa-pencil" onclick="editPassword(${index})"></i><i class="fa-solid fa-trash" onclick="deletePassword(${index})"></i><i class="fa-solid fa-check fadeOut hide" onclick="submitUpdate(${index})"></i><div class="password--platform" onmouseover="viewPassword()">${el.platform}</div><div class="user--password">${el.password}</div><form autocomplete="off" onkeydown="return event.key != 'Enter';"><input id="${el._id} type="text" class="edit--password" value="${el.password}"></form><div class="submission--id" style="display:none;">${el._id}</div></div>`
    );
    render.innerHTML = renderIt.toString("").replace(/,/g, "");
    js.fadeInUp(".hover--container", "#filtered--list");
  }
  renderToPage(param);
}
