const posts = [
    {
      titulo: "Praias do Caribe",
      descricao: "Águas cristalinas e praias incríveis.",
      texto: "O Caribe possui algumas das praias mais bonitas do planeta, com águas transparentes, areia clara e paisagens perfeitas para fotografia e descanso.",
      imagem: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      data: "20/06/2026"
    },
    {
      titulo: "Montanhas da Suíça",
      descricao: "Paisagens incríveis nas montanhas.",
      texto: "A Suíça oferece montanhas impressionantes, lagos calmos e cenários ideais para quem ama natureza e fotografia de viagem.",
      imagem: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      data: "18/06/2026"
    },
    {
      titulo: "Noites em Tóquio",
      descricao: "Luzes e cultura urbana.",
      texto: "Tóquio mistura tradição e modernidade em uma cidade vibrante, cheia de luzes, movimento e oportunidades únicas para fotos urbanas.",
      imagem: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      data: "12/06/2026"
    }
  ];
  
  const container = document.getElementById("posts-container");
  
  function mostrarPosts(lista) {
    container.innerHTML = "";
  
    lista.forEach((post, index) => {
      container.innerHTML += `
        <article class="post">
          <img src="${post.imagem}" alt="${post.titulo}">
          <div class="post-content">
            <h2>${post.titulo}</h2>
            <p>${post.descricao}</p>
            <small>${post.data}</small>
            <br><br>
            <button class="btn-leer" data-index="${index}">Ler mais</button>
          </div>
        </article>
      `;
    });
  
    document.querySelectorAll(".btn-leer").forEach(botao => {
      botao.addEventListener("click", () => {
        const post = lista[botao.dataset.index];
        abrirModal(post);
      });
    });
  }
  
  function abrirModal(post) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-titulo").textContent = post.titulo;
    document.getElementById("modal-texto").textContent = post.texto;
    const img = document.getElementById("modal-img");
    img.src = post.imagem;
    img.alt = post.titulo;
  }
  
  document.getElementById("fechar").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
  });
  
  document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") {
      e.currentTarget.style.display = "none";
    }
  });
  
  mostrarPosts(posts);
  
  const pesquisa = document.getElementById("searchInput");
  
  pesquisa.addEventListener("input", function () {
    const texto = pesquisa.value.toLowerCase();
  
    const filtrados = posts.filter(post =>
      post.titulo.toLowerCase().includes(texto) ||
      post.descricao.toLowerCase().includes(texto) ||
      post.texto.toLowerCase().includes(texto)
    );
  
    mostrarPosts(filtrados);
  });
  
  document.querySelector(".hero button").addEventListener("click", () => {
    document.getElementById("galeria").scrollIntoView({ behavior: "smooth" });
  });