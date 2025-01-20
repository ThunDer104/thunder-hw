// ! Аккордеон

const accordionLists = document.querySelectorAll('.accordion-list');
accordionLists.forEach(el => {
    el.addEventListener('click', (e) => {
        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return;

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

// ! Слайдер
const mySlider = new Splide('.splide', {
    arrows: false,
    classes: {
        pagination: 'splide__pagination splide__custom-pag',
        page: 'splide__pagination__page some-page',
    },
})
mySlider.mount();


// ! Burger 

const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const headerInner = document.querySelector('.header__inner');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    headerInner.classList.toggle('header__inner--mobile');
    header.classList.toggle('header--mobile');
})