const swiper = new Swiper('.second-section__container-gallery', {
    // Бесконечный цикл прокрутки (картинки идут по кругу)
    loop: true, 
    
    // Количество видимых карточек одновременно
    slidesPerView: 3, 
    
    // Расстояние (gap) между карточками в px
    spaceBetween: 24, 

    // Включаем поддержку перетаскивания мышью и свайпов на телефонах
    grabCursor: true,

    // Подключаем нижнюю полосу прокрутки
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true, // Можно перетаскивать сам бегунок
    },

    // Адаптив под разные экраны
    breakpoints: {
        320: {
            slidesPerView: 1, // На телефонах 1 карточка
            spaceBetween: 16
        },
        768: {
            slidesPerView: 2, // На планшетах 2
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3, // На ПК 3 карточки
            spaceBetween: 24
        }
    }
});