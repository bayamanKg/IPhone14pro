const swiper = new Swiper(".swiper", {
  /*___________Параматеры___________ */

  // По вертикали "horizontal" либо по горизонтали "vertical"
  direction: "horizontal",

  //Круг true:"Да" false:"нет"
  loop: true,

  //Скорость
  speed: 800,

  //Анимации слайда по умолчанию стоить slide
  effect: "slide", //slide, fade, cube, coverflow, flip, creative, cards

  //Растояние между слайдами
  spaceBetween: 10,

  //Сколько изобожений должен отображаться на экране
  slidesPerView: 3,

  //Центривовать слайдер
  // centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Кнопки навигации
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //Автоматическое перелистование
  autoplay: {
    delay: 3000,
  },

  // // Адаптив слайдера
  breakpoints: {
    1051: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    581: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});
