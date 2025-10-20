function voltar() {
    window.location.href = 'home.html';
}

function cadastrar() {

    const peso = document.getElementById("peso").value;
    document.getElementById("erro-peso").textContent = validarpeso(peso);
    console.log(peso);

    const validade = document.getElementById("validade").value;
    document.getElementById("erro-validade").textContent = validarvalidade(validade);
    console.log(validade);

    const categoria = document.getElementById("categoria").value;
    if (categoria === '') {
         mostrarErro('erro-categoria', 'Selecione uma categoria');
    } else {
         mostrarErro('erro-categoria', '');
    }

    const indicacao = document.getElementById("indicacao").value;
    document.getElementById("erro-indicacao").textContent = validarindicacao(indicacao);
    console.log(indicacao);
}

function validarpeso(peso) {
    // aceita "12,50" ou "12.50"
    peso = peso.replace(",", ".");
    if (isNaN(peso)) return "Peso inválido";
    if (Number(peso) <= 0) return "Peso deve ser maior que zero";
    return "";
}

function validarvalidade(validade) {
    if (validade === "") return "Selecione uma validade";
    let hoje = new Date();
    let validadeDigitada = new Date(validade);
    if (validadeDigitada < hoje) return "A validade não pode ser antiga";
    return "";
}

// function validarcategoria(categoria) {
//     let cat = document.getElementById(categoria);
//     alert("Chamou o validarCategoria");
//     console.log(cat);
//     if (cat.value === "" || cat.value === "selecione") {
//         return "Escolha uma opção válida";
//     }
//     return "";
// }

function validarindicacao(indicacao) {
    if (indicacao.trim() === "") {
        return "Campo indicação não pode estar vazio";
    }
    if (indicacao.length < 3) {
        return "Digite pelo menos 3 caracteres";
    }
    return ""; // sem erro
}

function mostrarErro(idCampo, mensagem) {
  document.getElementById(idCampo).textContent = mensagem;
}
