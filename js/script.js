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