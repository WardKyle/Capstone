import html from "html-literal";
import showPassword from "../../utils/showPassword";
import toggleList from "../../utils/togglePasswordList";
window.viewPassword = showPassword;
window.togglePasswords = toggleList;

export default state => {
  return html`
    <section id="library--page">
      <div class="library--button" onClick="togglePasswords()">
        view all entered
      </div>
      <div class="library--button">filter</div>
      <div id="lock--body"></div>
      <div id="lock--top"></div>
      <div id="lock--top--circle"></div>
      <div id="user--passwords" class="hidePasswords">
        ${state.passwords.map(
          el =>
            `<div class="hover--container"><div class="password--platform" onmouseover="viewPassword()">${el.platform}</div><div class="user--password">${el.password}</div></div>`
        )}
      </div>
    </section>
  `;
};
