import * as store from "../store/index";

export default function authenticate() {
  event.preventDefault();

  const users = store.Library.users;
  const usernameField = document.querySelector("input#username");
  const passwordField = document.querySelector("input#password");
  const signIn_username = usernameField.value;
  const signIn_password = passwordField.value;
  const invalid = document.querySelector("#invalid");

  let found, user_id;

  if (users != null && users != undefined) {
    found = users.find(
      el => el.username === signIn_username && el.password === signIn_password
    );
    if (found != undefined) {
      window.localStorage.setItem("username", found.username);
      user_id = found._id;
      window.localStorage.setItem("user_id", user_id);
      location.href = `${process.env.SERVER_LOCATION}/Library`;
    } else {
      usernameField.value = "";
      passwordField.value = "";
      invalid.innerHTML = "Invalid attempt, please try again";
    }
  } else {
    usernameField.value = "";
    passwordField.value = "";
    invalid.innerHTML = "Invalid attempt, please try again";
  }
}
