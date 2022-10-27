const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', btnFilter))

const btnDisponivel = document.getElementById('btnLivrosDisponiveis')
btnDisponivel.onclick = ordenarListaDisponiveis;

function btnFilter() {
  const elementoBtn = document.getElementById(this.id)
  const categoria = elementoBtn.value
  let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
  exibirOsLivros(livrosFiltrados)
}

function ordenarListaDisponiveis() {
  let livrosDisponiveis = livros.filter(livro => livro.quantidade > 0)
  let valorPreco = livrosDisponiveis.map(livro => livro.preco)
  let valor = valorTotal(valorPreco)
  exibirOsLivros(livrosDisponiveis)

  valorLivrosDisponveis.innerHTML = `
  <div class="livros__disponiveis">
  <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
  </div>
  `
}


