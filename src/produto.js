document.querySelector('.logo').addEventListener('click', (e)=> {
  window.location.href = 'index.html';
});


function getProdutoId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
};

const URL = "https://projeto-backend-mais1code.onrender.com/items/";

async function requisicaoProduto() {
  const produtoId = getProdutoId();

  if(!produtoId){
    console.log("Porudot com ID" + produtoId + "não encontrado!");
  };

  try {
    const resposta = await fetch(URL+produtoId);
    const produto = await resposta.json();
    exibirProduto(produto);
  } catch (error) {
    console.log(error)
  }
};

requisicaoProduto();


function exibirProduto(produto) {
  const imagemPrincipal = document.querySelector('#imagem-principal-produto');
  imagemPrincipal.src = produto.imagem;

  const nomeProduto = document.querySelector('.nome-produto');
  nomeProduto.textContent = produto.descricao;

  document.querySelector('.preco').textContent = produto.preco;


  const imagensSecundarias = document.querySelector('.imagens-produto-carrossel-itens');
  
  for(let i = 0; i < 5; i++){
    const img = document.createElement('img');
    img.src = produto.imagem;
    imagensSecundarias.appendChild(img);
  }  
}


const comprarAgora = document.querySelector('.comprar-agora');
comprarAgora.addEventListener('click', (e) => {
  const produtoId = getProdutoId();
  window.location.href = 'carrinho.html?id=' + produtoId;
});
