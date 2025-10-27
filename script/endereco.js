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
   


    // Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}



function consultarendereco() {
   


    // Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}


function deletarendereco() {
   


    // Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}


function atualizarendereco() {
   


    // Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}