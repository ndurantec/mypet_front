
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

const email = document.getElementById('email').value;
    if (email === '') {
        mostrarErro('erro-email', 'Informe o e-mail.');
        ok = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mostrarErro('erro-email', 'E-mail inválido.');
        ok = false;
    }

function mostrarErro(idCampo, mensagem) {
  document.getElementById(idCampo).textContent = mensagem;
}

function salvarloja() {
   


    // Envia os dados via fetch
    fetch("http://127.0.0.1:8080/responsaveis", { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}
function consultarloja() {
   


    // Envia os dados via fetch
    fetch("http://127.0.0.1:8080/responsaveis", { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}
function alterarloja() {
   


    // Envia os dados via fetch
    fetch("http://127.0.0.1:8080/responsaveis", { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}
function deletarloja() {
   


    // Envia os dados via fetch
    fetch("http://127.0.0.1:8080/responsaveis", { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}