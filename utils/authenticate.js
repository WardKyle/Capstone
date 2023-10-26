import { setTimeout } from "timers/promises";

export default function authenticate(param = 1) {
  let users;
  if (param != 1) {
    users = JSON.parse(window.localStorage.getItem("storedUsers"));
    return 1;
  }
  event.preventDefault();
  (async () => {
    try {
      users = await JSON.parse(window.localStorage.getItem("storedUsers"));
    } catch (error) {
      console.error(error);
    }
    const signIn_info = JSON.parse(window.localStorage.getItem("form"));
    const signIn_username = signIn_info.username;
    const signIn_password = signIn_info.password;
    const usernameField = document.querySelector("input#username");
    const passwordField = document.querySelector("input#password");
    const invalid = document.querySelector("#invalid");

    let found, user_id;

    if (users != null && users != undefined) {
      found = users.find(
        el => el.username === signIn_username && el.password === signIn_password
      );
      if (found != undefined) {
        user_id = await found._id;
        window.localStorage.setItem("user_id", user_id);
        location.href = `${process.env.SERVER_LOCATION}/Library`;
      } else {
        usernameField.value = "";
        passwordField.value = "";
        invalid.innerHTML = "Invalid attempt, please try again";
      }
    } else {
      console.log("not found");
      authenticate();
    }
  })();
}
