const produtosJSON = `{
  "itens": [
    {
      "id": 1,
      "nome": "Notebook Gamer",
      "preco": 2999.99,
      "categoria": "eletronicos",
      "tags": ["tecnologia", "computacao", "gamer"]
    },
    {
      "id": 2, 
     "nome": "Mesa Escritório",
     "preco": 450.50,
     "categoria": "moveis",
     "tags": ["escritorio", "madeira", "profissional"]
     }
  ]
}`;


console.log(JSON.stringify(produtosJSON))