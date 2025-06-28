const btn = document.querySelector('.btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click',function () {
  nav.classList.toggle('show');
});