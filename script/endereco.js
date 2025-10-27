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



function consultarendereco() {
   


   
    fetch('http://127.0.0.1:8080/endereco/findById/{id}', { 
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}


function deletarendereco() {
   


   
    fetch('http://127.0.0.1:8080/endereco/{id}', { 
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}


function atualizarendereco() {
   


   
    fetch('http://127.0.0.1:8080/endereco/UpEndereco/{id}', { 
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}