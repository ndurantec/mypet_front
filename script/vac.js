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

function coletarDados() {
    const canvas = document.getElementById('signaturePad');
  
    return {
        nome: document.getElementById("nome").value.trim(),
        cpf: document.getElementById("cpf").value.trim()
    };
}

function limparErros() {
    let erros = document.querySelectorAll('.erro');
    erros.forEach(e => e.textContent = '');
}

function salvarVacinacao(){

    limparErros();

     if (!validarFormulario()) return;

    const dados = coletarDados();

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");


    //Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint

        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(
            dados
        ),
    
        headers: headers

       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}

function consultarVacinacao(){
    //Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}

function alterarVacinacao(){
    //Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}

function deletarVacinacao(){
    //Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}