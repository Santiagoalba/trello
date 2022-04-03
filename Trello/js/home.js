var navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (scrollY >= 40) {
    navbar.classList.add("navbar-display");
  } else {
    navbar.classList.remove("navbar-display");
  }
});

var learnMore = document.querySelectorAll(".learn-more");

learnMore.forEach((item) => {
  item.addEventListener("click", () => {
    item.nextElementSibling.classList.toggle("expanded");
    // item.nextElementSibling.style.height = "auto";
  });
});

// var learn = document.querySelector(".learn-more");

// learn.addEventListener("click", () => {
//   learn.nextElementSibling.style.height = "auto";
// });

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  // loop: true,

  // If we need pagination
  pagination: {
    el: ".pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
