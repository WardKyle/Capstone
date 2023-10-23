export default function toggleList() {
  const toggleButton = document.querySelector(".library--button:nth-child(1)");
  const toggleIt = document.querySelector("#user--passwords");
  const inner = toggleButton.innerHTML.trim();
  toggleIt.classList.toggle("viewPasswords");
  toggleIt.classList.toggle("hidePasswords");
  toggleButton.classList.toggle("listToggle");
  toggleButton.innerHTML =
    inner == "view all entered" ? "close" : "view all entered";
}
