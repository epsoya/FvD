// JavaScript Document
console.log("hi");



// Carousel
document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll("[data-carousel]");

  carousels.forEach((carousel) => {
    const buttons = carousel.querySelectorAll("[data-carouselButton]");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = carousel.querySelector("[data-slideItems]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
      });

      button.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          button.click();
        }
      });
    });
  });

  function currentSlide(carousel, n) {
    const slides = carousel.querySelector("[data-slideItems]");
    const activeSlide = slides.querySelector("[data-active]");

    if (activeSlide) {
      delete activeSlide.dataset.active;
    }

    slides.children[n - 1].dataset.active = true;
  }
});


// Dropdown list
document.getElementById('toggleButton').addEventListener('click', function() {
  var content = document.getElementById('aboutContent');

  if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
    content.style.maxHeight = '20em'; // Adjust the value as needed
    this.innerText = '▲'; // Change the button content to an up arrow
  } else {
    content.style.maxHeight = '0px';
    this.innerText = '▼'; // Change the button content back to a down arrow
  }
});

document.getElementById('toggleButton').addEventListener('mouseenter', function() {
  var content = document.getElementById('aboutContent');

  if (content.style.maxHeight !== '0px') {
    content.style.maxHeight = '20em'; // Adjust the value as needed
  }
});

document.getElementById('toggleButton').addEventListener('mouseleave', function() {
  var content = document.getElementById('aboutContent');

  if (content.style.maxHeight !== '3em') {
    content.style.maxHeight = '0px';
  }
});



