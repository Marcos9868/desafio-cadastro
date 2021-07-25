function validarProduto (idNomeProduto, idCodProduto, idPrecoProduto, idQtidadeProduto) {
  const nome = document.getElementById(idNomeProduto).value
  const codigo = document.getElementById(idCodProduto).value
  const qtidade = document.getElementById(idQtidadeProduto).value
  const precoProduto = document.getElementById(idPrecoProduto).value

  if (nome == '') { alert('Nome do produto não pode estar em branco. Favor preenchê-lo!')} else if (codigo == '') { alert('Código do produto não pode estar em branco. Favor preenchê-lo!')} else if (precoProduto == '') { alert('Código do produto não pode estar em branco. Favor preenchê-lo!')} else cadastrarProduto(nome, codigo, precoProduto, parseInt(qtidade))
}

function cadastrarProduto (produto, codig, preco, qtidade) {
  const novoProduto = { nome: produto, codigo: codig, preco: preco, quantidade: qtidade }

  if (typeof (Storage) !== 'undefined') {
    let produtos = localStorage.getItem('produtos')
    if (produtos == null) produtos = []
    else produtos = JSON.parse(produtos)
    produtos.push(novoProduto)
    localStorage.setItem('produtos', JSON.stringify(produtos))
    alert('Foram cadastradas com sucesso ' + qtidade + ' unidades do produto ' + produto + '!')
    atualizarTotalEstoque('totalEstoque')
    location.reload()
  } else alert('A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação')
}

function atualizarTotalEstoque (idCampo) {
  localStorage.setItem('totalEstoque', ++document.getElementById(idCampo).innerHTML)
}

function carregarTotalEstoque (idCampo) {
  if (typeof (Storage) !== 'undefined') {
    let totalEstoque = localStorage.getItem('totalEstoque')
    if (totalEstoque == null) totalEstoque = 0
    document.getElementById(idCampo).innerHTML = totalEstoque
  } else alert('A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação')
}

function listarEstoque () {
  if (typeof (Storage) !== 'undefined') {
    let produtos = localStorage.getItem('produtos')
    document.write('<h1>Estoque:</h1>')
    if (produtos == null) { document.write('<h3>Ainda não há nenhum item no estoque</h3>')} else {
      produtos = JSON.parse(produtos)
      produtos.forEach(produto => {
        document.write('<ul>')
        document.write('<li>Nome do produto: ' + produto.nome + '</li>')
        document.write('<li>Código do produto: ' + produto.codigo + '</li>')
        document.write('<li>Quantidade no estoque: ' + produto.quantidade + '</li>')
        document.write('<li>Preço do Produto: ' + produto.preco + '</li>')
        document.write('</ul>')
      })
    }
  } else alert('A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!')
}
