document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showSlide(index) {
        carouselItems.forEach(item => {
            item.style.display = 'none';
        });
        carouselItems[index].style.display = 'block';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    }
    document.querySelector('.next').addEventListener('click', nextSlide);

    showSlide(currentIndex);
});
