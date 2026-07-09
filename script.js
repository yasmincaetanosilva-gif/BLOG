// 1. Botão Curtir
function curtirPost(botao) {
  const contadorSpan = botao.querySelector('span');
  let curtidasAtuais = parseInt(contadorSpan.innerText);
  contadorSpan.innerText = curtidasAtuais + 1;
  
  // Efeito de clique
  botao.style.transform = "scale(1.1)";
  setTimeout(() => {
      botao.style.transform = "scale(1)";
  }, 100);
}

// 2. Filtros de Categoria
function filtrarDestinos(categoria, botaoClicado) {
  const cards = document.querySelectorAll('.card');
  const botoes = document.querySelectorAll('.btn-filtro');

  // Remove o efeito ativo de todos os botões e coloca só no clicado
  botoes.forEach(btn => btn.classList.remove('active'));
  botaoClicado.classList.add('active');

  // Filtra os cards
  cards.forEach(card => {
      const categoriaCard = card.getAttribute('data-categoria');
      
      if (categoria === 'todos' || categoriaCard === categoria) {
          card.style.display = "block";
      } else {
          card.style.display = "none";
      }
  });
}

// 3. Botão de Dica Rápida
function abrirDica(mensagem) {
  alert("📌 Dica de Viagem:\n\n" + mensagem);
}