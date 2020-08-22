
const header = document.querySelector('.navigation-wrapper');
const menu = document.querySelector('.menu-icon');
const mobileNav = document.querySelector('.mobile-navigation');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');

window.onscroll = function() {
    let top = window.scrollY;
    if( top >= 50 ) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

menu.addEventListener('click', (e) => {
    overlay.classList.add('active');
    mobileNav.classList.add('active');
})

function removeMenu() {
    overlay.classList.remove('active');
    mobileNav.classList.remove('active');
}

overlay.addEventListener('click', () => {
    removeMenu()
})

closeBtn.addEventListener('click', () => {
    removeMenu()
})