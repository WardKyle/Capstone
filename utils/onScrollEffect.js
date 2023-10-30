export function fadeInUp(element, param = window) {
  const containers = document.querySelectorAll(element);
  const scrollVar = 50;
  const height = document.documentElement.clientHeight;
  containers.forEach(el => {
    if (el.offsetTop <= height) {
      el.style.opacity = 1;
    }
  });
  param = param === window ? window : document.querySelector(param);
  param.addEventListener("scroll", function(event) {
    containers.forEach(function(el) {
      const thisScroll = el.offsetTop - height;
      if (param === window) {
        if (window.scrollY >= thisScroll + scrollVar && thisScroll >= 0) {
          el.classList.add("fade-in-up");
        } else {
          el.classList.remove("fade-in-up");
        }
      } else {
        if (param.scrollTop >= thisScroll + scrollVar && thisScroll >= 0) {
          el.classList.add("fade-in-up");
        } else {
          el.classList.remove("fade-in-up");
        }
      }
    });
  });
}
