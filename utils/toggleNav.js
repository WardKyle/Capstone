export default function toggleNav() {
  const faBars = document.querySelector(".fa-solid.fa-bars");
  const faX = document.querySelector(".fa-solid.fa-x");
  document.querySelector("nav").classList.toggle("navWindow");

  faBars.classList.toggle("fadeIn");
  faX.classList.toggle("fadeIn");
  faBars.classList.toggle("fadeOut");
  faX.classList.toggle("fadeOut");
  setTimeout(() => {
    faBars.classList.toggle("hide");
    faX.classList.toggle("hide");
  }, 80);
}
