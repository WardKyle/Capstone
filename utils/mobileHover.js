export function mobileHover() {
  const hoverOver = document.querySelectorAll(".flex-row");
  hoverOver.forEach(el => {
    el.addEventListener("mouseover", () => {
      const hoverEl = el.querySelector(".hoverOver");
      hoverEl.style.opacity = "1";
      hoverEl.style.paddingTop = "0px";
    });
    el.addEventListener("mouseleave", () => {
      const hoverEl = el.querySelector(".hoverOver");
      hoverEl.style.opacity = "0";
      hoverEl.style.paddingTop = "60px";
    });
  });
}
