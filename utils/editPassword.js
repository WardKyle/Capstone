export function editPassword(i) {
  const pencils = document.querySelectorAll(".fa-pencil");
  const checks = document.querySelectorAll(".fa-check");
  const textField = document.querySelectorAll(".edit--password");
  const password = document.querySelectorAll(".user--password");

  pencils[i].classList.toggle("hide");
  checks[i].classList.toggle("hide");
  checks[i].style.color = "green";

  textField[i].style.visibility = "visible";
  password[i].style.display = "none";
}
