const testimonial1 = document.querySelector("#slide1");
const testimonial2 = document.querySelector("#slide2");
const testimonial3 = document.querySelector("#slide3");

// let job = null,
//   origin = new Date().getTime();
// const loop = () => {
//   if (new Date().getTime() - 7000 > origin) {
//     testimonial1.classList.remove("playSlider");
//     let exchange3 = testimonial1.textContent;
//     let exchange1 = testimonial2.textContent;
//     let exchange2 = testimonial3.textContent;
//     testimonial1.classList.add("playSlider");
//     testimonial1.textContent = exchange1;
//     testimonial2.textContent = exchange2;
//     testimonial3.textContent = exchange3;
//     origin = new Date().getTime();
//     job = requestAnimationFrame(loop);
//   } else {
//     requestAnimationFrame(loop);
//   }
// };
// requestAnimationFrame(loop);

let loop = () => {
  void testimonial1.offsetWidth;
  testimonial1.classList.add("playSlider");
  setTimeout(function() {
    testimonial1.classList.remove("playSlider");
    let exchange3 = testimonial1.textContent;
    let exchange1 = testimonial2.textContent;
    let exchange2 = testimonial3.textContent;
    testimonial1.textContent = exchange1;
    testimonial2.textContent = exchange2;
    testimonial3.textContent = exchange3;
    loop();
  }, "7000");
};
loop();
