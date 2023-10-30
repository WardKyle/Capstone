export function fadeInUp(element, param = window) {
  const containers = document.querySelectorAll(element);
  const scrollVar = 50;
  containers.forEach(el => {
    if (el.offsetTop <= window.innerHeight) {
      el.style.opacity = 1;
    }
  });
  const height = window.navigator.userAgentData.mobile
    ? window.screen.height
    : window.innerHeight;
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
