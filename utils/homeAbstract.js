export function homeAbstract() {
  const colorLayer = document.querySelector(".colorLayer");
  const fullColor = document.querySelector(".fullColor");

  const maroonRed = "rgb(97, 3, 69)";
  const lightBlue = "rgb(84, 198, 235)";

  const colors = ["white", maroonRed, lightBlue, "#a4b6c6f2"];
  let newColor = [];

  //Below is so page loads with animation right away, with that being white
  colorLayer.classList.toggle("changeColor");
  colorLayer.style.backgroundColor = "white";
  fullColor.style.backgroundColor = "white";
  newColor = colors.slice(0);
  newColor.splice(0, 1);
  let random = Math.floor(Math.random() * newColor.length);

  function restart() {
    setTimeout(function() {
      colorLayer.classList.toggle("changeColor");
      if (colorLayer.classList.contains("changeColor")) {
        colorLayer.style.backgroundColor = newColor[random];
        fullColor.style.backgroundColor = newColor[random];
        newColor = colors.slice(0);
        newColor.splice(random, 1);
        random = Math.floor(Math.random() * newColor.length);
      }
      restart();
    }, 5000);
  }
  restart();
}
