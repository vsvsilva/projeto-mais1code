document.querySelector('.logo-carrinho').addEventListener('click', (e)=> {
  window.location.href = 'index.html';
});

function getProdutoId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

const URL = "https://projeto-backend-mais1code.onrender.com/items/";

async function requisicaoProduto() {
  const produtoId = getProdutoId();
  if (!produtoId) {
    console.log("Produto com ID " + produtoId + " não encontrado!");
    return;
  }

  try {
    const resposta = await fetch(URL + produtoId);
    const produto = await resposta.json();
    exibirProduto(produto);
  } catch (error) {
    console.log(error);
  }
}

async function init() {
  await requisicaoProduto();
}

init();

function exibirProduto(produto) {
  const produtoImg = document.querySelector('.produto-img');
  produtoImg.src = produto.imagem;
  produtoImg.alt = produto.descricao;
  
  const produtoDescricao = document.querySelector('.produto-nome');
  produtoDescricao.textContent = produto.descricao;
  
  const produtoPreco = document.querySelector('.preco');
  produtoPreco.textContent = "Total do Pedido: R$" + produto.preco;
}


// Seleciona o modal, o botão de finalizar e o elemento de contagem regressiva
const successModal = document.getElementById("successModal");
const finalizarCompraBtn = document.querySelector(".finalizar-compra");
const closeModalBtn = document.querySelector(".close-btn");
const countdownElement = document.getElementById("countdown");

let countdownValue = 5; // Valor inicial do contador em segundos

// Função para exibir o modal e iniciar o contador regressivo
function showModal() {
    successModal.style.display = "flex";
    countdownElement.textContent = countdownValue;
    
    // Atualiza o contador a cada segundo
    const countdownInterval = setInterval(() => {
        countdownValue--;
        countdownElement.textContent = countdownValue;

        // Redireciona quando o contador chegar a zero
        if (countdownValue <= 0) {
            clearInterval(countdownInterval);
            window.location.href = "index.html"; // Redireciona para a página inicial
        }
    }, 1000); // Atualiza a cada segundo (1000 ms)
}

// Evento para abrir o modal ao clicar em "Finalizar Compra"
finalizarCompraBtn.addEventListener("click", showModal);

// Evento para fechar o modal ao clicar no botão de fechar
closeModalBtn.addEventListener("click", () => {
    successModal.style.display = "none";
    window.location.href = "index.html"; // Redireciona para a página inicial ao fechar
});

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.addEventListener("click", (event) => {
    if (event.target === successModal) {
        successModal.style.display = "none";
        window.location.href = "index.html";
    }
});
