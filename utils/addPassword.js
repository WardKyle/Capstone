import axios from "axios";
import * as store from "../store/index.js";
import toggleFilter from "./toggleFilter.js";

export default function addPassword() {
  const filter = document.querySelector("#filtered--text");
  const addButton = document.querySelector("#button--add");
  const newPasswordPlatform = document.querySelector("#newPassword--platform");
  const newPasswordPassword = document.querySelector("#newPassword--password");
  const trimmed = addButton.innerHTML.trim();
  filter.classList.toggle("hideFilter");
  newPasswordPlatform.classList.toggle("hideFilter");
  newPasswordPassword.classList.toggle("hideFilter");
  if (trimmed === "submit") {
    const platformValue = newPasswordPlatform.value;
    const passwordValue = newPasswordPassword.value;
    const userName = JSON.parse(window.localStorage.getItem("form")).username;
    const userID = window.localStorage.getItem("user_id");
    if ((platformValue != "") & (passwordValue != "")) {
      const requestBody = {
        user_id: userID,
        username: userName,
        platform: platformValue,
        password: passwordValue
      };
      axios
        .post(`${process.env.PASSLOCKR_API_URL}/database`, requestBody)
        .then(response => {
          store.Library.passwords.push(requestBody);
          function renderToPage(param = store.Library.passwords) {
            const sorted = param.sort((a, b) =>
              a.platform.localeCompare(b.platform)
            );
            console.log(sorted);
            const render = document.querySelector("#filter--root");
            const renderIt = sorted.map(
              el =>
                `<div class="hover--container"><div class="password--platform" onmouseover="viewPassword()">${el.platform}</div><div class="user--password">${el.password}</div></div>`
            );
            render.innerHTML = renderIt.toString("").replace(/,/g, "");
          }
          renderToPage();
        })
        .catch(error => {
          console.log("Error occurred: ", error);
        });
    }
  } else {
    newPasswordPlatform.value = "";
    newPasswordPassword.value = "";
  }
  addButton.innerHTML = trimmed === "add" ? "submit" : "add";
}
