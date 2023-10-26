import * as store from "../store/index";
import axios from "axios";

export default function deletePassword(i) {
  const pencils = document.querySelectorAll(".fa-pencil");
  const checks = document.querySelectorAll(".fa-check");
  const textField = document.querySelectorAll(".edit--password");
  const password = document.querySelectorAll(".user--password");
  const allSubmitted = document.querySelectorAll(".user--id");
  const thisID = allSubmitted[i].innerHTML;
  const thisUpdate = textField[i].value;

  const arr = store.Library.passwords.filter(el => el._id != thisID);
  store.Library.passwords = arr;

  function renderToPage(param) {
    const render = document.querySelector("#filter--root");
    const renderIt = param.map(
      (el, index) =>
        `<div class="hover--container"><i class="fa-solid fa-pencil" onclick="editPassword(${index})"></i><i class="fa-solid fa-trash" onclick="deletePassword(${index})"></i><i class="fa-solid fa-check fadeOut hide" onclick="submitUpdate(${index})"></i><div class="password--platform" onmouseover="viewPassword()">${el.platform}</div><div class="user--password">${el.password}</div><form autocomplete="off" onkeydown="return event.key != 'Enter';"><input type="text" class="edit--password" placeholder="${el.password}"></form><div class="user--id" style="display:none;">${el._id}</div></div>`
    );
    render.innerHTML = renderIt.toString("").replace(/,/g, "");
  }

  renderToPage(arr);
  axios
    .delete(`${process.env.PASSLOCKR_API_URL}/database/${thisID}`, {})
    .catch(error => {
      console.log("Error occurred: ", error);
    });
}
