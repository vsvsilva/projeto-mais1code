document.querySelector('.logo').addEventListener('click', (e) => {
  window.location.href = 'index.html';
});

function getProdutoId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

const URLITENS = "https://projeto-backend-mais1code.onrender.com/";
const URL = "https://projeto-backend-mais1code.onrender.com/items/";
const URLAVALIACAO = "https://projeto-backend-mais1code.onrender.com/avaliacao_itens/";

async function requisicaoProduto() {
  const produtoId = getProdutoId();
  if (!produtoId) {
    console.log("Produto com ID " + produtoId + " não encontrado!");
    return; // Adicionando um return para evitar continuar o código
  }

  try {
    const resposta = await fetch(URL + produtoId);
    const produto = await resposta.json();
    return produto; // Retorna o produto para uso posterior
  } catch (error) {
    console.log(error);
  }
}

async function requisicaoAvaliacao() {
  const produtoId = getProdutoId();
  if (!produtoId) {
    console.log("Produto com ID " + produtoId + " não encontrado!");
    return; // Adicionando um return para evitar continuar o código
  }

  try {
    const resposta = await fetch(URLAVALIACAO);
    const avaliacoes = await resposta.json();
    const avaliacoesProduto = avaliacoes.filter(avaliacao => avaliacao.item_id == produtoId);
    const notas = avaliacoesProduto.map(avaliacao => avaliacao.nota);
    const mediaNota = calcularMediaNota(notas);
    
    const produto = await requisicaoProduto(); // Chamando a função para obter o produto
    if (produto) {
      exibirProduto(produto, mediaNota);
      exibirEstrelasComentarios(mediaNota, notas.length);
      exibirAvaliacoes(produto, avaliacoesProduto);
    }


  } catch (error) {
    console.log(error);
  }

  try {
    const resposta = await fetch(URLITENS);
    const produtos = await resposta.json();
    exibirProdutosRelacionados(produtos);
  } catch (error) {
    console.warn(error)
  }
}

async function init() {
  await requisicaoAvaliacao(); // Chama a função que faz a requisição de avaliação
}

init(); // Inicializa as requisições

function exibirProduto(produto, mediaNota) {
  const imagemPrincipal = document.querySelector('#imagem-principal-produto');
  imagemPrincipal.src = produto.imagem;

  const nomeProduto = document.querySelector('.nome-produto');
  nomeProduto.textContent = produto.descricao;

  const mediaNotaElemento = document.querySelectorAll('.media-nota');
  mediaNotaElemento.forEach(mediaDiv => {    
    if (mediaNota !== null) {
      mediaDiv.textContent = mediaNota.toFixed(1).replace('.', ',');
      exibirEstrelas(mediaNota);
    }
  });

  // Exibir preço
  const precos = document.querySelectorAll('.preco');
  precos.forEach(precoDiv => {
    precoDiv.textContent = produto.preco;
  });

  // Exibir parcelas disponíveis
  const parcelasDisponiveis = document.querySelector('.parcelas-disponiveis');
  parcelasDisponiveis.textContent = calculaParcelasDisponiveis(produto.preco);

  // Exibir cor
  const corProduto = document.querySelectorAll('.cor-produto');
  corProduto.forEach(corDiv => {
    corDiv.textContent = produto.cor;
  });

  // Exibir imagens secundárias
  const imagensSecundarias = document.querySelector('.imagens-produto-carrossel-itens');
  for (let i = 0; i < 5; i++) {
    const img = document.createElement('img');
    img.src = produto.imagem;
    imagensSecundarias.appendChild(img);
  }

  // Exibir preço de compra
  document.querySelector('.preco-compra').textContent = produto.preco;

  // Exibir imagem de compra
  const ilustracaoCor = document.querySelector('.ilustracao-cor-produto');
  ilustracaoCor.src = produto.imagem;
}

// Função para exibir produtos de mesma categoria
function exibirProdutosRelacionados(produtos) {
  const produtoId = getProdutoId();
  const idNumerico = parseInt(produtoId, 10);
  const container = document.querySelector('.produtos-loja-carrossel');
  
  const produtosFiltrados = produtos.filter(produto => {
    const produtoIdNumerico = parseInt(produto.id, 10);
    
    if (idNumerico <= 1) {
        // Se o ID do produto atual for 1 ou menor, pega produtos somente à frente
        return produtoIdNumerico > idNumerico;
    } else if (produtoIdNumerico > idNumerico + 5) {
        // Se o produto estiver mais de 5 IDs à frente, não deve ser incluído
        return false;
    }
    
    // Para produtos com ID maior que 1, pega os próximos e anteriores
    return produtoIdNumerico >= (idNumerico - 5) && produtoIdNumerico <= (idNumerico + 5);
  });

  // Limita a 10 produtos
  const produtosLimitados = produtosFiltrados.slice(0, 10);

  produtosLimitados.forEach(produto => {
    const item = document.createElement('a');
    item.className = 'produto-recomendado';
    item.href = 'produto.html?id=' + produto.id;

    item.innerHTML = `
      <img class="recomendados-img" src="${produto.imagem}">
      <p>${produto.descricao}</p>
      <h3>R$ ${produto.preco}</h3>
      <spam class="frete-gratis">Frete grátis</spam>
    `;
    container.appendChild(item);
  });
}

function exibirAvaliacoes(produto, avaliacoes) {
  const containerAvaliacoes = document.querySelector('.avaliacoes-destaque');
  containerAvaliacoes.innerHTML = ''; // Limpa as avaliações anteriores

  // exibir imagens avaliação
  const avaliacaoImagensCotainer = document.querySelector('.avaliacoes-imagens');
  for(let i = 0; i < 5; i++){
    const img = document.createElement('img');
    img.src = produto.imagem;
    avaliacaoImagensCotainer.appendChild(img);
  }

  avaliacoes.forEach(avaliacao => {
    const comentarioDiv = document.createElement('div');
    comentarioDiv.className = 'comentario';

    // Adicionando a seção do usuário
    const usuarioDiv = document.createElement('div');
    usuarioDiv.className = 'usuario';
    const usuarioImg = document.createElement('img');
    usuarioImg.src = 'icons/perfil-comentario.png';
    const nomeUsuarioP = document.createElement('p');
    nomeUsuarioP.className = 'nome-usuario';
    nomeUsuarioP.textContent = avaliacao.localizacao;

    usuarioDiv.appendChild(usuarioImg);
    usuarioDiv.appendChild(nomeUsuarioP);
    comentarioDiv.appendChild(usuarioDiv);

    // Adicionando a seção de estrelas
    const avaliacaoEstrelasDiv = document.createElement('div');
    avaliacaoEstrelasDiv.className = 'avaliacao-estrelas';
    
    for (let i = 0; i < 5; i++) {
      const estrelaImg = document.createElement('img');
      estrelaImg.src = i < avaliacao.nota ? 'icons/Star-cheia.png' : 'icons/Star-vazia.png';
      avaliacaoEstrelasDiv.appendChild(estrelaImg);
    }
    
    comentarioDiv.appendChild(avaliacaoEstrelasDiv);

    // Adicionando a data da avaliação
    const dataAvaliacaoP = document.createElement('p');
    dataAvaliacaoP.className = 'data-avaliacao';
    const dataAleatoria = gerarDataAleatoria('2023-01-01', '2024-10-30');
    dataAvaliacaoP.textContent = `Avaliado em ${dataAleatoria.toLocaleDateString()}`;
    comentarioDiv.appendChild(dataAvaliacaoP);

    // Adicionando o texto da avaliação
    const textoAvaliacaoP = document.createElement('p');
    textoAvaliacaoP.textContent = avaliacao.comentario || 'Comentário não disponível.'; // Adaptar se necessário
    comentarioDiv.appendChild(textoAvaliacaoP);

    // Adicionando o comentário ao contêiner
    containerAvaliacoes.appendChild(comentarioDiv);
  });
}


function calculaParcelasDisponiveis(preco) {
  return Math.ceil(preco / 4).toFixed(2).replace('.', ',');
}

// Função para exibir as estrelas de acordo com a média
function exibirEstrelas(mediaNota) {
  const estrelasContainer = document.querySelector('.avaliacao-produto-estrelas');
  estrelasContainer.innerHTML = '';

  const estrelasCheias = Math.floor(mediaNota);
  const estrelasVazias = 5 - estrelasCheias;

  for (let i = 0; i < estrelasCheias; i++) {
    const img = document.createElement('img');
    img.src = 'icons/Star-cheia.png';
    estrelasContainer.appendChild(img);
  }

  for (let i = 0; i < estrelasVazias; i++) {
    const img = document.createElement('img');
    img.src = 'icons/Star-vazia.png';
    estrelasContainer.appendChild(img);
  }
}

// Função para exibir as estrelas de acordo com a média
function exibirEstrelasComentarios(mediaNota, numAvaliacoes) {
  const estrelasContainer = document.querySelector('.avaliacao-estrelas');
  estrelasContainer.innerHTML = '';

  const estrelasCheias = Math.floor(mediaNota);
  const estrelasVazias = 5 - estrelasCheias;

  for (let i = 0; i < estrelasCheias; i++) {
    const img = document.createElement('img');
    img.src = 'icons/Star-cheia.png';
    estrelasContainer.appendChild(img);
  }

  for (let i = 0; i < estrelasVazias; i++) {
    const img = document.createElement('img');
    img.src = 'icons/Star-vazia.png';
    estrelasContainer.appendChild(img);
  }

  const qtdAvaliacoes = document.querySelector('.qtd-avaliacoes');
  qtdAvaliacoes.textContent = numAvaliacoes ? numAvaliacoes : 0;
}

const comprarAgora = document.querySelector('.comprar-agora');
comprarAgora.addEventListener('click', () => {
  const produtoId = getProdutoId();
  window.location.href = 'carrinho.html?id=' + produtoId;
});

function calcularMediaNota(notas) {
  if (notas.length === 0) {
    return 0; // Retorna 0 se o array estiver vazio
  }
  const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  return soma / notas.length;
}



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

initCarrossel('.botao-voltar-pl', '.botao-avancar-pl', '.produtos-loja-carrossel', 200);


function gerarDataAleatoria(inicio, fim) {
  const dataInicio = new Date(inicio).getTime();
  const dataFim = new Date(fim).getTime();
  const dataAleatoria = new Date(dataInicio + Math.random() * (dataFim - dataInicio));
  return dataAleatoria;
}
