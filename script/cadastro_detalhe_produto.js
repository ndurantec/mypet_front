function voltar() {
    window.location.href = 'home.html';
}

function cadastrar() {
    let ok = true;

    document.querySelectorAll('.erro').forEach(div => div.textContent = '');

    const peso = document.getElementById('peso').value;
    if (peso === '') {
        mostrarErro('erro-peso', 'Informe o peso.');
        ok = false;
    } else if (!/^\d+(\.\d{1,2})?$/.test(peso)) {
        mostrarErro('erro-peso', 'Formato inválido. Use ponto como separador decimal.');
        ok = false;
    }

    const validade = document.getElementById('validade').value;
    if (validade === '') {
        mostrarErro('erro-validade', 'Informe a validade.');
        ok = false;
    } else if (validade < 0 || validade > 24) {
        mostrarErro('erro-validade', 'validade inválida.');
        ok = false;
    }

    const categoria = document.getElementById('categoria').value.trim();
    if (categoria === '') {
        mostrarErro('erro-categoria', 'A categoria é obrigatória.');
        ok = false;
    } else if (categoria.length < 3) {
        mostrarErro('erro-categoria', 'A categoria deve ter pelo menos 3 caracteres.');
        ok = false;
  }
}

if (ok) {
    alert('Tudo certo! Os dados estão válidos.');
  }

function mostrarErro(idCampo, mensagem) {
  document.getElementById(idCampo).textContent = mensagem;
}
