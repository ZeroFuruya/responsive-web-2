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

window.addEventListener('scroll', () => {
    var offsetY = window.pageYOffset;
    profileButton.style.transform = "rotate(" + offsetY * 0.25 + "deg)";
    if (offsetY <= 700) {
        delayElements();
        twoBG.style.top = offsetY * 0.4 + "px";
        threeBG.style.top = offsetY * 0.5 + "px";
        fourBG.style.top = offsetY * 0.6 + "px";
        fiveBG.style.top = offsetY * 0.7 + "px";
        sevenBG.style.top = offsetY * 0.9 + "px";
        eightBG.style.top = offsetY * 1 + "px";

        var rect = eightBG.getBoundingClientRect(); //gets x and y position of an element

    } else {
        stickElements();
    }


    function stickElements() {
        var allBG = document.querySelectorAll(".bg");
        allBG.forEach(el => {
            el.style.top = rect;
        });
    }

    function delayElements() {
        var allBG = document.querySelectorAll(".bg");
        allBG.forEach(el => {
            el.style.transition = "500ms";
        })
    }

});

// ARROW

const arrowButton = document.querySelector(".arrow");


arrowButton.addEventListener('click', () => {

    window.location.href = 'index.html#work';

});

arrowButton.addEventListener('mousedown', () => {
    arrowButton.style.border = "2px inset rgba(108, 108, 108, 0.377)";
});

arrowButton.addEventListener('mouseup', () => {
    arrowButton.style.border = "2px outset rgba(108, 108, 108, 0.377)";
});