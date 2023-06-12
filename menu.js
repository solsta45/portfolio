const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu_02");
const links = document.querySelectorAll(".menu_02 li a");
const dropdownMenu = document.querySelector(".dropdown-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  dropdownMenu.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
    dropdownMenu.classList.remove("active");
  });
});
