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

// PARALLAX

var twoBG = document.getElementById("two");
var threeBG = document.getElementById("three");
var fourBG = document.getElementById("four");
var fiveBG = document.getElementById("five");
var sixBG = document.getElementById("six");
var sevenBG = document.getElementById("seven");
var eightBG = document.getElementById("eight");
const introDuction = document.querySelector(".intro");

window.addEventListener('scroll', () => {
    var offsetY = window.pageYOffset;
    profileButton.style.transform = "rotate(" + offsetY * 0.25 + "deg)";
    introDuction.style.transform = "translateX(" + offsetY * 1 + "px)";
    twoBG.style.top = offsetY * 0.4 + "px";
    threeBG.style.top = offsetY * 0.5 + "px";
    fourBG.style.top = offsetY * 0.6 + "px";
    fiveBG.style.top = offsetY * 0.7 + "px";
    sixBG.style.top = offsetY * 0.8 + "px";
    sevenBG.style.top = offsetY * 0.9 + "px";
    eightBG.style.top = offsetY * 1 + "px";
    console.log(offsetY)
});