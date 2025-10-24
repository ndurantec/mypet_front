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