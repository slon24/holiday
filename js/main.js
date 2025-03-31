// перемикач мови--------------------
let langIconNow = document.querySelectorAll('.lang-icon, .lang-now');
// let langIcon = document.querySelector('.lang-icon'); ------------
let langList = document.querySelector('.lang-list');

langIconNow.forEach(item => {
    item.addEventListener('click', function (event) {
        event._isClick = true;
        event.stopPropagation();
        if (langList.classList.contains('_active-lang-list')) {
            langList.classList.remove('_active-lang-list');
        }
        else {
            langList.classList.add('_active-lang-list');
        }
    })

    window.addEventListener('click', function (event) {
        if (event._isClick == true) {
            return;
        }
        langList.classList.remove('_active-lang-list');
    })
});


// якщо один  lang-icon--------------------

// langIcon.addEventListener('click', function (event) {
//     event._isClick = true;
//     event.stopPropagation();
//     if (langList.classList.contains('_active-lang-list')) {
//         langList.classList.remove('_active-lang-list');
//     }
//     else {
//         langList.classList.add('_active-lang-list');
//     }
// })

// window.addEventListener('click', function (event) {
//     // console.log(event);

// for (let i = 0; i < event.length; i++) {
//     const ele = event[i];
//     // console.log(ele);


// }

//     if (event._isClick == true) {
//         return;
//     }
//     langList.classList.remove('_active-lang-list');
// })
// слайдер ------------------------------------
$(document).ready(function () {
    $('.slider-items').slick({
        adaptiveHeight: true,
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        easing: 'linear',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

