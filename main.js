// burger-menu
(function () {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".nav__list");
  const lockBody = document.getElementsByTagName("body");
  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
    lockBody.classList.toggle("lock");
  });
})();
