// Toggle mobile menu
const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-menu');

btn.addEventListener('click', () => {
  nav.classList.toggle('open');
});