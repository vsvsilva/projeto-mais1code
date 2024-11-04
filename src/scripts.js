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

initCarrossel('.botao-voltar-ic', '.botao-avancar-ic', '.eletrodomesticos-carrossel', 300);

initCarrossel('.botao-voltar-mf', '.botao-avancar-mf', '.moda-carrossel', 300);




const URL = "https://projeto-backend-mais1code.onrender.com/";

async function requisicaoProdutos() {
  const resposta = await fetch(URL);
  const produtos = await resposta.json();
  
  exibirProdutos(produtos, '.produtos-recomendados', 0, 10);
  exibirProdutos(produtos, '.continue-comprando-carrossel', 10, 20);
  exibirProdutosPorCategoria(produtos, '.eletrodomesticos-carrossel', ["geladeira", "fogão", "micro-ondas", "máquina", "secadora", "liquidificador", "freezer", "aspirador", "tv"]);
  // exibirProdutosPorCategoria(produtos, '.moda-carrossel', ["camisa", "calça", "jaqueta", "óculos", "boné", "camiseta"]);
  exibirProdutosPorCategoria(produtos, '.moda-carrossel', ["camisa", "polo" ,"camiseta", "mochila", "tênis", "jaqueta", "óculos", "boné", "calça", "cinto", "bolsa"]);
}

requisicaoProdutos();

// Função genérica para exibir produtos por posição
function exibirProdutos(produtos, seletor, inicio, fim) {
  const container = document.querySelector(seletor);
  const produtosExibidos = produtos.slice(inicio, fim);

  produtosExibidos.forEach(produto => {
    const item = document.createElement('a');
    item.className = 'produto-recomendado';
    item.href = 'produto.html?id=' + produto.id;

    item.innerHTML = `
      <img class="recomendados-img" src="${produto.imagem}">
      <p class="descricao">${produto.descricao}</p>
      
      <h3>R$ ${produto.preco}</h3>
      <spam class="frete-gratis">Frete grátis</spam>
    `;
    container.appendChild(item);
  });
}

// Função para exibir produtos filtrados por palavras-chave
function exibirProdutosPorCategoria(produtos, seletor, palavrasChave) {
  const container = document.querySelector(seletor);
  const produtosFiltrados = produtos.filter(produto =>
    palavrasChave.some(palavra => produto.descricao.toLowerCase().includes(palavra))
  );

  produtosFiltrados.forEach(produto => {
    const item = document.createElement('a');
    item.className = 'produto-recomendado';
    item.href = 'produto.html?id=' + produto.id;

    item.innerHTML = `
      <img class="${seletor === '.eletrodomesticos-carrossel' ? 'eletrodomesticos-img' : 'moda-img'}" src="${produto.imagem}">
      <p>${produto.descricao}</p>
      
      <h3>R$ ${produto.preco}</h3>
      <spam class="frete-gratis">Frete grátis</spam>
    `;
    container.appendChild(item);
  });
}


