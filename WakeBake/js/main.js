//! BURGER
(function () {
  document.addEventListener('click', burgerInit);
  function burgerInit(e) {
    const burgerIcon = e.target.closest('.burger-icon');
    const burgerNavLink = e.target.closest('.nav__link');
    if (!burgerIcon && !burgerNavLink) return;

    if (document.documentElement.clientWidth > 900) return;
    document.body.classList.toggle('body--opened-menu');
  }
})();

// ! Открытие модалки
const modalOpen = document.getElementById('modalOpen');
modalOpen.addEventListener('click', () => {
  document.body.classList.add('body--opened-modal');
});

// ! Закрытие модалки
const modalClose = document.getElementById('modalClose');
modalClose.addEventListener('click', () => {
  document.body.classList.remove('body--opened-modal');
});

document.body.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    document.body.classList.remove('body--opened-modal');
  }
});

const modal = document.querySelector('.modal');
modal.addEventListener('click', (event) => {
  const modalWindow = modal.querySelector('.modal__window');
  if (!modalWindow.contains(event.target)) {
    document.body.classList.remove('body--opened-modal');
  }
});

//! TABS
const tabControls = document.querySelectorAll('.tab-controls__link');
tabControls.forEach((tabControl) => {
  tabControl.addEventListener('click', toggleTab);
});

function toggleTab(e) {
  e.preventDefault();
  const tabControl = e.target.closest('.tab-controls__link');
  if (!tabControl) return;
  if (tabControl.classList.contains('tab-controls__link--active')) return;
  const tabContentId = tabControl.getAttribute('href'),
    tabContent = document.querySelector(tabContentId),
    activeControl = document.querySelector('.tab-controls__link--active'),
    activeContent = document.querySelector('.tab-content--show');

  activeControl.classList.remove('tab-controls__link--active');
  tabControl.classList.add('tab-controls__link--active');

  activeContent.classList.remove('tab-content--show');
  tabContent.classList.add('tab-content--show');
}


// ! Аккордеон

const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {
  // document.querySelector('.accordion-list__item--opened .accordion-list__content').style.maxHeight = document.querySelector('.accordion-list__item--opened .accordion-list__content').scrollHeight + 'px';
  el.addEventListener('click', (e) => {

    const accordionControl = e.target.closest('.accordion-list__control');
    if (!accordionControl) return;
    e.preventDefault();
    const accordionItem = accordionControl.parentElement;
    const accordionContent = accordionControl.nextElementSibling;

    // Закрываем все открытые элементы, кроме текущего
    accordionLists.forEach(list => {
      const openedItem = list.querySelector('.accordion-list__item--opened');
      if (openedItem && openedItem !== accordionItem) {
        openedItem.classList.remove('accordion-list__item--opened');
        const openedContent = openedItem.querySelector('.accordion-list__content'); // Предполагаем, что это содержимое
        if (openedContent) {
          openedContent.style.maxHeight = null;
        }
      }
    });

    // Открываем или закрываем текущий элемент
    accordionItem.classList.toggle('accordion-list__item--opened');
    if (accordionItem.classList.contains('accordion-list__item--opened')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = null;
    }
  });
});


// ! Слайдер галерея

const gallery = new Swiper('.gallery__slider', {
  spaceBetween: 15,
  slidesPerView: 1.5,
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.gallery__next',
    prevEl: '.gallery__prev',
  },
  autoplay: {
    delay: 3000, 
  },
  breakpoints: {
    401: {
      slidesPerView: 2,
    },
    601: {
      slidesPerView: 3,
    },
    801: {
      spaceBetween: 32,
    },
    1101: {
      slidesPerView: 4,
    }
  }
});



// ! Слайдер отзывы

new Swiper('.testimonials__slider', {
  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },
  autoplay: {
    delay: 13000,
  },
  keyboard: {
    enabled: true,
  },
  scrollbar: {
    el: '.testimonials__scrollbar',
    draggable: true,
  },

  breakpoints: {
    901: {
      slidesPerView: 1.5,
    },
    1201: {
      slidesPerView: 2.1,
    }
  }
});


// ! Маска для телефона

const tellInputs = document.querySelectorAll('input[type="tel"]');

const im = new Inputmask('+7 (999) 999-99-99');
im.mask(tellInputs);