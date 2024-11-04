document.querySelector('.logo-carrinho').addEventListener('click', (e)=> {
  window.location.href = 'index.html';
});

function getProdutoId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

