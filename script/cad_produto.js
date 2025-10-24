function cadastro() {

    const imagem = document.getElementById("imagem").value;
    console.log(imagem);

    const nome = document.getElementById("nome").value;
    document.getElementById('erro-nome').textContent = validarNome(nome);
    console.log(nome);

    const descricao = document.getElementById("descricao").value;
    document.getElementById('erro-descricao').textContent = validarDescricao(descricao);
    console.log(descricao);

    const preco = document.getElementById("preco").value;   
    document.getElementById('erro-preco').textContent = validarPrecoReais(preco);
    console.log(preco);
}

function validarNome(nome) {

    if (nome.trim() === "") {
        return "Campo nome não pode estar vazio.";
    }
    if (nome.length < 3) {
        return "Digite pelo menos 3 caracteres.";
    }
    return ""; 
    
    // sem erro
}


function validarDescricao(descricao) {

    if (descricao.trim() === "") {
        return "Campo descrição não pode estar vazio.";
    }
    if (descricao.length < 3) {
        return "Digite pelo menos 3 caracteres.";
    }
    return ""; 
    
    // sem erro
}


function validarPrecoReais(Preco) {
    // aceita "12,50" ou "12.50" 
    
    Preco = Preco.replace(",", ".");   
    if (isNaN(Preco)) {
        return "Preço monetário inválido.";
    }
    if (Number(Preco) <= 0) {
        return "Preço deve ser maior que zero.";
    }
     
    //return "";
}