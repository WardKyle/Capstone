import * as state from "../store/index";

export function clearFilter() {
  const textField = document.querySelector("input#filtered--text");
  textField.value = "";
  renderPasswords();
}
