const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelector(".mobile-links");

const profileButton = document.querySelector(".img-button");
const profileLinks = document.querySelector(".more-icons");

mobileMenu.addEventListener('click', () => {
    mobileLinks.classList.toggle("active-menu");
});

profileButton.addEventListener('click', () => {
    profileLinks.classList.toggle("active-menu");
});