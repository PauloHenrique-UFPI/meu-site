const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function showSlide(i) {
  index = (i + images.length) % images.length; // loop infinito
  track.style.transform = `translateX(${-index * 400}px)`;
}

prev.addEventListener("click", () => showSlide(index - 1));
next.addEventListener("click", () => showSlide(index + 1));

// autoplay (opcional)
setInterval(() => showSlide(index + 1), 3000);
