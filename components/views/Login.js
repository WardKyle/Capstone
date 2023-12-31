import html from "html-literal";
import * as js from "../../utils";
window.toggleSignIn = js.toggleSignIn;
window.authenticate = js.authenticate;

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
      <div id="signIn">
        <div id="layerOne"><div id="layerTwo"></div></div>

        Loading Users
      </div>
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
          <div id="invalid"></div>
        </div>
      </div>
    </section>
  `;
};
