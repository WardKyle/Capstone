export default function toggleNav() {
  document.querySelector("nav").classList.toggle("navWindow");
  document.querySelector(".fa-solid.fa-bars").classList.toggle("hide");
  document.querySelector(".fa-solid.fa-x").classList.toggle("hide");
}
