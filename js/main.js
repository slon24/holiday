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
// валідація форми -------------------------------------

function validateForm() {
    const name = document.getElementById("name").value;
    const teleph = document.getElementById("teleph").value;

    const nameError = document.getElementById("name-error");
    const telephError = document.getElementById("teleph-error");

    let isValid = true;
    let nameArrNo = [/ /, /!/, /%/, /#/, /_/, /"/, /\$/, /&/, /\(/, /\)/, /\*/, /\+/, /,/, /-/, /\./, /\//, /:/, /;/, /</, /=/, />/, /\?/, /@/, /~/, /}/, /\|/, /{/, /\[/, /\\/, /\]/, /\d/];

    let newArr = name.split(' ');
    console.log(newArr);

    let spaceNo = newArr.indexOf("");
    console.log(spaceNo);
    alert(spaceNo);
    // for (let index = 0; index < newArr.length; index++) {




    // }

    for (const ele of newArr) {
        console.log(ele);

        console.log(spaceNo);
        newArr.splice(spaceNo, 10);
        console.log(newArr);
    }

    if (newArr.length >= 1) {
        console.log(newArr.length);
        nameArrNo.shift();
    }
    console.log(nameArrNo);
    for (let index = 0; index < nameArrNo.length; index++) {
        const element = nameArrNo[index];

        if (name === "" || element.test(name)) {
            nameError.textContent = "Введіть ваше ім'я";
            isValid = false;
        }
    }

    const name1 = document.getElementById("name");
    name1.addEventListener('focus', function (e) {
        nameError.textContent = '';

    })

    if (teleph === "") {
        telephError.textContent = "Введіть номер телефону";
        isValid = false;
    }



    // document.forms['myform'].addEventListener('submit', function (event) {
    //     console.log('but');

    const teleph1 = document.getElementById("teleph");

    teleph1.addEventListener('focus', function (e) {
    //    let ner = teleph1.focus();
    //    if (ner) {
        
    //    }
       
       
        // if (teleph.textContent != '') {
            
            
        //     telephError.textContent = "Введіть номер телефону";
        // } else {
        //     teleph1.focus();
        //     telephError.textContent = ''
        // }
        telephError.textContent = '';
    })
    // event.preventDefault();
    // })

    return isValid;
}

// let ngngn = validateForm();

// function name5() {
//     if (ngngn == true) {
//         console.log('Тру');

//     } else if (ngngn == false) {
//         console.log('Фелс');
//     }
// }

// name5();



// console.log(!validateForm());
// alert(validateForm());

// window.open('https://javascript.info');

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

// ip адреса ---------------------------------------------------------

function getIPAddress() {
    $.getJSON("https://jsonip.com?callback=?",
        function (data) {
            console.log(data.ip);
            let ipAddr = data.ip;
            let forma = document.forms['myform'];
            let inp = document.createElement('textarea');
            forma.prepend(inp);
            inp.innerHTML = ipAddr;
            console.log(inp);
            inp.setAttribute('name', 'ip');
            inp.setAttribute('type', 'text');
            console.log(inp);
            inp.style.display = 'none';
        });
};

getIPAddress();

// --------------------------------------------------------------
