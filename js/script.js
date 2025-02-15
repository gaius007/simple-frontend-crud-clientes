function exibirResultado(dados) {
  const resposta = document.getElementById('resposta');
  resposta.textContent = JSON.stringify(dados, null, 2);
}

function tratarErro(error) {
  exibirResultado({ erro: error.message });
}

async function criarCliente(nome, email) {
  try {
    const response = await fetch('http://localhost:8080/clientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, email })
    });
    const data = await response.json();
    exibirResultado(data);
  } catch (error) {
    tratarErro(error);
  }
}

async function consultarCliente(id) {
  try {
    const response = await fetch(`http://localhost:8080/clientes/${id}`);
    const data = await response.json();
    exibirResultado(data);
  } catch (error) {
    tratarErro(error);
  }
}

async function listarClientes() {
  try {
    const response = await fetch('http://localhost:8080/clientes');
    const data = await response.json();
    exibirResultado(data);
  } catch (error) {
    tratarErro(error);
  }
}

async function atualizarCliente(id, nome, email) {
  try {
    const response = await fetch(`http://localhost:8080/clientes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, email })
    });
    const data = await response.json();
    exibirResultado(data);
  } catch (error) {
    tratarErro(error);
  }
}

async function deletarCliente(id) {
  try {
    const response = await fetch(`http://localhost:8080/clientes/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      exibirResultado({ mensagem: 'Cliente deletado com sucesso!' });
    } else {
      const errorData = await response.json();
      exibirResultado(errorData);
    }
  } catch (error) {
    tratarErro(error);
  }
}

document.getElementById('formCriar').addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nomeCriar').value;
  const email = document.getElementById('emailCriar').value;
  criarCliente(nome, email);
});

document.getElementById('formConsultar').addEventListener('submit', (e) => {
  e.preventDefault();
  const id = document.getElementById('idConsultar').value;
  consultarCliente(id);
});

document.getElementById('formAtualizar').addEventListener('submit', (e) => {
  e.preventDefault();
  const id = document.getElementById('idAtualizar').value;
  const nome = document.getElementById('nomeAtualizar').value;
  const email = document.getElementById('emailAtualizar').value;
  atualizarCliente(id, nome, email);
});

document.getElementById('formDeletar').addEventListener('submit', (e) => {
  e.preventDefault();
  const id = document.getElementById('idDeletar').value;
  deletarCliente(id);
});

document.getElementById('btnListar').addEventListener('click', () => {
  listarClientes();
});
