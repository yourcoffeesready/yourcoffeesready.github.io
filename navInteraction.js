// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".main-nav");

    if (navToggle && nav) {
        navToggle.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }

    // Set current year in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Contact form mock submission
    const contactForm = document.getElementById("contact-form");
    const statusEl = document.getElementById("contact-status");

    if (contactForm && statusEl) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            statusEl.textContent = "Sending...";
            setTimeout(() => {
                // Here is where you'd send data to your backend with fetch()
                statusEl.textContent = "Thanks for reaching out! We’ll get back to you soon.";
                contactForm.reset();
            }, 600);
        });
    }
});
