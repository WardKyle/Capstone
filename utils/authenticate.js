export default function authenticate(param = 1) {
  if (param != 1) {
    const users = JSON.parse(window.localStorage.getItem("storedUsers"));
    return;
  }
  event.preventDefault();

  const users = JSON.parse(window.localStorage.getItem("storedUsers"));
  const signIn_info = JSON.parse(window.localStorage.getItem("form"));
  const signIn_username = signIn_info.username;
  const signIn_password = signIn_info.password;

  let found, user_id;

  found = users.find(
    el => el.username === signIn_username && el.password === signIn_password
  );
  if (found != undefined) {
    user_id = found._id;
    window.localStorage.setItem("user_id", user_id);
    toggleSignIn();
    setTimeout(
      () => (location.href = `${process.env.SERVER_LOCATION}/Library`),
      200
    );
  } else {
    console.log("not found");
  }
}
