/* ==========================================================================
   DANENDRA ROSAN — PORTFOLIO VANILLA JAVASCRIPT
   - Mobile navigation toggle
   - Active navigation link highlight
   - Contact form validation feedback
   - Back-to-top button
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  /* 1. Mobile Navigation Toggle */
  const navToggle = document.querySelector("#nav-toggle");
  const navMenu = document.querySelector("#nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", navMenu.classList.contains("is-open") ? "true" : "false");
    });
  }

  /* 2. Active Navigation Highlight (matches current filename) */
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  /* 3. Contact Form Client-Side Feedback */
  const contactForm = document.querySelector("#contact-form");
  const formFeedback = document.querySelector("#form-feedback");

  if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const nameInput = document.querySelector("#full-name");
      const emailInput = document.querySelector("#email-address");
      const subjectInput = document.querySelector("#subject");
      const messageInput = document.querySelector("#message");

      if (
        nameInput.value.trim() === "" ||
        emailInput.value.trim() === "" ||
        subjectInput.value === "" ||
        messageInput.value.trim() === ""
      ) {
        formFeedback.textContent = "Please fill in all required fields before submitting.";
        formFeedback.classList.add("show-success");
        return;
      }

      formFeedback.textContent =
        "Thank you, " +
        nameInput.value.trim() +
        "! Your message has been validated locally (demo only — no backend connected).";
      formFeedback.classList.add("show-success");
      contactForm.reset();
    });
  }

  /* 4. Back-to-Top Button */
  const backToTopBtn = document.querySelector("#back-to-top");

  if (backToTopBtn) {
    window.addEventListener("scroll", function () {
      backToTopBtn.classList.toggle("visible", window.scrollY > 300);
    });

    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
