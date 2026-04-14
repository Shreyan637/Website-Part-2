let slides =document.querySelectorAll(".slide");
let index=0;

function showNextSlide (){
    slides[index].classList.remove("acitve");
    index=(index+1) % slides.length;
    slides[index].classList.add("active");
}
setInterval(showNextSlide, 3000);

const menuToggle = document.querySelector("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click",() => {
    navLinks.classList.toggle("show");
});