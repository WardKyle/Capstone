import html from "html-literal";
import toggleNav from "../utils/toggleNav.js";
window.toggleIt = toggleNav;

export default state => {
  if (state.view != "Login") {
    return html`
      <header>
        PassLockr<i class="fa-solid fa-bars fadeIn" onclick="toggleIt()"></i
        ><i class="fa-solid fa-x fadeOut hide" onclick="toggleIt()"></i>
      </header>
    `;
  }
  return "";
};
