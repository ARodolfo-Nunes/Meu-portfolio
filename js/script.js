const btn = document.querySelector('.btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click',function () {
  btn.classList.toggle('active');
  nav.classList.toggle('show');
});