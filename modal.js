const menuBtn = document.querySelector('.menuIcon');
const menu = document.querySelector('.topNav2list');
const menuOptions = document.querySelectorAll('.topNav2Content');
const body = document.querySelector('body');

function openMenu() {
  body.classList.add('active');
  menu.classList.add('menuModal');
}

function closeMenu() {
  menu.classList.remove('menuModal');
  body.classList.remove('active');
}

menuBtn.addEventListener('click', openMenu);
menuOptions.forEach((menu) => menu.addEventListener('click', closeMenu));