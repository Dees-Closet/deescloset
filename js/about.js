// ==================== ABOUT PAGE SCRIPT ====================

// Run only after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    // Grab About section elements safely
    const aboutSection = document.getElementById("about");
    const aboutText = document.querySelector(".about-text");
    const aboutImage = document.querySelector(".about-image img");

    // Only run if About section exists
    if (aboutSection && aboutText && aboutImage) {
        // Example: Add a fade-in effect
        aboutSection.classList.add("fade-in");

        // Example: Dynamically update text (optional)
        // aboutText.innerHTML += "<p>We are excited to serve you!</p>";

        // Example: Lazy-load image
        aboutImage.loading = "lazy";
    }

    // Handle mobile menu toggle (shared across pages)
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const overlay = document.querySelector(".overlay");

    if (hamburger && mobileMenu && overlay) {
        hamburger.addEventListener("click", () => {
            mobileMenu.style.right = "0";
            overlay.style.display = "block";
        });

        overlay.addEventListener("click", () => {
            mobileMenu.style.right = "-50%";
            overlay.style.display = "none";
        });
    }
});
// ==================== END ABOUT PAGE SCRIPT ====================