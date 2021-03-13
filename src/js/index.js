import "../css/main.css"
import testFunc from "./test/khan"

testFunc();

let header = document.querySelector('.header-top');

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