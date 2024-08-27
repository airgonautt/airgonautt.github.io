const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Update carousel display
function updateCarousel() {
    const offset = currentIndex * -100;
    carouselItems.forEach(item => {
        item.style.transform = `translateX(${offset}%)`;
    });
}

// Show next item
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
});

// Show previous item
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

// Initialize carousel
updateCarousel();
