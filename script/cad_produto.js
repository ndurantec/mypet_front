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


function cadastro() {

    limparErros();

    if (!validarFormulario()) return;

    const dados = coletarDados();

    if (nome.trim() === "") {
        return "Campo nome não pode estar vazio.";
    }
    if (nome.length < 3) {
        return "Digite pelo menos 3 caracteres.";
    }
    
    // sem erro

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    // Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint

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

function alterar() {

    limparErros();

    if (!validarFormulario()) return;

    const dados = coletarDados();

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    // Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint

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

function consultar() {

    limparErros();

    if (!validarFormulario()) return;

    const dados = coletarDados();

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    // Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint

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


function deletar() {

    limparErros();

    if (!validarFormulario()) return;

    const dados = coletarDados();

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    // Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint

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
