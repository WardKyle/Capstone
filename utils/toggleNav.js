export default function toggleNav() {
  const faBars = document.querySelector(".fa-solid.fa-bars");
  const faX = document.querySelector(".fa-solid.fa-x");
  const hdr = document.querySelector("header");
  const navColor = "rgba(164, 182, 198, 0.95)";
  const mainRed = "rgb(var(--mainMaroonColor))";

  document.querySelector("nav").classList.toggle("navWindow");

  faBars.classList.toggle("fadeIn");
  faX.classList.toggle("fadeIn");
  faBars.classList.toggle("fadeOut");
  faX.classList.toggle("fadeOut");
  setTimeout(() => {
    faBars.classList.toggle("hide");
    faX.classList.toggle("hide");
  }, 80);

  if (faBars.classList.contains("fadeOut")) {
    hdr.style.color = "transparent";
    hdr.style.backgroundColor = navColor;
    hdr.style.backgroundPosition = "50% 5px";
    hdr.style.transition = "background-position 0.2s ease-out";
  } else {
    hdr.style.color = "white";
    hdr.style.backgroundColor = mainRed;
    hdr.style.backgroundPosition = "0 5px";
    hdr.style.transition = "none";
  }
}
