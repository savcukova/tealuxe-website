// close and open menu on small devices
const navigationList = document.querySelector(".nav-list");
const mobileNav = document.querySelector(".mobile-nav");
const closeMenu = document.querySelector(".menu-close");
const openMenu = document.querySelector(".menu-icon");


openMenu.addEventListener("click", () => {
    navigationList.style.display = "block";
    mobileNav.style.display = "block";
    closeMenu.style.display= "block";
});

closeMenu.addEventListener("click", () => {
    navigationList.style.display = "none";
    mobileNav.style.display = "none";
    closeMenu.style.display= "none";
});