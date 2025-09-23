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

// стрілка вгору -----------------------------------------------------
window.addEventListener('scroll', function () {
    let arrow = document.querySelector('.arrow-wrap');

    if (window.pageYOffset > 500) {
        arrow.style.opacity = '.7';
        arrow.style.visibility = 'visible';
    } else {
        arrow.style.opacity = '0';
        arrow.style.visibility = 'hidden';
    }
    arrow.addEventListener('click', function (e) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })
});