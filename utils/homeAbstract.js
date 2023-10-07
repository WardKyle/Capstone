export function homeAbstract() {
  restart();
  const colorLayer = document.querySelector(".colorLayer");
  const fullColor = document.querySelector(".fullColor");

  const maroonRed = "rgb(97, 3, 69)";
  const lightBlue = "rgb(84, 198, 235)";

  const colors = [maroonRed, lightBlue, "white", "black", "#a4b6c6f2"];

  let random = Math.floor(Math.random() * 6);
  let previous = random;
  function restart() {
    setTimeout(function() {
      colorLayer.classList.toggle("changeColor");
      if (colorLayer.classList.contains("changeColor")) {
        colorLayer.style.backgroundColor = colors[random];
        fullColor.style.backgroundColor = colors[random];
      }
      random = Math.floor(Math.random() * 6);
      if (random === previous) {
        random == 5 ? random-- : random++;
      }
      previous = random;
      restart();
    }, 5000);
  }
}
