export default function authenticate(param = 1) {
  let users;
  if (param != 1) {
    users = JSON.parse(window.localStorage.getItem("storedUsers"));
    return 1;
  }
  event.preventDefault();

  users = JSON.parse(window.localStorage.getItem("storedUsers"));
  const signIn_info = JSON.parse(window.localStorage.getItem("form"));
  const signIn_username = signIn_info.username;
  const signIn_password = signIn_info.password;

  let found, user_id;

  found = users.find(
    el => el.username === signIn_username && el.password === signIn_password
  );
  if (found != undefined) {
    (async () => {
      user_id = await found._id;
      window.localStorage.setItem("user_id", user_id);
      await toggleSignIn();
      location.href = `${process.env.SERVER_LOCATION}/Library`;
    })();
  } else {
    console.log("not found");
  }
}
