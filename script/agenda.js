function limparErros() {
    let erros = document.querySelectorAll('.erro');
    erros.forEach(e => e.textContent = '');
}

function mostrarErro(idElemento, mensagem) {
    document.getElementById(idElemento).textContent = mensagem;
}

function validarFormulario() {
       
    let nome = document.getElementById("loja").value;
    let cpf = document.getElementById("tipoTosa").value;
    
    let ok = true;

    if (!loja) { 
        mostrarErro('erro-loja', 'Verifique se possui nome para continuar.'); 
        ok = false; 
    }
    if (!tipoTosa) { 
        mostrarErro('erro-tipoTosa', 'Verifique se possui cpf para continuar.'); 
        ok = false; 
    }
    
    return ok;
}

function coletarDados() {
  
    const loja = document.getElementById("escolhaLoja").value;
    const tipoServico = document.getElementById("tipoTosa").value;
    const dataHora = document.getElementById("dataDigitada").value;
    
    return {
        loja: loja,
        tipoServico: tipoServico,
        dataHora: dataHora
    };
}

function salvar() {   
    
    limparErros();
    
    if (!validarFormulario()) return;

    const dados = coletarDados();    

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    // Envia os dados via fetch
    fetch('http://127.0.0.1:8080/agenda/insertagenda', { // altere a URL conforme seu endpoint

        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(
            dados
        ),
    
        headers: headers

    })
    .then(async response => {
       let data = await response.json();

      console.log(data);
      

      if (!response.ok) {
        // Caso sejam erros de validação no DTO
        if (typeof data === "object") {
          let mensagens = Object.values(data).join("<br>");

          console.log("Entrou dento do if data ==== object");
          console.log("----------------------------------------------");
          console.log(mensagens);
          console.log("----------------------------------------------");

            let mensagensGlobais = []; // Para erros que não mapeiam para um campo específico

            for (const [campo, mensagem] of Object.entries(data)) {
                // Mapeia o nome do campo do backend ('cpf', 'email', etc.) para o ID do elemento no HTML
                const idElementoErro = "erro-" + campo; // Ex: 'cpf_error_message'

                console.log("========================================================");
                console.log(idElementoErro);
                console.log("========================================================");
                // Tenta exibir o erro no elemento específico
                if (document.getElementById(idElementoErro)) {
                    //CHAMANDO A SUA FUNÇÃO mostrarErro(idElemento, mensagem)
                    mostrarErro(idElementoErro, mensagem);
                                        
                } 



            }

          
        } else {
          mostrarMensagem("⚠️ Erro desconhecido", "erro");
        }
        throw new Error("Erro de validação");
      }

      return data;
    })
    .then(data => {
      if (data.id) {
        localStorage.setItem("id_usuario", data.id);
        // mostrarMensagem(data.message || "✅ Usuario cadastrado com sucesso!", "sucesso");
      }
    })
    .catch(error => console.error(error));
       
}


function consultar() {
     limparErros();
    
    if (!validarFormulario()) return;

    const dados = coletarDados();    

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

   

    // Envia os dados via fetch
    fetch("http://127.0.0.1:8080/agenda/listar", { // altere a URL conforme seu endpoint
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(
            dados
        ),
    
        headers: headers

    })
    .then(async response => {
       let data = await response.json();

      console.log(data);
      

      if (!response.ok) {
        // Caso sejam erros de validação no DTO
        if (typeof data === "object") {
          let mensagens = Object.values(data).join("<br>");

          console.log("Entrou dento do if data ==== object");
          console.log("----------------------------------------------");
          console.log(mensagens);
          console.log("----------------------------------------------");

            let mensagensGlobais = []; // Para erros que não mapeiam para um campo específico

            for (const [campo, mensagem] of Object.entries(data)) {
                // Mapeia o nome do campo do backend ('cpf', 'email', etc.) para o ID do elemento no HTML
                const idElementoErro = "erro-" + campo; // Ex: 'cpf_error_message'

                console.log("========================================================");
                console.log(idElementoErro);
                console.log("========================================================");
                // Tenta exibir o erro no elemento específico
                if (document.getElementById(idElementoErro)) {
                    //CHAMANDO A SUA FUNÇÃO mostrarErro(idElemento, mensagem)
                    mostrarErro(idElementoErro, mensagem);
                                        
                } 



            }

          
        } else {
          mostrarMensagem("⚠️ Erro desconhecido", "erro");
        }
        throw new Error("Erro de validação");
      }

      return data;
    })
    .then(data => {
      if (data.id) {
        localStorage.setItem("id_usuario", data.id);
        // mostrarMensagem(data.message || "✅ Usuario cadastrado com sucesso!", "sucesso");
      }
    })
    .catch(error => console.error(error));
       
}


function alterar() {
     limparErros();
    
    if (!validarFormulario()) return;

    const dados = coletarDados();    

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    // Envia os dados via fetch
    fetch("http://127.0.0.1:8080/agenda/imprimir/id", { // altere a URL conforme seu endpoint

        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(
            dados
        ),
    
        headers: headers

    })
    .then(async response => {
       let data = await response.json();

      console.log(data);
      

      if (!response.ok) {
        // Caso sejam erros de validação no DTO
        if (typeof data === "object") {
          let mensagens = Object.values(data).join("<br>");

          console.log("Entrou dento do if data ==== object");
          console.log("----------------------------------------------");
          console.log(mensagens);
          console.log("----------------------------------------------");

            let mensagensGlobais = []; // Para erros que não mapeiam para um campo específico

            for (const [campo, mensagem] of Object.entries(data)) {
                // Mapeia o nome do campo do backend ('cpf', 'email', etc.) para o ID do elemento no HTML
                const idElementoErro = "erro-" + campo; // Ex: 'cpf_error_message'

                console.log("========================================================");
                console.log(idElementoErro);
                console.log("========================================================");
                // Tenta exibir o erro no elemento específico
                if (document.getElementById(idElementoErro)) {
                    //CHAMANDO A SUA FUNÇÃO mostrarErro(idElemento, mensagem)
                    mostrarErro(idElementoErro, mensagem);
                                        
                } 



            }

          
        } else {
          mostrarMensagem("⚠️ Erro desconhecido", "erro");
        }
        throw new Error("Erro de validação");
      }

      return data;
    })
    .then(data => {
      if (data.id) {
        localStorage.setItem("id_usuario", data.id);
        // mostrarMensagem(data.message || "✅ Usuario cadastrado com sucesso!", "sucesso");
      }
    })
    .catch(error => console.error(error));
       
}


function deletar() {
      limparErros();
    
    if (!validarFormulario()) return;

    const dados = coletarDados();    

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    // Envia os dados via fetch
    fetch("http://127.0.0.1:8080/agenda/", { // altere a URL conforme seu endpoint
       
        
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(
            dados
        ),
    
        headers: headers

    })
    .then(async response => {
       let data = await response.json();

      console.log(data);
      

      if (!response.ok) {
        // Caso sejam erros de validação no DTO
        if (typeof data === "object") {
          let mensagens = Object.values(data).join("<br>");

          console.log("Entrou dento do if data ==== object");
          console.log("----------------------------------------------");
          console.log(mensagens);
          console.log("----------------------------------------------");

            let mensagensGlobais = []; // Para erros que não mapeiam para um campo específico

            for (const [campo, mensagem] of Object.entries(data)) {
                // Mapeia o nome do campo do backend ('cpf', 'email', etc.) para o ID do elemento no HTML
                const idElementoErro = "erro-" + campo; // Ex: 'cpf_error_message'

                console.log("========================================================");
                console.log(idElementoErro);
                console.log("========================================================");
                // Tenta exibir o erro no elemento específico
                if (document.getElementById(idElementoErro)) {
                    //CHAMANDO A SUA FUNÇÃO mostrarErro(idElemento, mensagem)
                    mostrarErro(idElementoErro, mensagem);
                                        
                } 



            }

          
        } else {
          mostrarMensagem("⚠️ Erro desconhecido", "erro");
        }
        throw new Error("Erro de validação");
      }

      return data;
    })
    .then(data => {
      if (data.id) {
        localStorage.setItem("id_usuario", data.id);
        // mostrarMensagem(data.message || "✅ Usuario cadastrado com sucesso!", "sucesso");
      }
    })
    .catch(error => console.error(error));
       
}





// if (loja === "Selecione a Loja" || tipoServico === "Selecione o tipo de estética" || dataHora === "") {
    //     alert("Por favor, preencha todos os campos antes de salvar o serviço.");
    //     return;
    // }

    // Simulação de salvamento (poderia ser um fetch() para API futuramente)
    // alert("Serviço agendado com sucesso!");
    // console.log("Serviço agendado!");
    // console.log("Loja:", loja);
    // console.log("Tipo de serviço:", tipoServico);
    // console.log("Data e Horário:", dataHora);

    // limparErros();
    // const dados = coletarDados();

    // if (!validarFormulario()) return;

    // let hoje = new Date();
    // let dataDigitada = new Date(dataHora);
    // if (dataDigitada > hoje) {
    //     alert("A data não pode ser futura");
    //     return;
    // }