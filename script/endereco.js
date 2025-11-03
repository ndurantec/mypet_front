function enviarCadastro() {
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("numero").value;
    let bairro = document.getElementById("bairro").value;
    let cep = document.getElementById("cep").value;
    let complemento = document.getElementById("complemento").value;
    
    if(rua == ""){
        alert("Você precisa preencher o campo rua");
    }

    if(numero == ""){
        alert("Você precisa preencher o campo numero");
    }

    if(bairro == ""){
        alert("Você precisa preencher o campo bairro");
    }

    if( cep== ""){
        alert("Você precisa preencher o campo cep");
    }

      if( complemento== ""){
        alert("Você precisa preencher o campo complemento");
    }


         alert( rua + " - " + numero + " - " + bairro + " - " + cep + " - " + complemento);
}




function cadastraendereco() {
   
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("numero").value;
    let bairro = document.getElementById("bairro").value;
    let cep = document.getElementById("cep").value;
    let complemento = document.getElementById("complemento").value;
    
    if(rua == ""){
        alert("Você precisa preencher o campo rua");
    }

    if(numero == ""){
        alert("Você precisa preencher o campo numero");
    }

    if(bairro == ""){
        alert("Você precisa preencher o campo bairro");
    }

    if( cep== ""){
        alert("Você precisa preencher o campo cep");
    }

      if( complemento== ""){
        alert("Você precisa preencher o campo complemento");
    }


         alert( rua + " - " + numero + " - " + bairro + " - " + cep + " - " + complemento);

   
    fetch('http://127.0.0.1:8080/endereco/cadendereco', { 
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}

function limparErros() {
    let erros = document.querySelectorAll('.erro');
    erros.forEach(e => e.textContent = '');
}

function validarFormulario() {
 
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


function consultarendereco() {
   
   limparErros();

   if (!validarFormulario()) return;

     const dados = coletarDados();

   
    fetch('http://127.0.0.1:8080/endereco/findById/{id}', { 
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}


function deletarendereco() {
   
      
   limparErros();

   if (!validarFormulario()) return;

     const dados = coletarDados();

   
    fetch('http://127.0.0.1:8080/endereco/{id}', { 
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}


function atualizarendereco() {
   
      
   limparErros();

   if (!validarFormulario()) return;

     const dados = coletarDados();

   
    fetch('http://127.0.0.1:8080/endereco/UpEndereco/{id}', { 
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}