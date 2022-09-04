//search-bar
let search = document.querySelector(".search");
console.log(search);
let clear = document.querySelector(".clear");
let input = document.getElementById("search");

search.onclick = function () {
  document.querySelector(".search-container").classList.toggle("active");
  getBack(input.innerHTML.length);
};

clear.onclick = function () {
  document.getElementById("search").value = "";
};

clear.ondblclick = function () {
  document.querySelector(".search-container").classList.toggle("active", false);
};

// function inactive (ms) {
//     return setTimeout(() => {}, ms);
// };

// function getBack(input) {
//     inactive(3000);
//     return (input === 0) =  document.querySelector(".search-container").classList.toggle('active', false);
// }

//Burger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.toggle("active", false);
    navMenu.classList.toggle("active", false);
  })
);

// Carousel:

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
