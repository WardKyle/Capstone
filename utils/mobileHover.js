export default function mobileHover(i) {
  const el = document.querySelectorAll(".hoverOver");
  el[i].style.opacity = "1";
  el[i].style.paddingTop = "0px";
  for (let x = 0; x < el.length; x++) {
    if (x != i) {
      el[x].style.opacity = "0";
      el[x].style.paddingTop = "60px";
    }
  }
}
