function cadastrar() {
    const nome = document.getElementById('nome').value;
    
    if (nome === '') {
        alert('Digite o nome!');
    } else {
        alert('Cadastrado: ' + nome);
        document.getElementById('address-form').reset();
    }
}

function adicionar() {
    alert('Adicionado!');
}


document.getElementById('address-form').onsubmit = cadastrar;
document.getElementById('add-address').onclick = adicionar;