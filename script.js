let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Mostrar la primera imagen cuando se carga la página
showSlide(currentIndex);

// Cambiar de imagen cada 3 segundos
setInterval(nextSlide, 3000);
