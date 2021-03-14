import "../css/main.css"

let header = document.querySelector('.header__nav');

// onScroll effect for Header Top

window.onscroll = function () {
    scrollFunction();
};

const scrollFunction = () => {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        header.classList.add('bg');
        buttonBackToTop.style.visibility = 'visible';
    } else {
        header.classList.remove('bg');
        buttonBackToTop.style.visibility = 'hidden';
    }
}