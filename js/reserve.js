const wrapper = document.querySelector('.custom-select-wrapper');
const nativeSelect = wrapper.querySelector('select');
const customSelect = wrapper.querySelector('.custom-select');
const trigger = wrapper.querySelector('.custom-select__trigger');
const optionsList = wrapper.querySelector('.custom-options');

// Створюємо кастомні опції на основі звичайного select
Array.from(nativeSelect.options).forEach(option => {
  const li = document.createElement('li');
  li.textContent = option.textContent;
  li.dataset.value = option.value;
  optionsList.appendChild(li);
});

// Відкриття/закриття списку
trigger.addEventListener('click', () => {
  optionsList.classList.toggle('show');
});

// Обробка кліків по опціях
optionsList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const value = e.target.dataset.value;
    const text = e.target.textContent;

    trigger.textContent = text;
    nativeSelect.value = value; // синхронізація зі звичайним select
    optionsList.classList.remove('show');

    console.log("Вибране значення:", value);

    let reserveItems = document.querySelectorAll('.reserve-item');

    reserveItems.forEach(element => {
      element.style = 'display:none';
      let nowID = element.getAttribute('id');

      if (value == nowID) {
        element.style = 'display:flex';
      } else if (value == 0) {
        element.style = 'display:flex';
      }
    });
  }
});

// Закриття при кліку поза селектом
document.addEventListener('click', (e) => {
  if (!customSelect.contains(e.target)) {
    optionsList.classList.remove('show');
  }
});

// розворот стрілки
let triggerCustom = document.querySelector('.custom-select__trigger');
let arowCustom = document.querySelector('.custom-select-arrow');
triggerCustom.addEventListener('click', function (e) {
  arowCustom.classList.toggle('rotate');
})

// додавання у вибране ------------------------------------------------------


// localStorage.clear();
const STORAGE_KEY = "favorites";

// Знаходимо елемент по data-id або id
function findItemById(id) {
  let item = document.querySelector(`.reserve-item[data-id="${id}"]`);
  if (!item) {
    item = document.getElementById(id);
    if (item && !item.classList.contains("reserve-item")) item = null;
  }
  return item;
}

// --- localStorage ---
function getFavorites() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}
function setFavorites(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

// --- додати/забрати у вибране ---
function toggleFavorite(el) {
  const item = el.closest(".reserve-item");
  if (!item) return;

  const id = item.dataset.id || item.id;
  let favorites = getFavorites();

  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
    el.classList.remove("active");
  } else {
    favorites.push(id);
    el.classList.add("active");
  }

  setFavorites(favorites);
  renderFavorites();
  updateStars();
}

// --- відмальовка у модалці ---
function renderFavorites() {
  const container = document.getElementById("favorites");
  if (!container) return;
  container.innerHTML = "";

  const favorites = getFavorites();
  favorites.forEach(id => {
    const item = findItemById(id);
    if (item) {
      const clone = item.cloneNode(true);

      // прибираємо зірочку
      const star = clone.querySelector(".star");
      if (star) star.remove();

      // кнопка видалення
      const btn = document.createElement("button");
      btn.textContent = "🗑 Видалити";
      btn.onclick = () => removeFromFavorites(id);
      clone.appendChild(btn);

      container.appendChild(clone);
    }
  });

  updateCounter();
}

// --- видалення з вибраного ---
function removeFromFavorites(id) {
  let favorites = getFavorites().filter(f => f !== id);
  setFavorites(favorites);
  renderFavorites();
  updateStars();
}

// --- підсвітка зірочок ---
function updateStars() {
  const favorites = getFavorites();
  document.querySelectorAll(".reserve-item").forEach(item => {
    const id = item.dataset.id || item.id;
    const star = item.querySelector(".star");
    if (star) {
      if (favorites.includes(id)) {
        star.classList.add("active");
        // star.textContent = "★";
      } else {
        star.classList.remove("active");
        // star.textContent = "☆";
      }
    }
  });
}

// --- лічильник у кнопці ---
function updateCounter() {
  const btn = document.getElementById("openFavoritesBtn");
  if (!btn) return;
  const count = getFavorites().length;

  let starpng = document.createElement('img');
  starpng.src = '../images/Frame1.png';
  
  btn.textContent = count > 0 ? `⭐️ ${count}` : "🐝";
  btn.style.border = '1px solid gold';
  btn.style.borderRadius = '50px';
  btn.style.margin = '0 10px';
}

// --- запуск ---
document.addEventListener("DOMContentLoaded", () => {
  renderFavorites();
  updateStars();

  const modal = document.getElementById("favoritesModal");
  const btn = document.getElementById("openFavoritesBtn");
  const close = modal.querySelector(".close");

  btn.onclick = () => {
    renderFavorites();
    modal.style.display = "block";
  };
  close.onclick = () => (modal.style.display = "none");
  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
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











