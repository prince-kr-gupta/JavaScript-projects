const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let interValId = null;

document.addEventListener("DOMContentLoaded", initializeSlider); //DOMContentLoaded - it is a method to load all the dom

function initializeSlider() {
    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide"); //displaySlide - It is in css we hide the image
        interValId = setInterval(nextSlide,5000);
    }
}

function showSlide(index) {
    if(index >= slides.length) {
        slideIndex = 0;
    }
    else if(index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");

    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(interValId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}