import html from "html-literal";

export default () => html`
  <section class="login">
    <a href="Home"
      ><img
        class="homeIcon"
        src="http://localhost:1234/PassLockr.0e0d1fb8.png"
        alt="PassLockr Logo"
    /></a>
    <h1>Welcome to PassLockr</h1>
    <div id="signIn">Sign In</div>
    <div id="forgotPassword">Forgot Password</div>
  </section>
`;
