document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuLinks = document.querySelectorAll(".mobile-menu ul li a");

  // Відкриття меню при натисканні на бургер
  burger.addEventListener("click", function (event) {
    event.stopPropagation();  // Перешкоджаємо пропагуванню події, щоб не закрило меню при натисканні на бургер
    burger.classList.toggle("active");  // Перемикаємо клас 'active' для анімації
    mobileMenu.classList.toggle("active");  // Відкриваємо меню
  });

  // Закриття меню при натисканні на посилання
  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");  // Закриваємо меню
      burger.classList.remove("active");  // Прибираємо анімацію хрестика
    });
  });

  // Закриття меню при натисканні поза меню та бургером
  document.addEventListener("click", function (event) {
    if (!mobileMenu.contains(event.target) && !burger.contains(event.target)) {
      mobileMenu.classList.remove("active");  // Закриваємо меню
      burger.classList.remove("active");  // Прибираємо анімацію хрестика
    }
  });
});
