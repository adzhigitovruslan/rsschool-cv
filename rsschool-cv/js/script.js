const menuBtn = document.querySelector(".menu-btn");
const navList =document.querySelector(".nav-list");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if(!menuOpen) {
        menuBtn.classList.add("open");
        navList.classList.add("open")
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        navList.classList.remove("open");
        menuOpen = false;
    }
});

var lastScrollTop = 0
var navbar = document.querySelector('.header')
window.addEventListener('scroll', function () {
const scrollTop =
window.pageYOffset || document.documentElement.scrollTop
if (scrollTop > lastScrollTop && !scrollTop <= 0) {
navbar.style.top = '-90px'
} else {
navbar.style.top = '0px'
}
lastScrollTop = scrollTop
})

