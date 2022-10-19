const btnTheme = document.querySelector('[data-btn="theme"]');
const menuMobile = document.querySelector('[data-menu="lista"]');
const btnMenu = document.querySelector('[data-btn="mobile"]');


btnTheme.addEventListener('click', elemento);
btnMenu.addEventListener('click', elemento);

function saveTheme() {
  if(localStorage.theme == 'true') {
    document.documentElement.classList.add('ativo');
    btnTheme.classList.toggle('ativo');
  }
}

const ativa = {
  element:document,
  classe:'ativo',
  changeTheme() {
    this.element.documentElement.classList.toggle(this.classe);
    btnTheme.classList.toggle(this.classe);
    if(btnTheme.classList.contains(this.classe)) {
      localStorage.theme = 'true';
    } else {
      localStorage.theme = false;
    }
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


// Sem Reload nas paginas 
const a = document.querySelectorAll('[data-menu="lista"] a');

a.forEach(e => {
  e.addEventListener('click', handleClick);
})

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href)
}


async function fetchPage(link) {
  response = await fetch(link);
  const pageText = await response.text();
  pushHtml(pageText);
}

function pushHtml(html) {
  const novohtml = document.createElement('div');
  novohtml.innerHTML = html;
  
  let AntigoConteudo = document.querySelector('main');
  let novoConteudo = novohtml.querySelector('main');

  document.title = novohtml.querySelector('title').innerText
  AntigoConteudo.innerHTML = novoConteudo.innerHTML;
}
window.addEventListener('popstate', () => {
  fetchPage(window.location);
})

window.onload = () => {
  saveTheme();
}
