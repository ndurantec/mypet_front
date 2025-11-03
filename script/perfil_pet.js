//function enviarCadastro() {

    //const nome = document.getElementById("nome");
    //const idade = document.getElementById("idade");
    //const raca = document.getElementById("raca");
    //const tipo = document.getElementById("tipo");
    

    //function validarCampo(campo, texto) {
       // if (campo.value.trim() === "") {
        //    campo.placeholder = texto;
        //    campo.style.border = "2px solid red";
        //    campo.style.color = "red";
        //    return false;
        //} else {
        //    campo.style.border = "";
        //    campo.style.color = "";
        //    return true;
        //}
    //}

    //const nomeOK = validarCampo(nome, "Campo nome é obrigatorio");
    //const idadeOK = validarCampo(idade, "Campo idade é obrigatorio");
    //const racaOK = validarCampo(raca, "Campo raça é obrigatorio");
//}

function limparErros() {
    let erros = document.querySelectorAll('.erro');
    erros.forEach(e => e.textContent = '');
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

  
  
function salvarCadastro() {

    limparErros();
    
    if (!validarFormulario()) return;

    const dados = coletarDados();
    //console.log("Enviando criar conta:", dados);



     const nome = document.getElementById("nome");
     const idade = document.getElementById("idade");
     const raca = document.getElementById("raca");
     const tipo = document.getElementById("tipo");
     const responsavel = document.getElementById("responsavel");
 
     function validarCampo(campo, texto) {
     if (campo.value.trim() === "") {
        campo.placeholder = texto;
        campo.style.border = "2px solid red";
        campo.style.color = "red";
        return false;
     } else {
        campo.style.border = "";
        campo.style.color = "";
        return true;
     }
     
    const nomeOK = validarCampo(nome, "Campo nome é obrigatorio");
    const idadeOK = validarCampo(idade, "Campo idade é obrigatorio");
    const racaOK = validarCampo(raca, "Campo raça é obrigatorio");
    const responsavelOK = validarCampo(responsavel, "Campo responsavel é obrigatorio");

   var headers = new Headers();
   headers.append("Content-Type", "application/json");
   headers.append("Access-Control-Allow-Origin", "*");



   
    fetch('http://127.0.0.1:8080/pet/cadpet', { 
            
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

 function consultarCadastro() {
    limparErros();
    
    if (!validarFormulario()) return;
    const dados = coletarDados();

    fetch('http://127.0.0.1:8080/pet/buscarNomePet/', {
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

 function deletarCadastro() {
    limparErros();
    
    if (!validarFormulario()) return;
    const dados = coletarDados();

    


    fetch('http://127.0.0.1:8080/pet/apagar/', { 
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

 function alterarCadastro() {
    limparErros();
    
    if (!validarFormulario()) return;
    const dados = coletarDados();


    fetch('http://127.0.0.1:8080/responsaveis', { 
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
}