function valorTotal(valorPreco) {
  return valorPreco.reduce((acc, valor) => acc + valor, 0).toFixed(2)
  
}