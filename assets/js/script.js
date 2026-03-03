document.addEventListener("DOMContentLoaded", function () {
  const opneMenuBtn = document.querySelector(".open_mobile-menu");
  const mobileMenuContainer = document.querySelector(".mobile__menu");
  const closeMenuBtn = document.querySelector(".close_mobile-menu");

  opneMenuBtn.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
  });

  closeMenuBtn.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
  });
});
