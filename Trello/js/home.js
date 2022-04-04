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
    console.log(item.nextElementSibling);
    item.nextElementSibling.classList.toggle("expanded");
    // item.nextElementSibling.style.height = "auto";
  });
});



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

var languages = ['English', 'Spanish', 'French', 'Deustch'];

languages.map((language) => {
  const text = document.createTextNode(language);
  const option = document.createElement('option');
  option.appendChild(text);
  document.querySelector('.select-lang').appendChild(option);
})


