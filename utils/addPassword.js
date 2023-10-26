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
          (async () => {
            await axios
              .get(
                `${
                  process.env.PASSLOCKR_API_URL
                }/database/?user_id=${window.localStorage.getItem("user_id")}`
              )
              .then(response => {
                const alpha = response.data.sort((a, b) =>
                  a.platform.localeCompare(b.platform)
                );
                store.Library.passwords = alpha;

                function renderToPage(param) {
                  const render = document.querySelector("#filter--root");
                  const renderIt = param.map(
                    (el, index) =>
                      `<div class="hover--container"><i class="fa-solid fa-pencil" onclick="editPassword(${index})"></i><i class="fa-solid fa-trash" onclick="deletePassword(${index})"></i><i class="fa-solid fa-check fadeOut hide" onclick="submitUpdate(${index})"></i><div class="password--platform" onmouseover="viewPassword()">${el.platform}</div><div class="user--password">${el.password}</div><form autocomplete="off" onkeydown="return event.key != 'Enter';"><input type="text" class="edit--password" placeholder="${el.password}"></form><div class="user--id" style="display:none;">${el._id}</div></div>`
                  );
                  render.innerHTML = renderIt.toString("").replace(/,/g, "");
                }
                renderToPage(alpha);
              })
              .catch(error => {
                console.log("Error occurred: ", error);
              });
          })();

          // store.Library.passwords.push(requestBody);
          // function renderToPage(param = store.Library.passwords) {
          //   const sorted = param.sort((a, b) =>
          //     a.platform.localeCompare(b.platform)
          //   );
          //   const render = document.querySelector("#filter--root");
          //   const renderIt = sorted.map(
          //     (el, index) =>
          //       `<div class="hover--container"><i class="fa-solid fa-pencil" onclick="editPassword(${index})"></i><i class="fa-solid fa-trash" onclick="deletePassword(${index})"></i><i class="fa-solid fa-check fadeOut hide" onclick="submitUpdate(${index})"></i><div class="password--platform" onmouseover="viewPassword()">${el.platform}</div><div class="user--password">${el.password}</div><form autocomplete="off" onkeydown="return event.key != 'Enter';"><input type="text" class="edit--password" placeholder="${el.password}"></form><div class="user--id" style="display:none;">${el._id}</div></div>`
          //   );
          //   render.innerHTML = renderIt.toString("").replace(/,/g, "");
          // }
          // renderToPage();
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
