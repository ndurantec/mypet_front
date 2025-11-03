function validarFormulario() {
    //limparErros();

    // Captura dos valores do formulário
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    
    let ok = true;

    if (!nome) { mostrarErro('erro-nome', 'Verifique se possui nome para continuar.'); ok = false; }
    if (!cpf) { mostrarErro('erro-cpf', 'Verifique se possui cpf para continuar.'); ok = false; }
    

    return ok;
}

function limparErros() {
    let erros = document.querySelectorAll('.erro');
    erros.forEach(e => e.textContent = '');
}
function salvarServico() {
      limparErros();

    
    let hoje = new Date();
    let dataDigitada = new Date(data);
    if (dataDigitada > hoje) return "A data não pode ser futura";



    // Envia os dados via fetch
    fetch('http://127.0.0.1:8080/agenda/imprimir/id', { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}


function consultarServico() {



    // Envia os dados via fetch
    fetch('http://127.0.0.1:8080/agenda/{id}', { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}



function alterarServico() {
   


    // Envia os dados via fetch
    fetch('http://127.0.0.1:8080/agenda/imprimir/id', { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}



function deletarServico() {
   


    // Envia os dados via fetch
    fetch('http://127.0.0.1:8080/agenda/{id}', { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}