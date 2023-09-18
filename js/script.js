const header = document.querySelector("header");
const headerMenu = document.querySelector(".header__menu");
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelectorAll("li a");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

menuBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("show");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    headerMenu.classList.remove("show");
  });
});
