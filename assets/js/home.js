"use strict";

const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const currentLabel = this.innerHTML.trim().toLowerCase();

    for (let j = 0; j < pages.length; j++) {
      const pageName = pages[j].dataset.page.trim().toLowerCase();

      if (currentLabel === pageName) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}
