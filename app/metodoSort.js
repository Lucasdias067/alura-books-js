const btnOrdem = document.getElementById('btnOrdenarPorPreco')
btnOrdem.addEventListener('click', ordenarLista)

function ordenarLista() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
  exibirOsLivros(livrosOrdenados)
}

