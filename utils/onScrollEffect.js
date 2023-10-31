import * as js from "../utils";

export function fadeInUp(element, param = window) {
  const containers = document.querySelectorAll(element);
  const scrollVar = 50;
  const windowHeight = document.documentElement.clientHeight;
  containers.forEach(el => {
    const combinedHeight = el.offsetTop + el.offsetHeight;
    if (combinedHeight <= windowHeight) {
      el.style.opacity = 1;
    }
  });
  param = param === window ? window : document.querySelector(param);
  param.addEventListener("scroll", function(event) {
    containers.forEach(function(el) {
      const combinedHeight = el.offsetTop + el.offsetHeight;
      const thisScroll = combinedHeight - windowHeight;
      const { opacity } = el.style;
      if (param === window) {
        if (
          window.scrollY >= thisScroll + scrollVar &&
          thisScroll >= 0 &&
          opacity != 1
        ) {
          if (element === "#slide1") {
            el.classList.add("fade-in-up--slider");
            setTimeout(() => {
              js.playSlider();
              el.classList.remove("fade-in-up--slider");
              el.style.opacity = 1;
            }, 2000);
          } else {
            el.classList.add("fade-in-up");
          }
        }
      } else {
        if (
          param.scrollTop >= thisScroll + scrollVar &&
          thisScroll >= 0 &&
          opacity != 1
        ) {
          el.classList.add("fade-in-up");
        }
      }
    });
  });
}
