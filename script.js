let carrinho = [];

function adicionarCarrinho(produto, preco) {
  carrinho.push({ produto, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const listaCarrinho = document.getElementById('itensCarrinho');
  listaCarrinho.innerHTML = '';
  
  let total = 0;
  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.produto} - R$ ${item.preco}`;
    listaCarrinho.appendChild(li);
    total += item.preco;
  });
  
  document.getElementById('totalCarrinho').textContent = `Total: R$ ${total}`;
}
