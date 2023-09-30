import html from "html-literal";

export default (links, state) => {
  if (state.view == "Login") {
    return "";
  } else {
    return html`
      <nav>
        ${links
          .map(
            link =>
              `<div class="navLinks"><a href="/${link.title}" title="${link.title}" data-navigo">${link.text}</a></div>`
          )
          .join("")};
      </nav>
    `;
  }
};
