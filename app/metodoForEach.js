const elementosLivros = document.getElementById('livros')
const valorLivrosDisponveis = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivros(listaLivros) {
  valorLivrosDisponveis.innerHTML = ''
  elementosLivros.innerHTML = ''
  listaLivros.forEach(livro => {
    let disponibilidade = livro.quantidade > 0
      ? 'livro__imagens'
      : 'livro__imagens indisponivel'
    elementosLivros.innerHTML += `
      <div class="livro">
        <img class= '${disponibilidade}' src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
    `
  })
}


