let filtroPreco = document.getElementById('btnOrdenarPorPreco')

filtroPreco.addEventListener('click', ordernaLivros)

function ordernaLivros() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)

    exibeLivros(livrosOrdenados)
}