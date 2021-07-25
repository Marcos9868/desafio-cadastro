function validarCliente (idNomeCliente, idEmailCliente, idSenhaCliente, idCpfCliente, idEndCliente, idCepCliente) {
  const nome = document.getElementById(idNomeCliente).value
  const email = document.getElementById(idEmailCliente).value
  const senha = document.getElementById(idSenhaCliente).value
  const cpf = document.getElementById(idCpfCliente).value
  const endereco = document.getElementById(idEndCliente).value
  const cep = document.getElementById(idCepCliente).value

  if (nome == '') { 
      alert('Nome não pode estar em branco. Favor preenchê-lo!') 
    } else if (email == '') { 
        alert('Email não pode estar em branco. Favor preenchê-lo!') 
    } else if (senha == '') { 
        alert('Senha não pode estar em branco. Favor preenchê-lo!')
    } else if (cpf == '') { 
        alert('CPF não pode estar em branco. Favor preenchê-lo!')
    } else if (endereco == '') { 
        alert('Endereço não pode estar em branco. Favor preenchê-lo!')
    } else if (cep == '') { 
        alert('CEP não pode estar em branco. Favor preenchê-lo!')    
    } else cadastrarCliente(nome, email, senha, parseInt(cpf), endereco, parseInt(cep))
}

function cadastrarCliente (nome, email, senha, cpf, endereco, cep) {
  const novoCliente = { nome: nome, email: email, senha: senha, cpf: cpf, endereco: endereco, cep: cep }

  if (typeof (Storage) !== 'undefined') {
    let clientes = localStorage.getItem('clientes')
    if (clientes == null) clientes = []
    else clientes = JSON.parse(clientes)
    clientes.push(novoCliente)
    localStorage.setItem('clientes', JSON.stringify(clientes))
    alert('Usuário cadastrado com sucesso')
    atualizarTotalCliente('totalCliente')
    location.reload()
  } else alert('A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação')
}

function atualizarTotalCliente (idCampo) {
  localStorage.setItem('totalCliente', ++document.getElementById(idCampo).innerHTML)
}

function carregarTotalCliente (idCampo) {
  if (typeof (Storage) !== 'undefined') {
    let totalCliente = localStorage.getItem('totalCliente')
    if (totalCliente == null) totalCliente = 0
    document.getElementById(idCampo).innerHTML = totalCliente
  } else alert('A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação')
}

function listarCliente () {
  if (typeof (Storage) !== 'undefined') {
    let clientes = localStorage.getItem('clientes')
    document.write('<h1>Estoque:</h1>')
    if (clientes == null) { document.write('<h3>Ainda não há nenhum item no estoque</h3>') } else {
      clientes = JSON.parse(clientes)
      clientes.forEach(cliente => {
        document.write('<ul>')
        document.write('<li>Nome: ' + cliente.nome + '</li>')
        document.write('<li>Email: ' + cliente.email + '</li>')
        document.write('<li>Senha: ' + cliente.senha + '</li>')
        document.write('<li>CPF: ' + cliente.cpf + '</li>')
        document.write('<li>Endereço: ' + cliente.endereco + '</li>')
        document.write('<li>CEP: ' + cliente.cep + '</li>')
        document.write('</ul>')
      })
    }
  } else alert('A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o cadastro!')
}

