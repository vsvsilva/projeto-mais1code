function initCarrossel(botaoVoltarSelector, botaoAvancarSelector, carrosselSelector, qtdScroll) {
  const botaoVoltar = document.querySelector(botaoVoltarSelector);
  const botaoAvancar = document.querySelector(botaoAvancarSelector);
  const carrossel = document.querySelector(carrosselSelector);

  botaoVoltar.addEventListener('click', () => {
    carrossel.scrollLeft -= qtdScroll;
  });

  botaoAvancar.addEventListener('click', () => {
    carrossel.scrollLeft += qtdScroll;
  });
}

initCarrossel('.botao-voltar', '.botao-avancar', '.categorias-carrossel', 200);

initCarrossel('.botao-voltar-cc', '.botao-avancar-cc', '.continue-comprando-carrossel', 300);

initCarrossel('.botao-voltar-ic', '.botao-avancar-ic', '.itens-cozinha-carrossel', 300);

initCarrossel('.botao-voltar-mf', '.botao-avancar-mf', '.moda-feminina-carrossel', 300);

initCarrossel('.botao-voltar-pl', '.botao-avancar-pl', '.produtos-loja-carrossel', 300);
