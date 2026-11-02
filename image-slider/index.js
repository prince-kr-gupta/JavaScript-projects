const slides = querySelectorAll(".slides img");
let slideIndex = 0;
let interValid = null;

document.addEventListener("DOMContentLoaded", initializeSlider); //DOMContentLoaded - it is a method to load all the dom

function initializeSlider() {
    if(initializeSlider.length > 0) {
        slides[slideIndex].classList.add("displaySlide"); //displaySlide - It is in css we hidden the images
        
    }
}