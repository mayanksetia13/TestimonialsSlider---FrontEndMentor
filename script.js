const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const btnsContainer = document.querySelector(".buttons");

let curSlide = 0;

const displaySlide = function (index) {
    slides.forEach((s) => {
        s.classList.add("hide");
    });
    slides[index].classList.remove("hide");
};
displaySlide(0);

const nextSlide = function () {
    curSlide++;
    if (curSlide > slides.length - 1) {
        curSlide = 0;
    }
    displaySlide(curSlide);
};

const prevSlide = function () {
    curSlide--;
    if (curSlide < 0) {
        curSlide = slides.length - 1;
    }
    displaySlide(curSlide);
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
