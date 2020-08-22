
const header = document.querySelector('.navigation-wrapper');
// const scrollToTop = document.querySelector('#scrollto-top');

window.onscroll = function() {
    let top = window.scrollY;
    if( top >= 50 ) {
        header.classList.add('active');
        // scrollToTop.style.display = "block";
    } else {
        header.style.backgroundColor = "transparent";
        // scrollToTop.style.display = "none";
    }
}


// scrollToTop.addEventListener('click', function() {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth"
//     })
// });