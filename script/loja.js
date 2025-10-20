function cadastrar() {
    let nome = document.getElementById('nome').value;
    
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


