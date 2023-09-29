import html from "html-literal";
import toggleNav from "../utils/toggleNav.js";
window.toggleNav = toggleNav;

export default state => html`
  <header>
    PassLockr<i class="fa-solid fa-bars" onclick="toggleNav()"></i
    ><i class="fa-solid fa-x hide" onclick="toggleNav()"></i>
  </header>
`;
