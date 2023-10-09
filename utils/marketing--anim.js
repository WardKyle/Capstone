export function marketingAnim() {
  const listenerDiv = document.querySelector("#marketing");
  const listenerDiv_a = document.querySelector("#marketing a");
  const animationEl = document.querySelector("#marketing--anim");
  listenerDiv.addEventListener("mouseenter", () => {
    animationEl.style.backgroundColor = "#a4b6c6f2";
    animationEl.style.width = "120px";
  });
  listenerDiv.addEventListener("mouseleave", () => {
    animationEl.style.width = "40px";
    animationEl.style.backgroundColor = "transparent";
  });
