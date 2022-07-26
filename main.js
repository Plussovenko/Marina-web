// Инициализация Сладйера
const swiper = new Swiper(".swiper", {
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragSize: 70,
  },
  speed: 500,
  // автовісота
  autoHeight: true,

  //курсор руки
  grabCursor: true,
  //количество слайдов на странице
  slidesPerView: 1,
  //расстояние между слайдами
  spaceBetween: 30,
  //Клавиатура
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
  //Мыщка
  mousewheel: {
    invert: true,
    eventsTarget: ".slider__slide",
    sensitivity: 1,
  },
  breakpoints: {
    // when window width is >= 767px
    767: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
  },
  preloadImages: false,
  lazy: {
    loadPrevNext: true,
    loadOnTransitionStart: true,
  },
  watchSlidesProgress: true,
  watchSlidersVisibility: true,
});

// Scroll to anchors
(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();
