
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".carrossel-slide");
const indicators = document.querySelectorAll(".indicadores");
let autoSlideTimer;

function showSlide(n) {
 
  slides.forEach((slide) => slide.classList.remove("active"));
  indicators.forEach((indicator) => indicator.classList.remove("active"));


  slides[n].classList.add("active");
  indicators[n].classList.add("active");
}

function changeSlide(n) {
  currentSlideIndex += n;

 
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  showSlide(currentSlideIndex);
  resetAutoSlide(); 
}


function currentSlide(n) {
  currentSlideIndex = n;
  showSlide(currentSlideIndex);
  resetAutoSlide(); 
}

function resetAutoSlide() {
  clearInterval(autoSlideTimer);
  autoSlideTimer = setInterval(() => {
    changeSlide(1);
  }, 5000); 
}

window.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlideIndex);
  resetAutoSlide();
});
