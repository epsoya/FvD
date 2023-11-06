// JavaScript Document
console.log("hi");

// // Variables
// let slideIndex = 1;
// let i;
// let slides = document.getElementsByClassName("mySlides");
// let dots = document.getElementsByClassName("dot");

// // Functions
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

// document.addEventListener('DOMContentLoaded', function() {
//   const buttons = document.querySelectorAll("[data-carouselButton]");

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const offset = button.dataset.carouselButton === "next" ? 1 : -1;
//       const slides = button.closest("[data-carousel]").querySelector("[data-slideItems]");

//       const activeSlide = slides.querySelector("[data-active]");
//       let newIndex = [...slides.children].indexOf(activeSlide) + offset;
//       if (newIndex < 0) newIndex = slides.children.length - 1;
//       if (newIndex >= slides.children.length) newIndex = 0;

//       slides.children[newIndex].dataset.active = true;
//       delete activeSlide.dataset.active;
//     });
//   });

//   function currentSlide(n) {
//     const slides = document.querySelector("[data-slideItems]");
//     const activeSlide = slides.querySelector("[data-active]");

//     if (activeSlide) {
//       delete activeSlide.dataset.active;
//     }

//     slides.children[n - 1].dataset.active = true;
//   }
// });

// function currentSlide(n) {
//   const slides = document.querySelector("[data-slideItems]");
//   const activeSlide = slides.querySelector("[data-active]");

//   if (activeSlide) {
//     delete activeSlide.dataset.active;
//   }

//   slides.children[n - 1].dataset.active = true;
// }

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

// document.getElementById('toggleButton').addEventListener('click', function() {
//   var content = document.getElementById('aboutContent');

//   if (content.style.display === 'none' || content.style.display === '') {
//     content.style.display = 'block';
//     this.innerText = '▲'; // Change the button content to an up arrow
//   } else {
//     content.style.display = 'none';
//     this.innerText = '▼'; // Change the button content back to a down arrow
//   }
// });

// document.getElementById('toggleButton').addEventListener('click', function() {
//   var content = document.getElementById('aboutContent');

//   if (content.style.visibility === 'hidden' || content.style.visibility === '') {
//     content.style.visibility = 'visible';
//     content.style.maxHeight = '3em'; // Adjust the value as needed
//     this.innerText = '▲'; // Change the button content to an up arrow
//   } else {
//     content.style.visibility = 'hidden';
    
//     content.style.maxHeight = '0px';
//     this.innerText = '▼'; // Change the button content back to a down arrow
//   }
// });




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



