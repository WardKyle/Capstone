const testimonial1 = document.querySelector("#slide1");
const testimonial2 = document.querySelector("#slide2");
const testimonial3 = document.querySelector("#slide3");
let displayNumb = 1;
let loop = () => {
  setTimeout(function() {
    let exchange3 = testimonial1.textContent;
    let exchange1 = testimonial2.textContent;
    let exchange2 = testimonial3.textContent;
    testimonial1.textContent = exchange1;
    testimonial2.textContent = exchange2;
    testimonial3.textContent = exchange3;
    testimonial1.style.animationName = "slider";
    loop();
  }, "7000");
};
loop();
