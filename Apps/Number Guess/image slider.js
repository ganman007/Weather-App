//IMAGE SLIDER 

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervelid = null;



document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displayslide");
        intervelid = setInterval(nextslide, 5000);
    }
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displayslide");
    });
    slides[slideIndex].classList.add("displayslide");
}
function prevslide(){
//    clearInterval(intervelid);
    slideIndex--;
    showSlide(slideIndex);
}
function nextslide(){
    slideIndex++;
    showSlide(slideIndex);
}