export default function showPassword() {
  const hoverContainer = document.querySelectorAll(".hover--container");
  const platformList = document.querySelectorAll(".password--platform");
  const passwordList = document.querySelectorAll(".user--password");
  const fontSize = passwordList[0].style.fontSize;

  hoverContainer.forEach((el, index) => {
    el.addEventListener("mouseover", () => {
      passwordList[index].style.color = "rgb(var(--mainLightBlueColor))";
      platformList[index].style.fontSize = "0.8rem";
    });
    el.addEventListener("mouseleave", () => {
      passwordList[index].style.color = "transparent";
      platformList[index].style.fontSize = fontSize;
    });
  });
}
