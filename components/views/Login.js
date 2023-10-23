import html from "html-literal";
import toggleSignIn from "../../utils/toggleSignIn";
import authenticate from "../../utils/authenticate";
window.toggleSignIn = toggleSignIn;
window.authenticate = authenticate;

document.addEventListener("DOMContentLoaded", init, false);

let formUsername, formPassword;
function init() {
  formUsername = document.querySelector("#username");
  formPassword = document.querySelector("#password");
  let formItems = Array.from(document.querySelectorAll("input"));
  formItems.forEach(el => el.addEventListener("input", handleChange, false));
}

function handleChange() {
  let form = {};
  form.username = formUsername.value;
  form.password = formPassword.value;
  save(form);
}

function save(param) {
  const form = JSON.stringify(param);
  window.localStorage.setItem("form", form);
}

export default state => {
  return html`
    <section class="login">
      <a href="Home"
        ><img
          class="homeIcon"
          src="https://passlockr-app.netlify.app/PassLockr.e345ff9a.png"
          alt="PassLockr Logo"
      /></a>
      <h1>Welcome to PassLockr</h1>
      <div id="signIn" onClick="toggleSignIn()">Sign In</div>
      <div id="forgotPassword">Forgot Password</div>
      <div class="hideSignIn" id="signIn--screen">
        <div id="signIn--box">
          <div id="close" onClick="toggleSignIn()">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <form autocomplete="off">
            <input type="text" id="username" placeholder="username" required />
            <input type="text" id="password" placeholder="password" required />
            <button id="signIn--button" onClick="authenticate()">Submit</button>
          </form>
        </div>
      </div>
    </section>
  `;
};
