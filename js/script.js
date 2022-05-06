

////// sticky menu
window.onscroll = function () {
    myFunction()
};
var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("is-sticky");
    } else {
        header.classList.remove("is-sticky");
    }
}

///////// back to top
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth"
    });
};
document.addEventListener("scroll", () => {
    let scrollPosition = window.pageYOffset;
    if (scrollPosition >= showOnPx) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
});

backToTopButton.addEventListener("click", goToTop);
////// tab js
const tabItemList = document.querySelectorAll('.tab__item');
const tabContentList = document.querySelectorAll('.tab__content');

tabItemList.forEach((item, index) => {
    item.addEventListener('click', function (e) {
        tabItemList.forEach(tabItem => {
            tabItem.classList.remove('active');
        });
        tabContentList.forEach(contentItem => {
            contentItem.classList.remove('active');
        });
        item.classList.add('active');
        tabContentList[index].classList.add('active');
    })
});