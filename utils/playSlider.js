export function playSlider() {
  const testimonial1 = document.querySelector("#slide1");
  const testimonial2 = document.querySelector("#slide2");
  const testimonial3 = document.querySelector("#slide3");
  const testimonial4 = document.querySelector("#slide4");
  let loop = () => {
    void testimonial1.offsetWidth;
    testimonial1.classList.add("playSlider");
    setTimeout(function() {
      testimonial1.classList.remove("playSlider");
      let exchange4 = testimonial1.textContent;
      let exchange1 = testimonial2.textContent;
      let exchange2 = testimonial3.textContent;
      let exchange3 = testimonial4.textContent;
      testimonial1.textContent = exchange1;
      testimonial2.textContent = exchange2;
      testimonial3.textContent = exchange3;
      testimonial4.textContent = exchange4;

      loop();
    }, "6000");
  };
  loop();
}
