// Change Theme
const btnTheme = document.querySelector('[data-btn="theme"]');

btnTheme.addEventListener('click', elemento);

const ativa = {
  element:document,
  changeTheme(value) {
    this.element.documentElement.classList.toggle('theme');
    btnTheme.classList.toggle('ativo');
  },
};

function elemento(event) {
  const nome = event.target.name;
  const valor = event.target.value;
  ativa[nome](valor);
};

// if