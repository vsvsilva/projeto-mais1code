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




const URL = "https://projeto-backend-mais1code.onrender.com/";



async function requisicaoProdutos() {
  const resposta = await fetch(URL);
  const produtos = await resposta.json();
  exibirProdutosRecomendados(produtos);
  exibirContinueComprando(produtos);
  exibiTecnologia(produtos);
}

requisicaoProdutos();



function exibirProdutosRecomendados(produtos) { 

  const produtosContainer = document.querySelector('.produtos-recomendados');

  const produtosRecomendados = produtos.slice(0, 10);

  produtosRecomendados.forEach(produto => {
    const item = document.createElement('div');
    item.className = 'produto-recomendado';

    item.innerHTML = `
    <img src="${produto.imagem}">
    <p>${produto.descricao}</p>
    
    <div class="avaliacao">
      <div class="avaliacao-estrelas">
        <img src="icons/Star-cheia.png">
        <img src="icons/Star-cheia.png">
        <img src="icons/Star-cheia.png">
        <img src="icons/Star-cheia.png">
        <img src="icons/Star-cheia.png">
      </div>
      <p>200</p>
    </div>
    <h3>R$ ${produto.preco}</h3>
    <p class="frete-gratis">Frete grátis</p>
`
    produtosContainer.appendChild(item);

  });



}


function exibirContinueComprando(produtos) {
  const divContinueComprando = document.querySelector('.continue-comprando-carrossel');

  const produtosContinueComprando = produtos.slice(10, 20);

  produtosContinueComprando.forEach(produto => {
    const item = document.createElement('div');
    item.className = 'produto-recomendado';

    item.innerHTML = `
    <img src="${produto.imagem}">
    <p>${produto.descricao}</p>
    
    <div class="avaliacao">
      <div class="avaliacao-estrelas">
        <img src="icons/Star-cheia.png">
        <img src="icons/Star-cheia.png">
        <img src="icons/Star-cheia.png">
        <img src="icons/Star-cheia.png">
        <img src="icons/Star-cheia.png">
      </div>
      <p>200</p>
    </div>
    <h3>R$ ${produto.preco}</h3>
    <p>Frete grátis</p>
    `;

    divContinueComprando.appendChild(item);

  });

}

function exibiTecnologia(produtos){


  const itensTecnologia = ["Monitor", "Headset", "Carregador", "Controle", "Tablet", "Relógio", "Fone", "Notebook", "Bateria"];

  produtos.forEach(produto => {
    if(itensTecnologia.indexOf(produto.descricao) >-1 ){
      console.log(produto.descricao);
    }
  });

  const divContinueComprando = document.querySelector('.continue-comprando-carrossel');



  produtos.forEach(produto => {
    const item = document.createElement('div');
    item.className = 'produto-recomendado';

    item.innerHTML = `
    <img src="${produto.imagem}">
    <p>${produto.descricao}</p>
    
    <div class="avaliacao">
      <div class="avaliacao-estrelas">
        <img src="icons/Star-cheia.png">
        <img src="icons/Star-cheia.png">
        <img src="icons/Star-cheia.png">
        <img src="icons/Star-cheia.png">
        <img src="icons/Star-cheia.png">
      </div>
      <p>200</p>
    </div>
    <h3>R$ ${produto.preco}</h3>
    <p>Frete grátis</p>
    `;

    divContinueComprando.appendChild(item);

  });
}
