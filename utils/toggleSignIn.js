export function toggleSignIn() {
  const toggleIt = document.querySelector("#signIn--screen");
  toggleIt.classList.toggle("signIn");
  toggleIt.classList.toggle("hideSignIn");
}
