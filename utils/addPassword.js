import axios from "axios";
import * as store from "../store/index.js";
import toggleFilter from "./toggleFilter.js";

export function addPassword() {
  const filter = document.querySelector("#filtered--text");
  const addButton = document.querySelector("#button--add");
  const newPasswordPlatform = document.querySelector("#newPassword--platform");
  const newPasswordPassword = document.querySelector("#newPassword--password");
  const trimmed = addButton.innerHTML.trim();
  const faCircle = document.querySelector(".fa-circle-xmark");
  const faShuffle = document.querySelector(".fa-shuffle");
  filter.classList.toggle("hideFilter");
  faCircle.classList.toggle("hideFilter");
  faShuffle.classList.toggle("hideFilter");
  newPasswordPlatform.classList.toggle("hideFilter");
  newPasswordPassword.classList.toggle("hideFilter");
  if (trimmed === "submit") {
    const platformValue = newPasswordPlatform.value;
    const passwordValue = newPasswordPassword.value;
    const username = window.localStorage.getItem("username");
    const userID = window.localStorage.getItem("user_id");
    if ((platformValue != "") & (passwordValue != "")) {
      const requestBody = {
        user_id: userID,
        username: username,
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
                renderPasswords(alpha);
              })
              .catch(error => {
                console.log("Error occurred: ", error);
              });
          })();
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
