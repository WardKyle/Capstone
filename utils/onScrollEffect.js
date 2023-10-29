export function fadeInUp(element, param = window) {
  const containers = document.querySelectorAll(element);
  param = param === window ? window : document.querySelector(param);
  param.addEventListener("scroll", function(event) {
    containers.forEach(function(el) {
      const thisScroll = el.offsetTop - window.innerHeight;
      console.log(param.scrollTop);
      if (param === window) {
        if (window.scrollY >= thisScroll && thisScroll >= 0) {
          el.classList.add("fade-in-up");
        } else {
          el.classList.remove("fade-in-up");
        }
      } else {
        if (param.scrollTop >= thisScroll - 10 && thisScroll >= 0) {
          el.classList.add("fade-in-up");
        } else {
          el.classList.remove("fade-in-up");
        }
      }
    });
  });
}
