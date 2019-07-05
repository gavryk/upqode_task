let head = document.querySelector('.head');                      // Header, (logo, menu)

//burger btn variables
let burger = document.querySelector('#burger_menu'),
    head_menu = document.querySelector('.head_menu');
//Slider variables
let slider = document.querySelector('.slider_row'),
    prev = document.querySelector('.left'),             //button left
    next = document.querySelector('.right'),            //button right
    slideState = 0;
let timer;
let slideIndex = 1;


// add class active for link in head menu
// let menu_item = document.querySelectorAll('.nav-item');
// for(let i = 0; i < menu_item.length; i++) {
//     menu_item[i].addEventListener('focusin', function (event) {
//         event.target.classList.add('menu_active');
//     });
//     menu_item[i].addEventListener('blur', function (event) {
//         event.target.classList.remove('menu_active');
//     });
// }

//---------------------------------------------------------
// Try jQuery better
// Scroll, fixed header
// window.addEventListener('scroll', function () {
//     if(this.pageYOffset > 100) {
//         head.style.position = 'fixed';
//     } else {
//         head.style.position = 'relative';
//     }
// });
//---------------------------------------------
//show burger menu (Width < 1024px);
// burger.addEventListener('click', function() {
//     head_menu.classList.toggle('head_menu-active');
// });
//-----------------------------------------------
//Slider
prev.addEventListener('click', function() {
    slideState = slideState - 100;
    slideIndex++;
    if(slideState < -200) {
        slideState = 0;
        slideIndex = 1;
    }
    slider.style.left = slideState + '%';
});
next.addEventListener('click', function() {
    slideState = slideState + 100;
    slideIndex--;
    if(slideState > 0) {
        slideState = (-200);
        slideIndex = 1;
    }
    slider.style.left = slideState + '%';
});
//--------------------------------------------------
// Auto slider
function autoSlider() {
    timer = setTimeout(function() {
        slideState -= 100;
        slideIndex++;
        if(slideState < -200) {
            slideState = 0;
            slideIndex = 1;
        }
        slider.style.left = slideState + '%';
        autoSlider();
    }, 5000);
}
autoSlider();
//--------------------------------------------------
function dotSlide() {
    let dots = document.querySelectorAll('.dot');

    dots.forEach(function(el) {
        let dataNum = el.getAttribute('data-num');

        el.addEventListener('click', function() {
            if(dataNum === '1') {                                   // if first dot
                if(slideState === -100) {                           // slider 2-nd
                    slideState += 100;                              // slide left
                    slider.style.left = slideState + '%';
                } else if(slideState === -200) {                    //if slider 3-rd
                    slideState += 200;                              // slide left twice
                    slider.style.left = slideState + '%';
                }
            }

            if(dataNum === '2') {                                   // if second dot
                if(slideState === 0) {                              // slider 1-st
                    slideState -= 100;                              // slide right
                    slider.style.left = slideState + '%';
                } else if(slideState === -200) {                    // if slide 3-rd
                    slideState += 100;                              // slide left
                    slider.style.left = slideState + '%';
                }
            }
            if(dataNum === '3') {                                   //if third dot
                if(slideState === -100) {                           // slider 2-nd
                    slideState -= 100;                              // slide right
                    slider.style.left = slideState + '%';
                } else if(slideState === 0) {                       // if slider 1-st
                    slideState -= 200;                              // slide right twice
                    slider.style.left = slideState + '%';
                }
            }
        });
    })
}
dotSlide();

//---------------------------------------------------
//Progress bar, skills
function progress() {
    let bar = document.querySelectorAll('.progress-bar'),
        outSpan = document.querySelectorAll('.percent');

    bar.forEach(function(el) {
        let elWidth = el.style.width;
        outSpan.forEach(function(p) {
            if(el.classList.contains('photoshop') && p.classList.contains('photoshop')) {
                p.innerHTML = elWidth;
            }
            if(el.classList.contains('htmlCss') && p.classList.contains('htmlCss')) {
                p.innerHTML = elWidth;
            }
            if(el.classList.contains('javascript') && p.classList.contains('javascript')) {
                p.innerHTML = elWidth;
            }
            if(el.classList.contains('wordpress') && p.classList.contains('wordpress')) {
                p.innerHTML = elWidth;
            }
        })
    })
}
progress();

// animation for progress bar
