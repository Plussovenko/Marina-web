// burger-menu
(function () {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".nav__list");
  const logosItem = document.querySelector(".header__logos");
  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
    logosItem.classList.toggle("active");
  });
})();
