function enviarCadastro() {

    const nome = document.getElementById("nome");
    const idade = document.getElementById("idade");
    const raca = document.getElementById("raca");
    const tipo = document.getElementById("tipo");
    

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
}
