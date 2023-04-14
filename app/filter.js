const filtros = document.querySelectorAll('.btn')

filtros.forEach(filtro => filtro.addEventListener('click', filtraLivros))


function filtraLivros(){
    const elementoFiltro = document.getElementById(this.id)
    const categoria = elementoFiltro.value
    let livrosFiltrados = categoria == 'disponivel' ? filtraDisponibilidade() : filtraCategoria(categoria)

    exibeLivros(livrosFiltrados)

    if (categoria == 'disponivel') {
        const valorTotal = calculaTotal(livrosFiltrados)
        exibeElementoPromocao(valorTotal)
    }
}

function filtraCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtraDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibeElementoPromocao(valorTotal) {
    elementoPromocao.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}