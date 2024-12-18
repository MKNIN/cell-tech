// Inicializa o carrinho vazio
let carrinho = [];

// Exemplo de mensagem no console
console.log("Bem-vindo ao site da Cell Tech!");

// Adiciona produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

// Atualiza a visualização do carrinho
function atualizarCarrinho() {
  const itensCarrinho = document.getElementById("itensCarrinho");
  itensCarrinho.innerHTML = "";

  carrinho.forEach((item, index) => {
    const div = document.createElement("div");
    div.textContent = `${item.nome} - R$ ${item.preco}`;
    itensCarrinho.appendChild(div);
  });
}

// Finaliza o pedido
function finalizarPedido() {
  const carrinhoSection = document.getElementById("carrinho");
  const finalizarSection = document.getElementById("finalizarPedido");
  
  carrinhoSection.style.display = "none";
  finalizarSection.style.display = "block";
  
  const form = document.getElementById("formFinalizar");
  form.onsubmit = (event) => {
    event.preventDefault();
    alert("Pedido Finalizado com Sucesso!");
    // Aqui você poderia enviar os dados para o servidor ou processar o pagamento.
  };
}

// Rolagem suave para as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
