import html from "html-literal";

export default state => {
  console.log(state.weather);
  return html`
    <section class="login">
      <a href="Home"
        ><img
          class="homeIcon"
          src="https://passlockr-app.netlify.app/PassLockr.e345ff9a.png"
          alt="PassLockr Logo"
      /></a>
      <h1>Welcome to PassLockr</h1>
      <div id="signIn">Sign In</div>
      <div id="forgotPassword">Forgot Password</div>
      <section>
        <h4>Adding weather API for homework requirements</h4>
        <p style="text-align:center;">City: ${state.weather.city}</p>
        <p style="text-align:center;">Temp: ${state.weather.temp}</p>
        <p style="text-align:center;">Feels like: ${state.weather.feelsLike}</p>
        <p style="text-align:center;">
          Description: ${state.weather.description}
        </p>
      </section>
    </section>
  `;
};
