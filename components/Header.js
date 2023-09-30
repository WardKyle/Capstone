import html from "html-literal";
import toggleNav from "../utils/toggleNav.js";
window.toggleNav = toggleNav;

export default state => {
  if (state.view != "Login") {
    return html`
      <header>
        PassLockr<i class="fa-solid fa-bars fadeIn" onclick="toggleNav()"></i
        ><i class="fa-solid fa-x fadeOut hide" onclick="toggleNav()"></i>
      </header>
    `;
  }
  return "";
};
