const avaliacoes = [
  {
    "id": 1,
    "imagem_url": "./produtos/camisa-polo-azul.webp",
    "video_url": "https://videos.com/video1.mp4",
    "comentario": "Ótima camisa, material confortável e durável.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-10-10T10:10:10.000Z",
    "item_id": 1
  },
  {
    "id": 2,
    "imagem_url": "./produtos/camisa-polo-azul.webp",
    "video_url": "https://videos.com/video2.mp4",
    "comentario": "Camisa com um bom caimento, recomendo.",
    "nota": 4,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2024-10-11T11:11:11.000Z",
    "item_id": 1
  },
  {
    "id": 3,
    "imagem_url": "./produtos/camisa-polo-azul.webp",
    "video_url": "https://videos.com/video3.mp4",
    "comentario": "Produto de boa qualidade, mas preço elevado.",
    "nota": 3,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2024-10-12T12:12:12.000Z",
    "item_id": 1
  },
  {
    "id": 4,
    "imagem_url": "./produtos/camisa-polo-azul.webp",
    "video_url": "https://videos.com/video4.mp4",
    "comentario": "A cor desbotou após algumas lavagens.",
    "nota": 2,
    "localizacao": "Porto Alegre, RS",
    "criado_em": "2024-10-13T13:13:13.000Z",
    "item_id": 1
  },
  {
    "id": 5,
    "imagem_url": "./produtos/camisa-polo-azul.webp",
    "video_url": "https://videos.com/video5.mp4",
    "comentario": "Super confortável e estilosa!",
    "nota": 5,
    "localizacao": "Curitiba, PR",
    "criado_em": "2024-10-14T14:14:14.000Z",
    "item_id": 1
  },
  {
    "id": 6,
    "imagem_url": "./produtos/camisa-polo-azul.webp",
    "video_url": "https://videos.com/video6.mp4",
    "comentario": "Camisa simples, mas atende bem ao propósito.",
    "nota": 4,
    "localizacao": "Salvador, BA",
    "criado_em": "2024-10-15T15:15:15.000Z",
    "item_id": 1
  },
  {
    "id": 7,
    "imagem_url": "./produtos/tenis-esportivo-preto.webp",
    "video_url": "https://videos.com/video7.mp4",
    "comentario": "Tênis confortável, perfeito para esportes.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-10-10T10:10:10.000Z",
    "item_id": 2
  },
  {
    "id": 8,
    "imagem_url": "./produtos/tenis-esportivo-preto.webp",
    "video_url": "https://videos.com/video8.mp4",
    "comentario": "Boa qualidade, mas podia ser mais resistente.",
    "nota": 4,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2024-10-11T11:11:11.000Z",
    "item_id": 2
  },
  {
    "id": 9,
    "imagem_url": "./produtos/tenis-esportivo-preto.webp",
    "video_url": "https://videos.com/video9.mp4",
    "comentario": "Muito bonito e confortável.",
    "nota": 5,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2024-10-12T12:12:12.000Z",
    "item_id": 2
  },
  {
    "id": 10,
    "imagem_url": "./produtos/tenis-esportivo-preto.webp",
    "video_url": "https://videos.com/video10.mp4",
    "comentario": "Solado desgasta rápido.",
    "nota": 3,
    "localizacao": "Porto Alegre, RS",
    "criado_em": "2024-10-13T13:13:13.000Z",
    "item_id": 2
  },
  {
    "id": 11,
    "imagem_url": "./produtos/tenis-esportivo-preto.webp",
    "video_url": "https://videos.com/video11.mp4",
    "comentario": "Perfeito para treinos diários.",
    "nota": 4,
    "localizacao": "Curitiba, PR",
    "criado_em": "2024-10-14T14:14:14.000Z",
    "item_id": 2
  },
  {
    "id": 12,
    "imagem_url": "./produtos/tenis-esportivo-preto.webp",
    "video_url": "https://videos.com/video12.mp4",
    "comentario": "Poderia ser mais leve.",
    "nota": 3,
    "localizacao": "Salvador, BA",
    "criado_em": "2024-10-15T15:15:15.000Z",
    "item_id": 2
  },
  {
    "id": 13,
    "imagem_url": "./produtos/smartphone-preto.webp",
    "video_url": "https://videos.com/video13.mp4",
    "comentario": "Desempenho excelente, ótima câmera.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-10-10T10:10:10.000Z",
    "item_id": 3
  },
  {
    "id": 14,
    "imagem_url": "./produtos/smartphone-preto.webp",
    "video_url": "https://videos.com/video14.mp4",
    "comentario": "Muito rápido e com bom armazenamento.",
    "nota": 4,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2024-10-11T11:11:11.000Z",
    "item_id": 3
  },
  {
    "id": 15,
    "imagem_url": "./produtos/smartphone-preto.webp",
    "video_url": "https://videos.com/video15.mp4",
    "comentario": "Excelente custo-benefício.",
    "nota": 5,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2024-10-12T12:12:12.000Z",
    "item_id": 3
  },
  {
    "id": 16,
    "imagem_url": "./produtos/smartphone-preto.webp",
    "video_url": "https://videos.com/video16.mp4",
    "comentario": "Bateria dura pouco.",
    "nota": 3,
    "localizacao": "Porto Alegre, RS",
    "criado_em": "2024-10-13T13:13:13.000Z",
    "item_id": 3
  },
  {
    "id": 17,
    "imagem_url": "./produtos/smartphone-preto.webp",
    "video_url": "https://videos.com/video17.mp4",
    "comentario": "Tela excelente, mas preço elevado.",
    "nota": 4,
    "localizacao": "Curitiba, PR",
    "criado_em": "2024-10-14T14:14:14.000Z",
    "item_id": 3
  },
  {
    "id": 18,
    "imagem_url": "./produtos/smartphone-preto.webp",
    "video_url": "https://videos.com/video18.mp4",
    "comentario": "Aparelho muito bonito e moderno.",
    "nota": 5,
    "localizacao": "Salvador, BA",
    "criado_em": "2024-10-15T15:15:15.000Z",
    "item_id": 3
  },
  {
    "id": 19,
    "imagem_url": "./produtos/relógio-digital-prata.webp",
    "video_url": "https://videos.com/video19.mp4",
    "comentario": "Relógio estiloso e funcional, adorei.",
    "nota": 5,
    "localizacao": "Brasília, DF",
    "criado_em": "2024-10-16T10:10:10.000Z",
    "item_id": 4
  },
  {
    "id": 20,
    "imagem_url": "./produtos/relógio-digital-prata.webp",
    "video_url": "https://videos.com/video20.mp4",
    "comentario": "Funciona bem, mas achei a pulseira frágil.",
    "nota": 3,
    "localizacao": "Fortaleza, CE",
    "criado_em": "2024-10-17T11:11:11.000Z",
    "item_id": 4
  },
  {
    "id": 21,
    "imagem_url": "./produtos/relógio-digital-prata.webp",
    "video_url": "https://videos.com/video21.mp4",
    "comentario": "Boa qualidade e acabamento impecável.",
    "nota": 4,
    "localizacao": "Recife, PE",
    "criado_em": "2024-10-18T12:12:12.000Z",
    "item_id": 4
  },
  {
    "id": 22,
    "imagem_url": "./produtos/relógio-digital-prata.webp",
    "video_url": "https://videos.com/video22.mp4",
    "comentario": "Bonito, mas não durou muito tempo.",
    "nota": 2,
    "localizacao": "Salvador, BA",
    "criado_em": "2024-10-19T13:13:13.000Z",
    "item_id": 4
  },
  {
    "id": 23,
    "imagem_url": "./produtos/relógio-digital-prata.webp",
    "video_url": "https://videos.com/video23.mp4",
    "comentario": "Design moderno e fácil de ajustar.",
    "nota": 5,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2024-10-20T14:14:14.000Z",
    "item_id": 4
  },
  {
    "id": 24,
    "imagem_url": "./produtos/relógio-digital-prata.webp",
    "video_url": "https://videos.com/video24.mp4",
    "comentario": "Ótima funcionalidade e custo-benefício.",
    "nota": 4,
    "localizacao": "Porto Alegre, RS",
    "criado_em": "2024-10-21T15:15:15.000Z",
    "item_id": 4
  },
  {
    "id": 25,
    "imagem_url": "./produtos/jaqueta-jeans-azul.webp",
    "video_url": "https://videos.com/video25.mp4",
    "comentario": "Jaqueta incrível e bem acabada.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-10-22T10:10:10.000Z",
    "item_id": 5
  },
  {
    "id": 26,
    "imagem_url": "./produtos/jaqueta-jeans-azul.webp",
    "video_url": "https://videos.com/video26.mp4",
    "comentario": "Confortável, mas achei o preço alto.",
    "nota": 3,
    "localizacao": "Curitiba, PR",
    "criado_em": "2024-10-23T11:11:11.000Z",
    "item_id": 5
  },
  {
    "id": 27,
    "imagem_url": "./produtos/jaqueta-jeans-azul.webp",
    "video_url": "https://videos.com/video27.mp4",
    "comentario": "Material de qualidade e corte perfeito.",
    "nota": 4,
    "localizacao": "Fortaleza, CE",
    "criado_em": "2024-10-24T12:12:12.000Z",
    "item_id": 5
  },
  {
    "id": 28,
    "imagem_url": "./produtos/jaqueta-jeans-azul.webp",
    "video_url": "https://videos.com/video28.mp4",
    "comentario": "Ficou larga nos ombros, mas gostei.",
    "nota": 3,
    "localizacao": "Recife, PE",
    "criado_em": "2024-10-25T13:13:13.000Z",
    "item_id": 5
  },
  {
    "id": 29,
    "imagem_url": "./produtos/jaqueta-jeans-azul.webp",
    "video_url": "https://videos.com/video29.mp4",
    "comentario": "Super estilosa, ótima para o inverno.",
    "nota": 5,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2024-10-26T14:14:14.000Z",
    "item_id": 5
  },
  {
    "id": 30,
    "imagem_url": "./produtos/jaqueta-jeans-azul.webp",
    "video_url": "https://videos.com/video30.mp4",
    "comentario": "Bom produto, mas poderia ser mais quente.",
    "nota": 4,
    "localizacao": "Brasília, DF",
    "criado_em": "2024-10-27T15:15:15.000Z",
    "item_id": 5
  },
  {
    "id": 31,
    "imagem_url": "./produtos/bolsa-couro-marrom.webp",
    "video_url": "https://videos.com/video31.mp4",
    "comentario": "Bolsa linda e com ótimo acabamento.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-10-28T10:10:10.000Z",
    "item_id": 6
  },
  {
    "id": 32,
    "imagem_url": "./produtos/bolsa-couro-marrom.webp",
    "video_url": "https://videos.com/video32.mp4",
    "comentario": "Couro de excelente qualidade.",
    "nota": 4,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2024-10-29T11:11:11.000Z",
    "item_id": 6
  },
  {
    "id": 33,
    "imagem_url": "./produtos/bolsa-couro-marrom.webp",
    "video_url": "https://videos.com/video33.mp4",
    "comentario": "Muito bonita, mas achei pequena.",
    "nota": 3,
    "localizacao": "Salvador, BA",
    "criado_em": "2024-10-30T12:12:12.000Z",
    "item_id": 6
  },
  {
    "id": 34,
    "imagem_url": "./produtos/bolsa-couro-marrom.webp",
    "video_url": "https://videos.com/video34.mp4",
    "comentario": "Elegante e espaçosa.",
    "nota": 5,
    "localizacao": "Fortaleza, CE",
    "criado_em": "2024-10-31T13:13:13.000Z",
    "item_id": 6
  },
  {
    "id": 35,
    "imagem_url": "./produtos/bolsa-couro-marrom.webp",
    "video_url": "https://videos.com/video35.mp4",
    "comentario": "A alça é um pouco desconfortável.",
    "nota": 3,
    "localizacao": "Recife, PE",
    "criado_em": "2024-11-01T14:14:14.000Z",
    "item_id": 6
  },
  {
    "id": 36,
    "imagem_url": "./produtos/bolsa-couro-marrom.webp",
    "video_url": "https://videos.com/video36.mp4",
    "comentario": "Produto excelente, recomendo.",
    "nota": 5,
    "localizacao": "Porto Alegre, RS",
    "criado_em": "2024-11-02T15:15:15.000Z",
    "item_id": 6
  },
  {
    "id": 37,
    "imagem_url": "./produtos/oculos-sol-preto.webp",
    "video_url": "https://videos.com/video37.mp4",
    "comentario": "Óculos super estiloso e leve.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-11-03T10:10:10.000Z",
    "item_id": 7
  },
  { "id": 38, "imagem_url": "./produtos/oculos-sol-preto.webp", "video_url": "https://videos.com/video38.mp4", "comentario": "Amei o design, mas o material parece frágil.", "nota": 3, "localizacao": "Belo Horizonte, MG", "criado_em": "2024-11-04T11:11:11.000Z", "item_id": 7 },
  { "id": 39, "imagem_url": "./produtos/oculos-sol-preto.webp", "video_url": "https://videos.com/video39.mp4", "comentario": "Protege bem do sol e é muito bonito.", "nota": 4, "localizacao": "Recife, PE", "criado_em": "2024-11-05T12:12:12.000Z", "item_id": 7 },
  { "id": 40, "imagem_url": "./produtos/oculos-sol-preto.webp", "video_url": "https://videos.com/video40.mp4", "comentario": "Bom produto, mas achei caro.", "nota": 3, "localizacao": "Curitiba, PR", "criado_em": "2024-11-06T13:13:13.000Z", "item_id": 7 },
  {
    "id": 41,
    "imagem_url": "./produtos/oculos-sol-preto.webp",
    "video_url": "https://videos.com/video41.mp4",
    "comentario": "Excelente qualidade, muito confortáveis.",
    "nota": 5,
    "localizacao": "Salvador, BA",
    "criado_em": "2024-11-07T10:10:10.000Z",
    "item_id": 7
  },
  {
    "id": 42,
    "imagem_url": "./produtos/oculos-sol-preto.webp",
    "video_url": "https://videos.com/video42.mp4",
    "comentario": "Design clássico, combina com tudo.",
    "nota": 4,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-11-08T11:11:11.000Z",
    "item_id": 7
  },
  {
    "id": 43,
    "imagem_url": "./produtos/tenis-casual-branco.webp",
    "video_url": "https://videos.com/video43.mp4",
    "comentario": "Confortáveis e estilosos, ótimos para o dia a dia.",
    "nota": 5,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2024-11-09T12:12:12.000Z",
    "item_id": 8
  },
  {
    "id": 44,
    "imagem_url": "./produtos/tenis-casual-branco.webp",
    "video_url": "https://videos.com/video44.mp4",
    "comentario": "Bom custo-benefício, mas a sola poderia ser mais durável.",
    "nota": 3,
    "localizacao": "Curitiba, PR",
    "criado_em": "2024-11-10T13:13:13.000Z",
    "item_id": 8
  },
  {
    "id": 45,
    "imagem_url": "./produtos/tenis-casual-branco.webp",
    "video_url": "https://videos.com/video45.mp4",
    "comentario": "Amei o design, bem leve.",
    "nota": 4,
    "localizacao": "Fortaleza, CE",
    "criado_em": "2024-11-11T14:14:14.000Z",
    "item_id": 8
  },
  {
    "id": 46,
    "imagem_url": "./produtos/tenis-casual-branco.webp",
    "video_url": "https://videos.com/video46.mp4",
    "comentario": "Ajustam bem, mas achei a cor sujeita a manchas.",
    "nota": 3,
    "localizacao": "Brasília, DF",
    "criado_em": "2024-11-12T15:15:15.000Z",
    "item_id": 8
  },
  {
    "id": 47,
    "imagem_url": "./produtos/tenis-casual-branco.webp",
    "video_url": "https://videos.com/video47.mp4",
    "comentario": "Perfeitos para correr, muito confortáveis.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-11-13T10:10:10.000Z",
    "item_id": 8
  },
  {
    "id": 48,
    "imagem_url": "./produtos/camisa-social-branca.webp",
    "video_url": "https://videos.com/video48.mp4",
    "comentario": "Camisa de excelente qualidade, bem cortada.",
    "nota": 5,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2024-11-14T11:11:11.000Z",
    "item_id": 9
  },
  {
    "id": 49,
    "imagem_url": "./produtos/camisa-social-branca.webp",
    "video_url": "https://videos.com/video49.mp4",
    "comentario": "Ótima para o trabalho, muito confortável.",
    "nota": 4,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2024-11-15T12:12:12.000Z",
    "item_id": 9
  },
  {
    "id": 50,
    "imagem_url": "./produtos/camisa-social-branca.webp",
    "video_url": "https://videos.com/video50.mp4",
    "comentario": "Um pouco transparente, mas muito bonita.",
    "nota": 3,
    "localizacao": "Salvador, BA",
    "criado_em": "2024-11-16T13:13:13.000Z",
    "item_id": 9
  },
  {
    "id": 51,
    "imagem_url": "./produtos/relógio-digital.webp",
    "video_url": "https://videos.com/video51.mp4",
    "comentario": "Relógio muito prático e fácil de usar.",
    "nota": 4,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-11-17T14:14:14.000Z",
    "item_id": 10
  },
  {
    "id": 52,
    "imagem_url": "./produtos/relógio-digital.webp",
    "video_url": "https://videos.com/video52.mp4",
    "comentario": "Gostei muito da resistência à água.",
    "nota": 5,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2024-11-18T15:15:15.000Z",
    "item_id": 10
  },
  {
    "id": 53,
    "imagem_url": "./produtos/relógio-digital.webp",
    "video_url": "https://videos.com/video53.mp4",
    "comentario": "Design bonito, mas o visor risca com facilidade.",
    "nota": 3,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2024-11-19T16:16:16.000Z",
    "item_id": 10
  },
  {
    "id": 54,
    "imagem_url": "./produtos/relógio-digital.webp",
    "video_url": "https://videos.com/video54.mp4",
    "comentario": "Fácil de programar, recomendo para iniciantes.",
    "nota": 5,
    "localizacao": "Curitiba, PR",
    "criado_em": "2024-11-20T17:17:17.000Z",
    "item_id": 10
  },
  {
    "id": 55,
    "imagem_url": "./produtos/calcados-casual.webp",
    "video_url": "https://videos.com/video55.mp4",
    "comentario": "Ótimos para caminhadas, muito confortáveis.",
    "nota": 5,
    "localizacao": "Fortaleza, CE",
    "criado_em": "2024-11-21T18:18:18.000Z",
    "item_id": 11
  },
  {
    "id": 56,
    "imagem_url": "./produtos/calcados-casual.webp",
    "video_url": "https://videos.com/video56.mp4",
    "comentario": "Ajustam bem, mas a cor desbota rápido.",
    "nota": 3,
    "localizacao": "Salvador, BA",
    "criado_em": "2024-11-22T19:19:19.000Z",
    "item_id": 11
  },
  {
    "id": 57,
    "imagem_url": "./produtos/calcados-casual.webp",
    "video_url": "https://videos.com/video57.mp4",
    "comentario": "Design moderno e confortável, recomendo!",
    "nota": 4,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-11-23T20:20:20.000Z",
    "item_id": 11
  },
  {
    "id": 58,
    "imagem_url": "./produtos/calcados-casual.webp",
    "video_url": "https://videos.com/video58.mp4",
    "comentario": "Perfeitos para o dia a dia, muito leves.",
    "nota": 5,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2024-11-24T21:21:21.000Z",
    "item_id": 11
  },
  {
    "id": 59,
    "imagem_url": "./produtos/mouse-gamer.webp",
    "video_url": "https://videos.com/video59.mp4",
    "comentario": "Sensibilidade incrível, ótimo para gamers.",
    "nota": 5,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2024-11-25T22:22:22.000Z",
    "item_id": 12
  },
  {
    "id": 60,
    "imagem_url": "./produtos/mouse-gamer.webp",
    "video_url": "https://videos.com/video60.mp4",
    "comentario": "Ergonômico, perfeito para longas jogatinas.",
    "nota": 4,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-11-26T10:10:10.000Z",
    "item_id": 12
  },
  {
    "id": 61,
    "imagem_url": "./produtos/mouse-gamer.webp",
    "video_url": "https://videos.com/video61.mp4",
    "comentario": "Bom, mas poderia ser sem fio.",
    "nota": 3,
    "localizacao": "Curitiba, PR",
    "criado_em": "2024-11-27T11:11:11.000Z",
    "item_id": 12
  },
  {
    "id": 62,
    "imagem_url": "./produtos/mouse-gamer.webp",
    "video_url": "https://videos.com/video62.mp4",
    "comentario": "A iluminação é incrível e personalizável.",
    "nota": 5,
    "localizacao": "Fortaleza, CE",
    "criado_em": "2024-11-28T12:12:12.000Z",
    "item_id": 12
  },
  {
    "id": 63,
    "imagem_url": "./produtos/teclado-mecanico.webp",
    "video_url": "https://videos.com/video63.mp4",
    "comentario": "Teclado muito confortável e responsivo.",
    "nota": 5,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2024-11-29T13:13:13.000Z",
    "item_id": 13
  },
  {
    "id": 64,
    "imagem_url": "./produtos/teclado-mecanico.webp",
    "video_url": "https://videos.com/video64.mp4",
    "comentario": "Perfeito para digitação, recomendo.",
    "nota": 5,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2024-11-30T14:14:14.000Z",
    "item_id": 13
  },
  {
    "id": 65,
    "imagem_url": "./produtos/teclado-mecanico.webp",
    "video_url": "https://videos.com/video65.mp4",
    "comentario": "Um pouco barulhento, mas a sensação ao digitar é ótima.",
    "nota": 4,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-12-01T15:15:15.000Z",
    "item_id": 13
  },
  {
    "id": 66,
    "imagem_url": "./produtos/teclado-mecanico.webp",
    "video_url": "https://videos.com/video66.mp4",
    "comentario": "Cores personalizáveis são um grande diferencial.",
    "nota": 5,
    "localizacao": "Fortaleza, CE",
    "criado_em": "2024-12-02T16:16:16.000Z",
    "item_id": 13
  },
  {
    "id": 67,
    "imagem_url": "./produtos/mesa-escritorio.webp",
    "video_url": "https://videos.com/video67.mp4",
    "comentario": "Espaçosa e muito bonita, perfeita para o home office.",
    "nota": 5,
    "localizacao": "Curitiba, PR",
    "criado_em": "2024-12-03T17:17:17.000Z",
    "item_id": 14
  },
  {
    "id": 68,
    "imagem_url": "./produtos/mesa-escritorio.webp",
    "video_url": "https://videos.com/video68.mp4",
    "comentario": "Montagem um pouco difícil, mas vale a pena.",
    "nota": 4,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2024-12-04T18:18:18.000Z",
    "item_id": 14
  },
  {
    "id": 69,
    "imagem_url": "./produtos/mesa-escritorio.webp",
    "video_url": "https://videos.com/video69.mp4",
    "comentario": "Material resistente, espero que dure bastante.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-12-05T19:19:19.000Z",
    "item_id": 14
  },
  {
    "id": 70,
    "imagem_url": "./produtos/mesa-escritorio.webp",
    "video_url": "https://videos.com/video70.mp4",
    "comentario": "Precisa de mais opções de cores.",
    "nota": 3,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2024-12-06T20:20:20.000Z",
    "item_id": 14
  },
  {
    "id": 71,
    "imagem_url": "./produtos/sandalias.webp",
    "video_url": "https://videos.com/video71.mp4",
    "comentario": "Extremamente confortáveis, perfeitas para o verão.",
    "nota": 5,
    "localizacao": "Salvador, BA",
    "criado_em": "2024-12-07T21:21:21.000Z",
    "item_id": 15
  },
  {
    "id": 72,
    "imagem_url": "./produtos/sandalias.webp",
    "video_url": "https://videos.com/video72.mp4",
    "comentario": "Boa relação custo-benefício, recomendo.",
    "nota": 4,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-12-08T22:22:22.000Z",
    "item_id": 15
  },
  {
    "id": 73,
    "imagem_url": "./produtos/sandalias.webp",
    "video_url": "https://videos.com/video73.mp4",
    "comentario": "A cor desbotou rápido após algumas lavagens.",
    "nota": 2,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2024-12-09T23:23:23.000Z",
    "item_id": 15
  },
  {
    "id": 74,
    "imagem_url": "./produtos/sandalias.webp",
    "video_url": "https://videos.com/video74.mp4",
    "comentario": "Faltou um pouco de suporte para o arco do pé.",
    "nota": 3,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2024-12-10T10:10:10.000Z",
    "item_id": 15
  },
  {
    "id": 75,
    "imagem_url": "./produtos/camiseta-basica.webp",
    "video_url": "https://videos.com/video75.mp4",
    "comentario": "Ótima qualidade de tecido, bem macia.",
    "nota": 5,
    "localizacao": "Curitiba, PR",
    "criado_em": "2024-12-11T11:11:11.000Z",
    "item_id": 16
  },
  {
    "id": 76,
    "imagem_url": "./produtos/camiseta-basica.webp",
    "video_url": "https://videos.com/video76.mp4",
    "comentario": "A camiseta encolheu um pouco na lavagem.",
    "nota": 3,
    "localizacao": "Fortaleza, CE",
    "criado_em": "2024-12-12T12:12:12.000Z",
    "item_id": 16
  },
  {
    "id": 77,
    "imagem_url": "./produtos/camiseta-basica.webp",
    "video_url": "https://videos.com/video77.mp4",
    "comentario": "Cores vibrantes e não desbotam facilmente.",
    "nota": 4,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-12-13T13:13:13.000Z",
    "item_id": 16
  },
  {
    "id": 78,
    "imagem_url": "./produtos/camiseta-basica.webp",
    "video_url": "https://videos.com/video78.mp4",
    "comentario": "Modelo básico, mas é meu favorito.",
    "nota": 5,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2024-12-14T14:14:14.000Z",
    "item_id": 16
  },
  {
    "id": 79,
    "imagem_url": "./produtos/mochila-urbana.webp",
    "video_url": "https://videos.com/video79.mp4",
    "comentario": "Ótima para o dia a dia, cabe tudo que preciso.",
    "nota": 5,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2024-12-15T15:15:15.000Z",
    "item_id": 17
  },
  {
    "id": 80,
    "imagem_url": "./produtos/mochila-urbana.webp",
    "video_url": "https://videos.com/video80.mp4",
    "comentario": "Design bonito, mas as alças poderiam ser mais confortáveis.",
    "nota": 4,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-12-16T16:16:16.000Z",
    "item_id": 17
  },
  {
    "id": 81,
    "imagem_url": "./produtos/mochila-urbana.webp",
    "video_url": "https://videos.com/video81.mp4",
    "comentario": "Material resistente, mas um pouco pesada.",
    "nota": 3,
    "localizacao": "Fortaleza, CE",
    "criado_em": "2024-12-17T17:17:17.000Z",
    "item_id": 17
  },
  {
    "id": 82,
    "imagem_url": "./produtos/mochila-urbana.webp",
    "video_url": "https://videos.com/video82.mp4",
    "comentario": "Cabe tudo que preciso e ainda sobra espaço.",
    "nota": 5,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2024-12-18T18:18:18.000Z",
    "item_id": 17
  },
  {
    "id": 83,
    "imagem_url": "./produtos/jogo-de-panelas.webp",
    "video_url": "https://videos.com/video83.mp4",
    "comentario": "Panelas de ótima qualidade, cozinham bem.",
    "nota": 5,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2024-12-19T19:19:19.000Z",
    "item_id": 18
  },
  {
    "id": 84,
    "imagem_url": "./produtos/jogo-de-panelas.webp",
    "video_url": "https://videos.com/video84.mp4",
    "comentario": "São pesadas, mas a durabilidade é ótima.",
    "nota": 4,
    "localizacao": "Curitiba, PR",
    "criado_em": "2024-12-20T20:20:20.000Z",
    "item_id": 18
  },
  {
    "id": 85,
    "imagem_url": "./produtos/jogo-de-panelas.webp",
    "video_url": "https://videos.com/video85.mp4",
    "comentario": "Aprovado! Cozinha uniformemente.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-12-21T21:21:21.000Z",
    "item_id": 18
  },
  {
    "id": 86,
    "imagem_url": "./produtos/jogo-de-panelas.webp",
    "video_url": "https://videos.com/video86.mp4",
    "comentario": "Faltou uma panela maior no conjunto.",
    "nota": 3,
    "localizacao": "Fortaleza, CE",
    "criado_em": "2024-12-22T22:22:22.000Z",
    "item_id": 18
  },
  {
    "id": 87,
    "imagem_url": "./produtos/fogao.webp",
    "video_url": "https://videos.com/video87.mp4",
    "comentario": "Fogão muito eficiente e fácil de limpar.",
    "nota": 5,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2024-12-23T23:23:23.000Z",
    "item_id": 19
  },
  {
    "id": 88,
    "imagem_url": "./produtos/fogao.webp",
    "video_url": "https://videos.com/video88.mp4",
    "comentario": "As chamas são bem fortes, cuidado.",
    "nota": 4,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2024-12-24T10:10:10.000Z",
    "item_id": 19
  },
  {
    "id": 89,
    "imagem_url": "./produtos/fogao.webp",
    "video_url": "https://videos.com/video89.mp4",
    "comentario": "Fui surpreendido pela eficiência do forno.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-12-25T11:11:11.000Z",
    "item_id": 19
  },
  {
    "id": 90,
    "imagem_url": "./produtos/fogao.webp",
    "video_url": "https://videos.com/video90.mp4",
    "comentario": "Design bonito, mas o acabamento poderia ser melhor.",
    "nota": 3,
    "localizacao": "Fortaleza, CE",
    "criado_em": "2024-12-26T12:12:12.000Z",
    "item_id": 19
  },
  {
    "id": 91,
    "imagem_url": "./produtos/jogo-de-talheres.webp",
    "video_url": "https://videos.com/video91.mp4",
    "comentario": "Talheres de ótima qualidade e design elegante.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-12-27T13:13:13.000Z",
    "item_id": 20
  },
  {
    "id": 92,
    "imagem_url": "./produtos/jogo-de-talheres.webp",
    "video_url": "https://videos.com/video92.mp4",
    "comentario": "Muito bons, mas o garfo é um pouco pesado.",
    "nota": 4,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2024-12-28T14:14:14.000Z",
    "item_id": 20
  },
  {
    "id": 93,
    "imagem_url": "./produtos/jogo-de-talheres.webp",
    "video_url": "https://videos.com/video93.mp4",
    "comentario": "São bonitos, mas arranham facilmente.",
    "nota": 3,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2024-12-29T15:15:15.000Z",
    "item_id": 20
  },
  {
    "id": 94,
    "imagem_url": "./produtos/jogo-de-talheres.webp",
    "video_url": "https://videos.com/video94.mp4",
    "comentario": "Satisfeito com a compra, cumpre o que promete.",
    "nota": 4,
    "localizacao": "Curitiba, PR",
    "criado_em": "2024-12-30T16:16:16.000Z",
    "item_id": 20
  },
  {
    "id": 95,
    "imagem_url": "./produtos/cadeira-de-escritorio.webp",
    "video_url": "https://videos.com/video95.mp4",
    "comentario": "Muito confortável para longas horas de trabalho.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2024-12-31T17:17:17.000Z",
    "item_id": 21
  },
  {
    "id": 96,
    "imagem_url": "./produtos/cadeira-de-escritorio.webp",
    "video_url": "https://videos.com/video96.mp4",
    "comentario": "Ajustes de altura funcionam bem, mas o encosto poderia ser mais firme.",
    "nota": 4,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2025-01-01T18:18:18.000Z",
    "item_id": 21
  },
  {
    "id": 97,
    "imagem_url": "./produtos/cadeira-de-escritorio.webp",
    "video_url": "https://videos.com/video97.mp4",
    "comentario": "Estava esperando algo mais robusto, mas atende.",
    "nota": 3,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2025-01-02T19:19:19.000Z",
    "item_id": 21
  },
  {
    "id": 98,
    "imagem_url": "./produtos/cadeira-de-escritorio.webp",
    "video_url": "https://videos.com/video98.mp4",
    "comentario": "Valeu a pena, muito bom custo-benefício.",
    "nota": 5,
    "localizacao": "Curitiba, PR",
    "criado_em": "2025-01-03T20:20:20.000Z",
    "item_id": 21
  },
  {
    "id": 99,
    "imagem_url": "./produtos/luminaria.webp",
    "video_url": "https://videos.com/video99.mp4",
    "comentario": "Iluminação perfeita para meu escritório.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2025-01-04T21:21:21.000Z",
    "item_id": 22
  },
  {
    "id": 100,
    "imagem_url": "./produtos/luminaria.webp",
    "video_url": "https://videos.com/video100.mp4",
    "comentario": "Design moderno, mas poderia ter mais intensidade.",
    "nota": 4,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2025-01-05T22:22:22.000Z",
    "item_id": 22
  },
  {
    "id": 101,
    "imagem_url": "./produtos/luminaria.webp",
    "video_url": "https://videos.com/video101.mp4",
    "comentario": "Muito bonita, mas não ilumina o suficiente.",
    "nota": 3,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2025-01-06T10:10:10.000Z",
    "item_id": 22
  },
  {
    "id": 102,
    "imagem_url": "./produtos/luminaria.webp",
    "video_url": "https://videos.com/video102.mp4",
    "comentario": "Ótima luminária para ambientes pequenos.",
    "nota": 5,
    "localizacao": "Curitiba, PR",
    "criado_em": "2025-01-07T11:11:11.000Z",
    "item_id": 22
  },
  {
    "id": 103,
    "imagem_url": "./produtos/relogio.webp",
    "video_url": "https://videos.com/video103.mp4",
    "comentario": "Relógio lindo e muito elegante.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2025-01-08T12:12:12.000Z",
    "item_id": 23
  },
  {
    "id": 104,
    "imagem_url": "./produtos/relogio.webp",
    "video_url": "https://videos.com/video104.mp4",
    "comentario": "A pulseira poderia ser de um material melhor.",
    "nota": 4,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2025-01-09T13:13:13.000Z",
    "item_id": 23
  },
  {
    "id": 105,
    "imagem_url": "./produtos/relogio.webp",
    "video_url": "https://videos.com/video105.mp4",
    "comentario": "Ótima compra, recomendo para quem gosta de relógios.",
    "nota": 5,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2025-01-10T14:14:14.000Z",
    "item_id": 23
  },
  {
    "id": 106,
    "imagem_url": "./produtos/relogio.webp",
    "video_url": "https://videos.com/video106.mp4",
    "comentario": "O relógio parou de funcionar depois de uma semana.",
    "nota": 1,
    "localizacao": "Curitiba, PR",
    "criado_em": "2025-01-11T15:15:15.000Z",
    "item_id": 23
  },
  {
    "id": 107,
    "imagem_url": "./produtos/bicicleta.webp",
    "video_url": "https://videos.com/video107.mp4",
    "comentario": "A bicicleta é leve e fácil de manobrar.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2025-01-12T16:16:16.000Z",
    "item_id": 24
  },
  {
    "id": 108,
    "imagem_url": "./produtos/bicicleta.webp",
    "video_url": "https://videos.com/video108.mp4",
    "comentario": "Muito confortável, ideal para passeios longos.",
    "nota": 5,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2025-01-13T17:17:17.000Z",
    "item_id": 24
  },
  {
    "id": 109,
    "imagem_url": "./produtos/bicicleta.webp",
    "video_url": "https://videos.com/video109.mp4",
    "comentario": "O freio não funciona tão bem quanto eu esperava.",
    "nota": 3,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2025-01-14T18:18:18.000Z",
    "item_id": 24
  },
  {
    "id": 110,
    "imagem_url": "./produtos/bicicleta.webp",
    "video_url": "https://videos.com/video110.mp4",
    "comentario": "Ótima relação custo-benefício.",
    "nota": 4,
    "localizacao": "Curitiba, PR",
    "criado_em": "2025-01-15T19:19:19.000Z",
    "item_id": 24
  },
  {
    "id": 111,
    "imagem_url": "./produtos/mochila.webp",
    "video_url": "https://videos.com/video111.mp4",
    "comentario": "Mochila espaçosa e resistente, ideal para viagens.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2025-01-16T20:20:20.000Z",
    "item_id": 25
  },
  {
    "id": 112,
    "imagem_url": "./produtos/mochila.webp",
    "video_url": "https://videos.com/video112.mp4",
    "comentario": "Design bonito, mas o zíper ficou travando.",
    "nota": 3,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2025-01-17T21:21:21.000Z",
    "item_id": 25
  },
  {
    "id": 113,
    "imagem_url": "./produtos/mochila.webp",
    "video_url": "https://videos.com/video113.mp4",
    "comentario": "Boa mochila, mas o suporte para laptop poderia ser melhor.",
    "nota": 4,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2025-01-18T22:22:22.000Z",
    "item_id": 25
  },
  {
    "id": 114,
    "imagem_url": "./produtos/mochila.webp",
    "video_url": "https://videos.com/video114.mp4",
    "comentario": "Excelente mochila para o dia a dia!",
    "nota": 5,
    "localizacao": "Curitiba, PR",
    "criado_em": "2025-01-19T10:10:10.000Z",
    "item_id": 25
  },
  {
    "id": 115,
    "imagem_url": "./produtos/fone-de-ouvido.webp",
    "video_url": "https://videos.com/video115.mp4",
    "comentario": "Qualidade de som excepcional.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2025-01-20T11:11:11.000Z",
    "item_id": 26
  },
  {
    "id": 116,
    "imagem_url": "./produtos/fone-de-ouvido.webp",
    "video_url": "https://videos.com/video116.mp4",
    "comentario": "Confortáveis para uso prolongado.",
    "nota": 5,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2025-01-21T12:12:12.000Z",
    "item_id": 26
  },
  {
    "id": 117,
    "imagem_url": "./produtos/fone-de-ouvido.webp",
    "video_url": "https://videos.com/video117.mp4",
    "comentario": "O microfone poderia ser melhor.",
    "nota": 4,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2025-01-22T13:13:13.000Z",
    "item_id": 26
  },
  {
    "id": 118,
    "imagem_url": "./produtos/fone-de-ouvido.webp",
    "video_url": "https://videos.com/video118.mp4",
    "comentario": "Bom fone, mas o botão de controle é pequeno.",
    "nota": 4,
    "localizacao": "Curitiba, PR",
    "criado_em": "2025-01-23T14:14:14.000Z",
    "item_id": 26
  },
  {
    "id": 119,
    "imagem_url": "./produtos/geladeira.webp",
    "video_url": "https://videos.com/video119.mp4",
    "comentario": "Espaçosa e econômica no consumo de energia.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2025-01-24T15:15:15.000Z",
    "item_id": 27
  },
  {
    "id": 120,
    "imagem_url": "./produtos/geladeira.webp",
    "video_url": "https://videos.com/video120.mp4",
    "comentario": "O design é muito bonito e moderno.",
    "nota": 5,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2025-01-25T16:16:16.000Z",
    "item_id": 27
  },
  {
    "id": 121,
    "imagem_url": "./produtos/geladeira.webp",
    "video_url": "https://videos.com/video121.mp4",
    "comentario": "Faltou um suporte para ovos, mas atende bem.",
    "nota": 4,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2025-01-26T17:17:17.000Z",
    "item_id": 27
  },
  {
    "id": 122,
    "imagem_url": "./produtos/geladeira.webp",
    "video_url": "https://videos.com/video122.mp4",
    "comentario": "Bom espaço interno, mas o barulho poderia ser menor.",
    "nota": 3,
    "localizacao": "Curitiba, PR",
    "criado_em": "2025-01-27T18:18:18.000Z",
    "item_id": 27
  },
  {
    "id": 123,
    "imagem_url": "./produtos/aspirador.webp",
    "video_url": "https://videos.com/video123.mp4",
    "comentario": "Ótimo aspirador, suga muito bem.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2025-01-28T19:19:19.000Z",
    "item_id": 28
  },
  {
    "id": 124,
    "imagem_url": "./produtos/aspirador.webp",
    "video_url": "https://videos.com/video124.mp4",
    "comentario": "Fácil de manobrar e leve.",
    "nota": 5,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2025-01-29T20:20:20.000Z",
    "item_id": 28
  },
  {
    "id": 125,
    "imagem_url": "./produtos/aspirador.webp",
    "video_url": "https://videos.com/video125.mp4",
    "comentario": "Um pouco barulhento, mas funciona bem.",
    "nota": 4,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2025-01-30T21:21:21.000Z",
    "item_id": 28
  },
  {
    "id": 126,
    "imagem_url": "./produtos/aspirador.webp",
    "video_url": "https://videos.com/video126.mp4",
    "comentario": "Os acessórios são muito úteis.",
    "nota": 5,
    "localizacao": "Curitiba, PR",
    "criado_em": "2025-01-31T22:22:22.000Z",
    "item_id": 28
  },
  {
    "id": 127,
    "imagem_url": "./produtos/telefone.webp",
    "video_url": "https://videos.com/video127.mp4",
    "comentario": "Excelente qualidade de chamada.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2025-02-01T10:10:10.000Z",
    "item_id": 29
  },
  {
    "id": 128,
    "imagem_url": "./produtos/telefone.webp",
    "video_url": "https://videos.com/video128.mp4",
    "comentario": "Bateria duradoura e fácil de usar.",
    "nota": 5,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2025-02-02T11:11:11.000Z",
    "item_id": 29
  },
  {
    "id": 129,
    "imagem_url": "./produtos/telefone.webp",
    "video_url": "https://videos.com/video129.mp4",
    "comentario": "Boa câmera, mas o armazenamento é limitado.",
    "nota": 4,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2025-02-03T12:12:12.000Z",
    "item_id": 29
  },
  {
    "id": 130,
    "imagem_url": "./produtos/telefone.webp",
    "video_url": "https://videos.com/video130.mp4",
    "comentario": "Tela grande e nítida, ótimo para assistir vídeos.",
    "nota": 5,
    "localizacao": "Curitiba, PR",
    "criado_em": "2025-02-04T13:13:13.000Z",
    "item_id": 29
  },
  {
    "id": 131,
    "imagem_url": "./produtos/monitor.webp",
    "video_url": "https://videos.com/video131.mp4",
    "comentario": "A qualidade da imagem é impressionante.",
    "nota": 5,
    "localizacao": "São Paulo, SP",
    "criado_em": "2025-02-05T14:14:14.000Z",
    "item_id": 30
  },
  {
    "id": 132,
    "imagem_url": "./produtos/monitor.webp",
    "video_url": "https://videos.com/video132.mp4",
    "comentario": "Ótimo para jogos, a taxa de atualização é excelente.",
    "nota": 5,
    "localizacao": "Rio de Janeiro, RJ",
    "criado_em": "2025-02-06T15:15:15.000Z",
    "item_id": 30
  },
  {
    "id": 133,
    "imagem_url": "./produtos/monitor.webp",
    "video_url": "https://videos.com/video133.mp4",
    "comentario": "Ajustes de cores são fáceis de fazer.",
    "nota": 4,
    "localizacao": "Belo Horizonte, MG",
    "criado_em": "2025-02-07T16:16:16.000Z",
    "item_id": 30
  },
  {
    "id": 134,
    "imagem_url": "./produtos/monitor.webp",
    "video_url": "https://videos.com/video134.mp4",
    "comentario": "Muito bom, mas o suporte poderia ser mais estável.",
    "nota": 4,
    "localizacao": "Curitiba, PR",
    "criado_em": "2025-02-08T17:17:17.000Z",
    "item_id": 30
  }
];


const URL = 'https://projeto-backend-mais1code.onrender.com/avaliacao_itens';

item = {
  "id": 1,
  "imagem_url": "./produtos/camisa-polo-azul.webp",
  "video_url": "https://videos.com/video1.mp4",
  "comentario": "Ótima camisa, material confortável e durável.",
  "nota": 5,
  "localizacao": "São Paulo, SP",
  "criado_em": "2024-10-10T10:10:10.000Z",
  "item_id": 1
}

fetch(URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(item),
})
.then(response => {
  console.log('Resposta do servidor:', response);
  return response.json();
})
.then(data => {
  console.log('avaliação criada com sucesso:', data);
})
.catch(error => {
  console.error('Erro ao criar a avaliação:', error);
});

/*
avaliacoes.forEach(item => {
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  })
  .then(response => {
    console.log('Resposta do servidor:', response);
    return response.json();
  })
  .then(data => {
    console.log('avaliação criada com sucesso:', data);
  })
  .catch(error => {
    console.error('Erro ao criar a avaliação:', error);
  });
});*/