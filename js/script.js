// Change Theme
const btnTheme = document.querySelector('[data-btn="theme"]');
const menuMobile = document.querySelector('[data-menu="lista"]');
const btnMenu = document.querySelector('[data-btn="mobile"]');

btnTheme.addEventListener('click', elemento);
btnMenu.addEventListener('click', elemento);

const ativa = {
  element:document,
  changeTheme() {
    this.element.documentElement.classList.toggle('theme');
    btnTheme.classList.toggle('ativo');
  },
  openMenu() {
    menuMobile.classList.toggle('ativo');
    btnMenu.classList.toggle('ativo');
  }
};

function elemento(event) {
  const nome = event.target.name;
  ativa[nome]();
};