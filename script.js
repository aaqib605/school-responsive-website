// Change navbar styles on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// show/hide faq answer
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

// copyright date
const today = new Date().getFullYear();
const copyrightEl = document.querySelector(".footer__copyright span");
copyrightEl.textContent = today;
