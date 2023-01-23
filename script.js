const open = document.querySelector(".open");
const close = document.querySelector(".close");
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  open.classList.toggle("active");
  close.classList.toggle("active");
});
