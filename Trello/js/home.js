var navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (scrollY >= 40) {
    navbar.classList.add("navbar-display");
  } else {
    navbar.classList.remove("navbar-display");
  }
});