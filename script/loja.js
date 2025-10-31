
function validarNome() {

    const nome = document.getElementById('nome').value;
    
    if (nome.trim() === "") {        
        mostrarErro('erro-nome', 'O nome deve ter pelo menos 3 caracteres.');
    }

    if (nome.length < 3) {
        return "Digite pelo menos 3 caracteres";
    }

    const email = document.getElementById('email').value;
    if (email === '') {
        mostrarErro('erro-email', 'Informe o e-mail.');
        ok = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mostrarErro('erro-email', 'E-mail inválido.');
        ok = false;
    }
}


function mostrarErro(idCampo, mensagem) {
  document.getElementById(idCampo).textContent = mensagem;
}

function cadastrarloja() {
   
      const nome = document.getElementById('nome').value;
    
      alert (" loja cadastrada " + nome)

    if (nome.trim() === "") {        
        mostrarErro('erro-nome', 'O nome deve ter pelo menos 3 caracteres.');
    }

    if (nome.length < 3) {
        return "Digite pelo menos 3 caracteres";
    }

    const email = document.getElementById('email').value;
    if (email === '') {
        mostrarErro('erro-email', 'Informe o e-mail.');
        ok = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mostrarErro('erro-email', 'E-mail inválido.');
        ok = false;
    }



    // Envia os dados via fetch
     fetch("http://127.0.0.1:8080/loja/cadloja", { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}

function alterarloja() {
   


    // Envia os dados via fetch
    fetch("http://127.0.0.1:8080/loja/UpLoja", { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}
function deletarloja() {
   


    // Envia os dados via fetch
    fetch("http://127.0.0.1:8080/loja/deletar", { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}