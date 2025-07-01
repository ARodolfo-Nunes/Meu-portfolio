const sideMenuBtn = document.querySelector('.btn');
const sideMenu = document.querySelector('.sideMenu');

function toggleSideMenu () {
  sideMenu.classList.toggle('open');
}

function closeSideMenu () {
  sideMenu.classList.remove('open');
}

sideMenuBtn.addEventListener('click', toggleSideMenu);

document.addEventListener('click', function (e) {
  if (!sideMenuBtn.contains(e.target) && !sideMenu.contains(e.target)) {
    closeSideMenu();
  }
})

sideMenu.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    closeSideMenu();
  }
})

//Atualiza o ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

//Rola até o topo da tela ao clicar em um elememto com a classe 'scroll-top'
document.querySelectorAll('.scroll-top').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({top:0})
})