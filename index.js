const open = document.getElementById('ek-open'),
close = document.getElementById('ek-close');
const mainNav = document.getElementById('ek-mainNav');

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.carousel__button--left');
const nextBtn = document.querySelector('.carousel__button--right');
const dotNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotNav.children);

open.addEventListener('click', function (event) {
    let openMenu = event.currentTarget;
    mainNav.classList.toggle('openNav');
});

close.addEventListener('click', function (event) {
    let closeMenu = event.currentTarget;
    closeMenu.classList.toggle('close')
    mainNav.classList.toggle('openNav');
});

// get the width of the slides

const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth);

// arrange the slides next to one another

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const heading = document.querySelector('.jump');
heading.innerHTML = spanWrap(heading.textContent);

function spanWrap(word) {
    return[...word].map(letter => `<span>${letter}</span>`).join('').toUpperCase();
}

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-'+ targetSlide.style.left + ')';

    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const upDateDot = (currentDot, targetDot) => {
    currentDot.classList.remove('currenr-slide');
    targetDot.classList.add('current-slide');
};

// left button
prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    const currentDot = dotNav.querySelector('.current-slide');
    const prevDot = currentDot.nextElementSibling;
    
    moveToSlide(track, currentSlide, prevSlide);
    upDateDot(currentDot, prevDot);
});


// right button
nextBtn.addEventListener('click', e=> {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    
    moveToSlide(track, currentSlide, nextSlide);
    upDateDot(currentDot, nextDot);
});


dotNav.addEventListener('click', e => {
    // what indicator was click on
    const targetDot = e.target.closest('button');
    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    // console.log(targetIndex);

    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    upDateDot(currentDot, targetDot);

    if ( targetIndex === 0) {
        prevBtn.classList.add('is-hidden');
        nextBtn.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.add('is-hidden');
    } else {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.remove('is-h');
    }    
});

//roo cart

(function () {
    "use strict";

    document.getElementById('ek-shoped').addEventListener('submit', purchaseTotal);

    function purchaseTotal(event) {
        event.preventDefault();
        //console.log('submit the form')
        const uncle = parseInt(document.getElementById('uncle').value, 10),
        rest = parseInt(document.getElementById('rest').value, 10) || 0,
        kid = parseInt(document.getElementById('kid').value, 10) || 0,
        kitchen = parseInt(document.getElementById('kitchen').value , 10) || 0,
        living = parseInt(document.getElementById('living').value, 10) || 0,
        guest = parseInt(document.getElementById('guest').value, 10) || 0;

        const estimate = (rate, ...amount) => {
            return (rate * uncle) + (amount[0] * rest);
        }

        const bill = estimate(10, 13, 9, 14, 15, 5);
        const dollar = `$`

        document.getElementById('total').innerText = `${dollar}` +  bill.toFixed(2);
        
    }


})();
