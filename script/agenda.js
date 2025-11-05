function limparErros() {
    let erros = document.querySelectorAll('.erro');
    erros.forEach(e => e.textContent = '');
}

function mostrarErro(idElemento, mensagem) {
    document.getElementById(idElemento).textContent = mensagem;
}

function validarFormulario() {
    //limparErros();

    // Captura dos valores do formulário
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    
    let ok = true;

    if (!nome) { 
        mostrarErro('erro-nome', 'Verifique se possui nome para continuar.'); 
        ok = false; 
    }
    if (!cpf) { 
        mostrarErro('erro-cpf', 'Verifique se possui cpf para continuar.'); 
        ok = false; 
    }
    
    return ok;
}

function coletarDados() {
    // Função para coletar dados do formulário
    const loja = document.getElementById("escolhaLoja").value;
    const tipoServico = document.getElementById("tipoTosa").value;
    const dataHora = document.getElementById("dataDigitada").value;
    
    return {
        loja: loja,
        tipoServico: tipoServico,
        dataHora: dataHora
    };
}

function salvarservico() {    
    const loja = document.getElementById("escolhaLoja").value;
    const tipoServico = document.getElementById("tipoTosa").value;
    const dataHora = document.getElementById("dataDigitada").value;

    if (loja === "Selecione a Loja" || tipoServico === "Selecione o tipo de estética" || dataHora === "") {
        alert("Por favor, preencha todos os campos antes de salvar o serviço.");
        return;
    }

    // Simulação de salvamento (poderia ser um fetch() para API futuramente)
    alert("Serviço agendado com sucesso!");
    console.log("Serviço agendado:");
    console.log("Loja:", loja);
    console.log("Tipo de serviço:", tipoServico);
    console.log("Data e Horário:", dataHora);

    limparErros();
    const dados = coletarDados();

    if (!validarFormulario()) return;

    let hoje = new Date();
    let dataDigitada = new Date(dataHora);
    if (dataDigitada > hoje) {
        alert("A data não pode ser futura");
        return;
    }

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    // Envia os dados via fetch
    fetch("http://127.0.0.1:8080/agenda/imprimir/id", { // altere a URL conforme seu endpoint
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(dados),
        headers: headers
    })
    .then(response => {
        // Processar resposta
        console.log("Resposta recebida:", response);
    })
    .then(data => {
        // Processar dados
        console.log("Dados processados:", data);
    })
    .catch(error => {
        // Tratar erro
        console.error("Erro na requisição:", error);
    });
}

function consultarservico() {
    const loja = document.getElementById("escolhaLoja").value;
    const tipoServico = document.getElementById("tipoTosa").value;
    const dataHora = document.getElementById("dataDigitada").value;

    console.log("Consulta de serviço:");
    console.log("Loja:", loja);
    console.log("Tipo de serviço:", tipoServico);
    console.log("Data e Horário:", dataHora);

    alert("Consulta realizada! (Verifique o console para detalhes)");

    limparErros();
    const dados = coletarDados();

    if (!validarFormulario()) return;

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    // Envia os dados via fetch
    fetch("http://127.0.0.1:8080/agenda/{id}", { // altere a URL conforme seu endpoint
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(dados),
        headers: headers
    })
    .then(response => {
        // Processar resposta
        console.log("Resposta recebida:", response);
    })
    .then(data => {
        // Processar dados
        console.log("Dados processados:", data);
    })
    .catch(error => {
        // Tratar erro
        console.error("Erro na requisição:", error);
    });
}

function alterarservico() {
    const loja = document.getElementById("escolhaLoja").value;
    const tipoServico = document.getElementById("tipoTosa").value;
    const dataHora = document.getElementById("dataDigitada").value;

    if (loja === "Selecione a Loja" || tipoServico === "Selecione o tipo de estética" || dataHora === "") {
        alert("Por favor, preencha todos os campos antes de alterar o serviço.");
        return;
    }

    alert("Serviço alterado com sucesso!");
    console.log("Serviço alterado:");
    console.log("Loja:", loja);
    console.log("Tipo de serviço:", tipoServico);
    console.log("Data e Horário:", dataHora);
    
    limparErros();
    const dados = coletarDados();

    if (!validarFormulario()) return;

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    // Envia os dados via fetch
    fetch("http://127.0.0.1:8080/agenda/imprimir/id", { // altere a URL conforme seu endpoint
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(dados),
        headers: headers
    })
    .then(response => {
        // Processar resposta
        console.log("Resposta recebida:", response);
    })
    .then(data => {
        // Processar dados
        console.log("Dados processados:", data);
    })
    .catch(error => {
        // Tratar erro
        console.error("Erro na requisição:", error);
    });
}

function deletarservico() {
    const confirmacao = confirm("Tem certeza que deseja deletar este serviço?");
    if (confirmacao) {
        alert("Serviço deletado com sucesso!");
        console.log("Serviço deletado com sucesso!");
    } else {
        alert("Operação cancelada.");
    }
    
    limparErros();
    const dados = coletarDados();

    if (!validarFormulario()) return;

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    // Envia os dados via fetch
    fetch("http://127.0.0.1:8080/agenda/{id}", { // altere a URL conforme seu endpoint
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(dados),
        headers: headers
    })
    .then(response => {
        // Processar resposta
        console.log("Resposta recebida:", response);
    })
    .then(data => {
        // Processar dados
        console.log("Dados processados:", data);
    })
    .catch(error => {
        // Tratar erro
        console.error("Erro na requisição:", error);
    });
}