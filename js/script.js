// Change Theme
const btnTheme = document.querySelector('[data-btn="theme"]');
const menuMobile = document.querySelector('[data-menu="lista"]');
const btnMenu = document.querySelector('[data-btn="mobile"]');


btnTheme.addEventListener('click', elemento);
btnMenu.addEventListener('click', elemento);

const ativa = {
  element:document,
  classe:'ativo',
  changeTheme() {
    this.element.documentElement.classList.toggle(this.classe);
    btnTheme.classList.toggle(this.classe);
  },
  openMenu() {
    menuMobile.classList.toggle(this.classe);
    btnMenu.classList.toggle(this.classe);
  },
};

function elemento(event) {
  const nome = event.target.name;
  ativa[nome](nome);
};