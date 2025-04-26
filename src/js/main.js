let body = document.querySelector("body")
let themeIcon = document.getElementById("dark")
const loader = document.getElementById("loader")

window.addEventListener("DOMContentLoaded", () => {
    showLoader();
})

window.addEventListener("load", () => {
    setTimeout(() => {

        hideLoader();
        ScrollReveal().reveal('.scroll-img');
        ScrollReveal().reveal('#animado');
    }, 1998)

})

const showLoader = () => {
    loader.classList.add("show_loader")

}
const hideLoader = () => {
    loader.classList.remove("show_loader")
    const app = document.getElementById("app")
    app.classList.add("view-app")

}

let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".carousel-images img");
  const totalSlides = slides.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const newTransformValue = -currentIndex * 100;
  document.querySelector(".carousel-images").style.transform = `translateX(${newTransformValue}%)`;
}

// Mover automáticamente cada 3 segundos
setInterval(() => {
  moveSlide(1); // Mueve la imagen hacia adelante
}, 3000); // 3000 milisegundos (3 segundos)