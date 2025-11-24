let index = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;   
let interval;    

function showSlide(i) {
    const slideWidth = document.querySelector(".slide").clientWidth;   
    const visibleSlides = Math.floor(slides.clientWidth / slideWidth); 
    const maxIndex = totalSlides - visibleSlides; 
    if (i < 0) {
        index = maxIndex;      
    } else if (i > maxIndex) {
        index = 0;             
    } else {
        index = i;
    }
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

document.getElementById("next").onclick = () => showSlide(index+1);
document.getElementById("prev").onclick = () => showSlide(index-1);

function startAutoslide(){
    interval = setInterval(() => {
        showSlide(index+1);
    },3000);
}

function stopAutoSlide(){
    clearInterval(interval);
}
startAutoslide();

document.getElementById("slider").addEventListener("mouseenter", stopAutoSlide);
document.getElementById("slider").addEventListener("mouseleave", startAutoslide);