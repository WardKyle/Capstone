function scrollDetect() {
  const hdr = document.querySelector("header");
  const faBar = document.querySelector(".fa-solid.fa-bars");

  hdr.style.transition = "none";
  hdr.style.backgroundColor = "transparent";
  hdr.style.height = "100px";
  hdr.style.backgroundSize = "auto 90px";
  hdr.style.backgroundPosition = "50% 5px";
  hdr.style.lineHeight = "100px";
  hdr.style.paddingLeft = "150px";
  hdr.style.color = "transparent";
  hdr.style.borderBottom = "none";
  faBar.style.display = "none";

  addEventListener("scroll", () => {
    hdr.style.transition = "all 0.6s ease-out";
    hdr.style.backgroundColor = "white";
    hdr.style.height = "50px";
    hdr.style.backgroundSize = "auto 40px";
    hdr.style.backgroundPosition = "2px 5px";
    hdr.style.lineHeight = "50px";
    hdr.style.paddingLeft = "70px";
    hdr.style.color = "black";
    hdr.style.borderBottom = "2px solid #e2e2e2";
    faBar.style.display = "block";
  });
}

export { scrollDetect };
