// Change Navbar styles on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// Show/Hide FAQ answer
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) =>
  faq.addEventListener("click", function () {
    // Toggle the "open" class
    faq.classList.toggle("open");

    // Select the <i> element within the clicked .faq
    const icon = faq.querySelector("i");

    // Check if the "open" class is present
    if (faq.classList.contains("open")) {
      // If the "open" class is added, set the class to "fa-minus"
      icon.classList.replace("fa-plus", "fa-minus");
    } else {
      // If the "open" class is removed, set the class to "fa-plus"
      icon.classList.replace("fa-minus", "fa-plus");
    }
  })
);

// Swiper JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    800: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

// Copyright Date
const today = new Date().getFullYear();
const copyrightEl = document.querySelector(".footer__copyright span");
copyrightEl.textContent = today;

// Toggle Navbar
const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
const navbarMenu = document.querySelector(".nav__menu");

function openMenu() {
  navbarMenu.style.display = "inline-block";
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "inline-block";
}

function closeMenu() {
  navbarMenu.style.display = "none";
  openMenuBtn.style.display = "inline-block";
  closeMenuBtn.style.display = "none";
}

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
