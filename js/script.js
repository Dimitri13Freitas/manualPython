// Change Theme
const btnTheme = document.querySelector('[data-btn="theme"]');

btnTheme.addEventListener('click', changeTheme);

function changeTheme() {
  document.documentElement.classList.toggle('theme')
  btnTheme.classList.toggle('ativo');
};