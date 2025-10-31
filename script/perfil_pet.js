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


function salvarCadastro() {
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
 }
 const nomeOK = validarCampo(nome, "Campo nome é obrigatorio");
 const idadeOK = validarCampo(idade, "Campo idade é obrigatorio");
 const racaOK = validarCampo(raca, "Campo raça é obrigatorio");
 const responsavelOK = validarCampo(responsavel, "Campo responsavel é obrigatorio");

        
   
    fetch('http://127.0.0.1:8080/pet/cadpet', { 
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}

function consultarCadastro() {
   


    fetch('http://127.0.0.1:8080/pet/buscarNomePet/', { 
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}

function deletarCadastro() {
   


    fetch('http://127.0.0.1:8080/pet/apagar/', { 
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}

function alterarCadastro() {
   


    fetch('http://127.0.0.1:8080/responsaveis', { 
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}