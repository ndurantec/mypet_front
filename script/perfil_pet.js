function enviarCadastro() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const raca = document.getElementById("raca").value;
    const tipo = document.getElementById("tipo").value;
    const outro_tipo = document.getElementById("outro_tipo").value;
    
    let camposInvalidos = false;

    
    const campos = document.querySelectorAll(".erro");
    campos.forEach(function(campo) {
        campo.classList.remove("erro");
        let mensagem = campo.nextElementSibling;
        if (mensagem && mensagem.classList.contains("mensagem-erro")) {
            mensagem.remove();
        }
    });

  
    if (!nome) {
        document.getElementById("nome").classList.add("erro");
        adicionarMensagemErro("nome", "O campo Nome é obrigatório.");
        camposInvalidos = true;
    }
    if (!idade) {
        document.getElementById("idade").classList.add("erro");
        adicionarMensagemErro("idade", "O campo Idade é obrigatório.");
        camposInvalidos = true;
    }
    if (!raca) {
        document.getElementById("raca").classList.add("erro");
        adicionarMensagemErro("raca", "O campo Raça é obrigatório.");
        camposInvalidos = true;
    }
    if (!tipo) {
        document.getElementById("tipo").classList.add("erro");
        adicionarMensagemErro("tipo", "O campo Tipo é obrigatório.");
        camposInvalidos = true;
    }
    if (!outro_tipo && tipo === "outro") {
        document.getElementById("outro_tipo").classList.add("erro");
        adicionarMensagemErro("outro_tipo", "O campo Outro Tipo é obrigatório.");
        camposInvalidos = true;
    }

    
    if (camposInvalidos) {
        document.querySelector(".erro").focus();
    } else {
       
        alert("Cadastro enviado com sucesso!");
    }
}


function adicionarMensagemErro(campo, mensagem) {
    let elemento = document.getElementById(campo);
    let mensagemErro = document.createElement("span");
    mensagemErro.classList.add("mensagem-erro");
    mensagemErro.textContent = mensagem;
    elemento.parentNode.appendChild(mensagemErro);
}
