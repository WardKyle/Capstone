import html from "html-literal";
import showPassword from "../../utils/showPassword";
import addPassword from "../../utils/addPassword";
import toggleFilter from "../../utils/toggleFilter";
import editPassword from "../../utils/editPassword";
import submitUpdate from "../../utils/submitUpdate";
import deletePassword from "../../utils/deletePassword";
import clearFilter from "../../utils/clearFilter";
import copyText from "../../utils/copyText";
window.viewPassword = showPassword;
window.addNew = addPassword;
window.toggleFilterList = toggleFilter;
window.editPassword = editPassword;
window.submitUpdate = submitUpdate;
window.deletePassword = deletePassword;
window.clearFilter = clearFilter;
window.copyText = copyText;

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
