
let toLeft = document.querySelector('.arrow-left');
let toRight = document.querySelector('.arrow-right');
let slider = document.querySelector('.item-wrap');


// let sliderItem = document.querySelectorAll('.slider-item')


toLeft.addEventListener('click', function () {
    if (slider.scrollLeft <= 0) {
        slider.scrollLeft += slider.scrollWidth;
    }
    else {
        slider.scrollLeft -= 400;
    }

})

toRight.addEventListener('click', function () {
    let maxScrollRight = slider.scrollWidth - slider.clientWidth;
    if (slider.scrollLeft >= maxScrollRight - 1) {
        slider.scrollLeft -= slider.scrollWidth;
    }
    else {
        slider.scrollLeft += 400;
    }
})



let btnDetails = document.querySelectorAll('.btn-details');
let divAboutCoffee = document.querySelectorAll('.about-coffee');


for (let i = 0; i < btnDetails.length; i++) {
    btnDetails[i].onclick = function () {
        divAboutCoffee[i].style.transform = 'translateY(-100%)'
    }
}
for (let i = 0; i < divAboutCoffee.length; i++) {
    divAboutCoffee[i].onclick = function () {
        divAboutCoffee[i].style.transform = 'translateY(0%)'
    }
}

ScrollReveal().reveal('.anim-right', {
    origin: 'right',
    distance: '1000px',
    duration: 2000,
    delay: 1000,
});
ScrollReveal().reveal('.anim-left', {
    origin: 'left',
    distance: '1000px',
    duration: 2000,
    delay: 1000,

});

let btn = document.querySelector('.btn-show-story');
let hide = document.querySelector('.hide-div');
let close = document.querySelector('.close-div');

btn.onclick = function () {
    hide.style.display = 'flex'
}

close.onclick = function () {
    hide.style.display = 'none'
}
