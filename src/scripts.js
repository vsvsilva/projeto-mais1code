const botaoVoltar = document.querySelector('.botao-voltar');
const botaoAvancar = document.querySelector('.botao-avancar');
const categoriasCarrossel = document.querySelector('.categorias-carrossel');

botaoVoltar.addEventListener('click', (e) => {
  categoriasCarrossel.scrollLeft -= 200;
});

botaoAvancar.addEventListener('click', (e) => {
  categoriasCarrossel.scrollLeft += 200;
});


const botaoVoltarCC = document.querySelector('.botao-voltar-cc');
const botaoAvancarCC = document.querySelector('.botao-avancar-cc');
const continueComprandoCarrossel = document.querySelector('.continue-comprando-carrossel');

botaoVoltarCC.addEventListener('click', (e) => {
  continueComprandoCarrossel.scrollLeft -= 500;
});

botaoAvancarCC.addEventListener('click', (e) => {
  continueComprandoCarrossel.scrollLeft += 500;
});


