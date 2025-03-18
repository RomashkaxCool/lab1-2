document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuLinks = document.querySelectorAll(".mobile-menu ul li a");


  burger.addEventListener("click", function (event) {
    event.stopPropagation();
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      burger.classList.remove("active");
    });
  });


  document.addEventListener("click", function (event) {
    if (!mobileMenu.contains(event.target) && !burger.contains(event.target)) {
      mobileMenu.classList.remove("active");
      burger.classList.remove("active");
    }
  });
});
