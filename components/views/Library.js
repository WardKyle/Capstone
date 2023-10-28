import html from "html-literal";
import * as js from "../../utils";
window.viewPassword = js.showPassword;
window.addNew = js.addPassword;
window.toggleFilterList = js.toggleFilter;
window.editPassword = js.editPassword;
window.submitUpdate = js.submitUpdate;
window.deletePassword = js.deletePassword;
window.clearFilter = js.clearFilter;
window.renderPasswords = js.renderPasswords;

export default state => {
  return html`
    <section id="library--page">
      <div class="library--button" onClick="toggleFilterList()">
        view all
      </div>
      <div id="lock--body"></div>
      <div id="lock--top"></div>
      <div id="lock--top--circle"></div>
      <div id="filtered--list" class="hideFilter">
        <i class="fa-solid fa-circle-xmark" onclick="clearFilter()"></i>
        <form autocomplete="off" onkeydown="return event.key != 'Enter';">
          <input type="text" id="filtered--text" placeholder="filter" />
          <input
            type="text"
            id="newPassword--platform"
            class="hideFilter"
            placeholder="platform"
          />
          <input
            type="text"
            id="newPassword--password"
            class="hideFilter"
            placeholder="password"
          />
        </form>
        <div id="button--add" onClick="addNew()">
          add
        </div>
        <div id="filter--root"></div>
      </div>
    </section>
  `;
};
