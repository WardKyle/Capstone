import * as store from "../store/index";
import axios from "axios";

export function submitUpdate(i) {
  const pencils = document.querySelectorAll(".fa-pencil");
  const checks = document.querySelectorAll(".fa-check");
  const textField = document.querySelectorAll(".edit--password");
  const password = document.querySelectorAll(".user--password");
  const allSubmitted = document.querySelectorAll(".submission--id");
  const thisID = allSubmitted[i].innerHTML;
  const thisUpdate = textField[i].value;

  checks[i].classList.toggle("hide");
  checks[i].classList.toggle("fadeIn");
  checks[i].classList.toggle("fadeOut");
  pencils[i].classList.toggle("hide");
  pencils[i].classList.toggle("fadeIn");
  pencils[i].classList.toggle("fadeOut");
  textField[i].style.visibility = "hidden";
  password[i].style.display = "block";

  if (
    thisUpdate != null &&
    thisUpdate != "" &&
    thisUpdate != password[i].innerHTML
  ) {
    store.Library.passwords.map(el => {
      el._id === thisID ? (el.password = thisUpdate) : "";
    });

    password[i].innerHTML = thisUpdate;

    axios
      .put(`${process.env.PASSLOCKR_API_URL}/database/${thisID}`, {
        password: thisUpdate
      })
      .catch(error => {
        console.log("Error occurred: ", error);
      });
  }
}
