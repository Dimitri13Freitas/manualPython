const btnTheme = document.querySelector('[data-btn="theme"]');
const menuMobile = document.querySelector('[data-menu="lista"]');
const btnMenu = document.querySelector('[data-btn="mobile"]');
const imgIntroducao = document.querySelectorAll('.introducao img');

btnTheme.addEventListener('click', elemento);
btnMenu.addEventListener('click', elemento);

function saveTheme() {
  if(localStorage.theme == 'true') {
    document.documentElement.classList.add('ativo');
    btnTheme.classList.toggle('ativo');
  }
}
function imageHome() {
  if(document.documentElement.classList.contains('ativo')) {
    localStorage.theme = 'true';
    imgIntroducao.forEach(e => {
      e.classList.remove('ativo');
      imgIntroducao[0].classList.add('ativo');
    })
  } else {
    localStorage.theme = false;
    imgIntroducao.forEach(e => {
      e.classList.remove('ativo');
      imgIntroducao[1].classList.add('ativo')
    })
  }
}

const ativa = {
  element:document,
  classe:'ativo',
  changeTheme() {
    this.element.documentElement.classList.toggle(this.classe);
    btnTheme.classList.toggle(this.classe);
    imageHome();
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

// Sem load nas paginas
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

svgList = ['../img/assets/linkedin.svg','../img/assets/github.svg']

function svgIcon(link) {
    const f = fetch(link);
    f.then(r => {
      return r.text()
    }).then(element => {
      const anchors = document.querySelector('.redes a.teste');
      anchors.innerHTML = element
      anchors.classList.remove('teste');
    })
  }

window.onload = () => {
  saveTheme();
  imageHome();
  svgList.forEach(e => {
    svgIcon(e)
  })
}

const pre = document.querySelectorAll('pre');
 pre.forEach(e => {
  e.addEventListener('click', () => copy(e));
});

function copy(e) {
 navigator.clipboard.writeText(e.firstElementChild.innerText);
}