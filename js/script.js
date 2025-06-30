const btn = document.querySelector('.btn');
const nav = document.querySelector('.nav');

function fecharMenu () {
  btn.classList.remove('active');
  nav.classList.remove('show');
}

btn.addEventListener('click',function () {
  btn.classList.toggle('active');
  nav.classList.toggle('show');
});

document.addEventListener('click', function(e) {
  if (!btn.contains(e.target) && !nav.contains(e.target)) {
    fecharMenu();
  }
})

nav.addEventListener('click', function () {
  fecharMenu();
})

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.scroll-top').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({top:0})
})