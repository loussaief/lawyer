const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})
/* other pages Nav */
const primaryNavPage = document.querySelector(".primary-nav-page");
const navTogglePage = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
    const visibility = primaryNavPage.getAttribute('data-visible');
    if (visibility === "false") {
        primaryNavPage.setAttribute("data-visible", true);
        navTogglePage.setAttribute("aria-expanded", true);
    }else if (visibility === "true") {
        primaryNavPage.setAttribute("data-visible", false);
        navTogglePage.setAttribute("aria-expanded", false);
    }
})