import * as store from "../store/index";
import axios from "axios";

export function deletePassword(i) {
  const allSubmitted = document.querySelectorAll(".submission--id");
  const thisID = allSubmitted[i].innerHTML;

  const arr = store.Library.passwords.filter(el => el._id != thisID);
  store.Library.passwords = arr;
  renderPasswords(arr);
  axios
    .delete(`${process.env.PASSLOCKR_API_URL}/database/${thisID}`, {})
    .catch(error => {
      console.log("Error occurred: ", error);
    });
}
