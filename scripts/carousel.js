const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[slideIndex].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
showSlide(currentSlide); // Show initial slide
