document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll(".navbar-nav .nav-item");

    for (const link of navLinks) {
        const href = link.querySelector(".nav-link").getAttribute("href");
        if (href === currentLocation) {
            link.classList.add("active");
        }
    }
});
