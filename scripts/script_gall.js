'use strict';   
// -------------Gallery JS--------------------------------------------------------------------------------------------------

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

const carItems = Array.from(document.querySelectorAll('.carousel-item'));
const navItems = Array.from(document.querySelectorAll('.nav-item'));
const CAR_SIZE = carItems.length;

leftBtn.addEventListener('click', swipe);
rightBtn.addEventListener('click', swipe);

function swipe(e) {
    const currentItem = document.querySelector('.carousel-item.active');
    const currentIndex = carItems.indexOf(currentItem);

    let nextIndex;

    if(e.currentTarget.classList.contains('left')) {
        if (currentIndex === 0) {
            nextIndex = CAR_SIZE - 1;
        } else {
            nextIndex = currentIndex - 1;
        } 
    }else{
        if (currentIndex === CAR_SIZE - 1) {
            nextIndex = 0;
        } else {
            nextIndex = currentIndex + 1;
        } 
    }

    carItems[nextIndex].classList.add('active');
    navItems[nextIndex].classList.add('active');
    currentItem.classList.remove('active');
    navItems[currentIndex].classList.remove('active');

} 

const leftBtn2 = document.querySelector('.left2');
const rightBtn2 = document.querySelector('.right2');

const carItems2 = Array.from(document.querySelectorAll('.carousel-item2'));
const navItems2 = Array.from(document.querySelectorAll('.nav-item2'));
const CAR_SIZE2 = carItems2.length;

leftBtn2.addEventListener('click', swipe_two);
rightBtn2.addEventListener('click', swipe_two);

function swipe_two(e) {
    const currentItem2 = document.querySelector('.carousel-item2.active');
    const currentIndex2 = carItems2.indexOf(currentItem2);

    let nextIndex2;

    if(e.currentTarget.classList.contains('left2')) {
        if (currentIndex2 === 0) {
            nextIndex2 = CAR_SIZE2 - 1;
        } else {
            nextIndex2 = currentIndex2 - 1;
        } 
    }else{
        if (currentIndex2 === CAR_SIZE2 - 1) {
            nextIndex2 = 0;
        } else {
            nextIndex2 = currentIndex2 + 1;
        } 
    }

    carItems2[nextIndex2].classList.add('active');
    navItems2[nextIndex2].classList.add('active');
    currentItem2.classList.remove('active');
    navItems2[currentIndex2].classList.remove('active');

}


const dropdown = document.querySelector('.dropdown');
const dd_content = document.querySelector('.dd-menu');


function showDropdown() {
    dd_content.classList.toggle('show');
}

dropdown.addEventListener('click', function(e){
    showDropdown();
});

document.documentElement.addEventListener('click', function(){
    if (dd_content.classList.contains('show')) {
        showDropdown();
    }});
