// Rodar no terminal: node criar-exemplos.js


const items = [
  { id: 1, preco: 99.99, cor: "Azul", qtde_estoque: 15, descricao: "Camisa polo 100% algodão", imagem: "./produtos/camisa-polo-azul.webp", ativo: true },
  { id: 2, preco: 299.99, cor: "Preto", qtde_estoque: 10, descricao: "Tênis Esportivo confortável", imagem: "./produtos/tenis-esportivo-preto.webp", ativo: true },
  { id: 3, preco: 2499.99, cor: "Preto", qtde_estoque: 5, descricao: "Smartphone de última geração", imagem: "./produtos/smartphone-preto.webp", ativo: true },
  { id: 4, preco: 5999.99, cor: "Cinza", qtde_estoque: 3, descricao: "Notebook Gamer de alta performance", imagem: "./produtos/notebook-gamer-cinza.jpeg", ativo: true },
  { id: 5, preco: 199.99, cor: "Preto", qtde_estoque: 20, descricao: "Fone de Ouvido com cancelamento de ruído", imagem: "./produtos/fone-ouvido-preto.webp", ativo: true },
  { id: 6, preco: 49.99, cor: "Branco", qtde_estoque: 30, descricao: "Camiseta Básica em algodão", imagem: "./produtos/camisa-basica-branca.webp", ativo: true },
  { id: 7, preco: 399.99, cor: "Preto", qtde_estoque: 8, descricao: "Relógio Digital com monitoramento de saúde", imagem: "./produtos/relogio-digital-preto.webp", ativo: true },
  { id: 8, preco: 149.99, cor: "Cinza", qtde_estoque: 25, descricao: "Mochila resistente à água", imagem: "./produtos/mochila-resistente-cinza.webp", ativo: true },
  { id: 9, preco: 1099.99, cor: "Preto", qtde_estoque: 6, descricao: "Tablet com tela de alta resolução", imagem: "./produtos/tablet-cinza.jpeg", ativo: true },
  { id: 10, preco: 1299.99, cor: "Preto", qtde_estoque: 4, descricao: "Monitor 4K de alta definição", imagem: "./produtos/monitor-4k-preto.jpeg", ativo: true },
  { id: 11, preco: 799.99, cor: "Preto", qtde_estoque: 10, descricao: "Cadeira Gamer ergonômica", imagem: "./produtos/cadeira-gamer-preta.jpeg", ativo: true },
  { id: 12, preco: 299.99, cor: "Branco", qtde_estoque: 20, descricao: "Teclado Mecânico RGB", imagem: "./produtos/teclado-mecanico-branco.jpeg", ativo: true },
  { id: 13, preco: 149.99, cor: "Preto", qtde_estoque: 25, descricao: "Mouse Sem Fio de alta precisão", imagem: "./produtos/mouse-semfio-preto.jpeg", ativo: true },
  { id: 14, preco: 2499.99, cor: "Preto", qtde_estoque: 4, descricao: "Câmera DSLR com lente 18-55mm", imagem: "./produtos/camera-preto.jpeg", ativo: true },
  { id: 15, preco: 299.99, cor: "Vermelho", qtde_estoque: 15, descricao: "Headset Gamer com microfone", imagem: "./produtos/headset-vermelho.jpeg", ativo: true },
  { id: 16, preco: 499.99, cor: "Branco", qtde_estoque: 12, descricao: "Impressora multifuncional", imagem: "./produtos/impressora-branco.jpeg", ativo: true },
  { id: 17, preco: 89.99, cor: "Preto", qtde_estoque: 30, descricao: "Suporte para Monitor ajustável", imagem: "./produtos/suporte-monitor-preto.jpeg", ativo: true },
  { id: 18, preco: 129.99, cor: "Branco", qtde_estoque: 22, descricao: "Carregador Portátil de alta capacidade", imagem: "./produtos/carregador-portatil-branco.jpeg", ativo: true },
  { id: 19, preco: 299.99, cor: "Preto", qtde_estoque: 18, descricao: "Ventilador com controle remoto", imagem: "./produtos/ventilador-preto.jpeg", ativo: true },
  { id: 20, preco: 69.99, cor: "Branco", qtde_estoque: 50, descricao: "Luminária de Mesa ajustável com LED", imagem: "./produtos/luminaria-branco.jpeg", ativo: true },
  { id: 21, preco: 49.99, cor: "Preto", qtde_estoque: 40, descricao: "Controle Remoto Universal", imagem: "./produtos/controle-remoto-preto.jpeg", ativo: true },
  { id: 22, preco: 59.99, cor: "Branco", qtde_estoque: 35, descricao: "Bateria Recarregável", imagem: "./produtos/bateria-branco.jpeg", ativo: true },
  { id: 23, preco: 799.99, cor: "Branco", qtde_estoque: 10, descricao: "Micro-ondas Digital", imagem: "./produtos/microondas-branco.jpeg", ativo: true },
  { id: 24, preco: 2499.99, cor: "Inox", qtde_estoque: 5, descricao: "Geladeira Frost-Free", imagem: "./produtos/geladeira-inox.jpeg", ativo: true },
  { id: 25, preco: 1199.99, cor: "Preto", qtde_estoque: 6, descricao: "Fogão 4 Bocas", imagem: "./produtos/fogao-preto.jpeg", ativo: true },
  { id: 26, preco: 399.99, cor: "Vermelho", qtde_estoque: 8, descricao: "Aspirador de Pó", imagem: "./produtos/aspirador-po-vermelho.jpeg", ativo: true },
  { id: 27, preco: 1999.99, cor: "Branco", qtde_estoque: 3, descricao: "Máquina de Lavar", imagem: "./produtos/maquina-lavar-branco.jpeg", ativo: true },
  { id: 28, preco: 1999.99, cor: "Cinza", qtde_estoque: 3, descricao: "Secadora de Roupas", imagem: "./produtos/secadora-cinza.jpeg", ativo: true },
  { id: 29, preco: 399.99, cor: "Branco", qtde_estoque: 15, descricao: "Purificador de Água", imagem: "./produtos/purificador-agua-branco.jpeg", ativo: true },
  { id: 30, preco: 2499.99, cor: "Preto", qtde_estoque: 4, descricao: "Smart TV 50 polegadas", imagem: "./produtos/smarttv-preto.jpeg", ativo: true }
];


const URL = 'https://projeto-backend-mais1code.onrender.com/items';


items.forEach(item => {
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Produto criado com sucesso:', data);
  })
  .catch(error => {
    console.error('Erro ao criar o produto:', error);
  });
});


