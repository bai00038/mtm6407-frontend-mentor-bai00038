document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const mobileNav = document.querySelector(".mobile-nav");
    const overlay = document.querySelector(".overlay");
    const closeBtn = document.querySelector(".mobile-close");

    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener("click", () => {
        mobileNav.classList.add("active");
        overlay.classList.add("active");
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            mobileNav.classList.remove("active");
            overlay.classList.remove("active");
        });
    }

    overlay.addEventListener("click", () => {
        mobileNav.classList.remove("active");
        overlay.classList.remove("active");
    });

});