function validacaoContaUsuario(){
    let nome = document.getElementById("nome").value;
    
    if (nome === '') {
        mostrarErro('erro-nome', 'O nome é obrigatório.');
        ok = false;
    } else 
        if (nome.length < 3) {
            mostrarErro('erro-nome', 'O nome deve ter pelo menos 3 caracteres.');
        ok = false;
        } else 
            if (Number(nome)) {
                mostrarErro('erro-nome', 'Seu nome não pode conter apenas números!');

        } else 
            if (nome.length > 255) {
                mostrarErro('erro-nome', 'Seu nome apenas pode conter 255 caractéres');

        } 

    let email = document.getElementById("email").value;

    if (email === '') {
        mostrarErro('erro-email', 'Informe o e-mail.');
        ok = false;
  } else 
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mostrarErro('erro-email', 'E-mail inválido.');
        ok = false;
        
        } else 
            if (email.length > 64) {
                mostrarErro('erro-email', 'Seu email apenas pode conter 64 caractéres');

        } 
    

    let senha = document.getElementById("senha").value;

    if (senha === '') {
        mostrarErro('erro-senha', 'A senha é obrigatória.');
        ok = false;
  }  else if (senha.length < 8) {
        mostrarErro('erro-senha', 'A senha deve ter pelo menos 8 caracteres.');
        ok = false;
  }
    

    let telefone = document.getElementById("telefone").value;

    if (telefone === '') {
        mostrarErro('erro-telefone', 'Informe o telefone.');
        ok = false;
  } else if (!/^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(telefone)) {
        mostrarErro('erro-telefone', 'Formato inválido. Ex: (99) 99999-9999');
        ok = false;
  } else 
        if (telefone.length > 40) {
            mostrarErro('erro-telefone', 'Seu telefone apenas pode conter 40 caractéres');

        } 
     
} 

function mostrarErro(idCampo, mensagem) {
  document.getElementById(idCampo).textContent = mensagem;
}

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

function salvarConta(){

     limparErros();

     if (!validarFormulario()) return;

     const dados = coletarDados();


    let nome = document.getElementById("nome").value;
    
    if (nome === '') {
        mostrarErro('erro-nome', 'O nome é obrigatório.');
        ok = false;
    } else 
        if (nome.length < 3) {
            mostrarErro('erro-nome', 'O nome deve ter pelo menos 3 caracteres.');
            ok = false;
        } else 
            if (Number(nome)) {
                mostrarErro('erro-nome', 'Seu nome não pode conter apenas números!');

        } else 
            if (nome.length > 255) {
                mostrarErro('erro-nome', 'Seu nome apenas pode conter 255 caractéres');

        } 

    let email = document.getElementById("email").value;

    if (email === '') {
        mostrarErro('erro-email', 'Informe o e-mail.');
        ok = false;
  } else 
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mostrarErro('erro-email', 'E-mail inválido.');
        ok = false;
        
        } else 
            if (email.length > 64) {
                mostrarErro('erro-email', 'Seu email apenas pode conter 64 caractéres');

        } 
    

    let senha = document.getElementById("senha").value;

    if (senha === '') {
        mostrarErro('erro-senha', 'A senha é obrigatória.');
        ok = false;
  }  else if (senha.length < 8) {
        mostrarErro('erro-senha', 'A senha deve ter pelo menos 8 caracteres.');
        ok = false;
  }
    

    let telefone = document.getElementById("telefone").value;

    if (telefone === '') {
        mostrarErro('erro-telefone', 'Informe o telefone.');
        ok = false;
  } else if (!/^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(telefone)) {
        mostrarErro('erro-telefone', 'Formato inválido. Ex: (99) 99999-9999');
        ok = false;
  } else 
        if (telefone.length > 40) {
            mostrarErro('erro-telefone', 'Seu telefone apenas pode conter 40 caractéres');

        } 

         var headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Access-Control-Allow-Origin", "*");

    
    //Envia os dados via fetch
    fetch('http://127.0.0.1:8080/login/authenticate', { // altere a URL conforme seu endpoint

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


function consultarConta(){
    //Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}

function alterarConta(){
    //Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}

function deletarConta(){
    //Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}

