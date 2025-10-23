function enviarCadastro() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let raca = document.getElementById("raca").value;
    let tipo = document.getElementById("tipo").value;
    let outro_tipo = document.getElementById("outro_tipo").value;
    
    if(nome == ""){
        alert("Você precisa preencher o campo nome");
    }

    if(idade == ""){
        alert("Você precisa preencher o campo idade");
    }

    if(raca == ""){
        alert("Você precisa preencher o campo raça");
    }

    if(tipo == ""){
        alert("Você precisa preencher o campo tipo");
    }

         alert(nome + " - " + idade + " - " + raca + " - " + tipo);
}
