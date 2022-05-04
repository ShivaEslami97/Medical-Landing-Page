'use strict';

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