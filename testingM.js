let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}
function showSlider(type){
    let itemSlider = document.querySelectorAll('carousel .list .item');
    let itemThumbnail = document.querySelectorAll('carousel .thumbnail .item');
}
