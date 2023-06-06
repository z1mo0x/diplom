const presentaionContainer = document.getElementById('presentation');
const nextButton = document.querySelector('.nextButton');
const prevButton = document.querySelector('.prevButton');
var slideIndex = 1;

showSlides(slideIndex);

nextButton.addEventListener('click', () => {
    showSlides(slideIndex++);
})

prevButton.addEventListener('click', () => {
    showSlides(slideIndex--);
})

function showSlides(n) {
    const slides = presentaionContainer.querySelectorAll('img');

    if (n && n < 1) {
        slideIndex = slides.length;
    }

    if (n && n > slides.length) {
        slideIndex = 1;
    }

    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides.forEach((slide) => {
        slide.style.display = 'none';
    })

    slides[slideIndex - 1].style.display = 'block';
}





