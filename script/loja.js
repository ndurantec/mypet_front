
function validarNome() {

    const nome = document.getElementById('nome').value;
    
    if (nome.trim() === "") {        
        mostrarErro('erro-nome', 'O nome deve ter pelo menos 3 caracteres.');
    }

    if (nome.length < 3) {
        return "Digite pelo menos 3 caracteres";
    }

    return ""; 

}


function mostrarErro(idCampo, mensagem) {
  document.getElementById(idCampo).textContent = mensagem;
}


