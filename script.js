// Array para armazenar os produtos no carrinho
let carrinho = [];

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

// Função para atualizar o carrinho no HTML
function atualizarCarrinho() {
  const itensCarrinho = document.getElementById('itensCarrinho');
  itensCarrinho.innerHTML = '';

  let total = 0;
  
  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    itensCarrinho.appendChild(li);
    total += item.preco;
  });

  document.getElementById('totalCarrinho').textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Adicionando os eventos de clique nos botões de compra
document.querySelectorAll('.comprar').forEach((botao, index) => {
  botao.addEventListener('click', () => {
    const produtos = [
      { nome: 'Produto 1', preco: 100 },
      { nome: 'Produto 2', preco: 200 },
      { nome: 'Produto 3', preco: 300 }
    ];
    adicionarAoCarrinho(produtos[index].nome, produtos[index].preco);
  });
});
