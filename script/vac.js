function mostrarErro(idElemento, mensagem) {
    document.getElementById(idElemento).textContent = mensagem;
}

function validarFormulario() {
    //limparErros();

    // Captura dos valores do formulário
    // let nome = document.getElementById("nome").value;
    // let cpf = document.getElementById("cpf").value;
    
    let ok = true;

    // if (!nome) { mostrarErro('erro-nome', 'Verifique se possui nome para continuar.'); ok = false; }
    // if (!cpf) { mostrarErro('erro-cpf', 'Verifique se possui cpf para continuar.'); ok = false; }
    

    return ok;
}

function coletarDados() {
    const canvas = document.getElementById('signaturePad');
  
    return {
        // nome: document.getElementById("nome").value.trim(),
        // cpf: document.getElementById("cpf").value.trim(),
        campo1: document.getElementById("campo1").value.trim(),
        campo2: document.getElementById("campo2").value.trim(),
        campo3: document.getElementById("campo3").value.trim(),
        campo4: document.getElementById("campo4").value.trim(),
        campo5: document.getElementById("campo5").value.trim(),
        campo6: document.getElementById("campo6").value.trim(),
        campo7: document.getElementById("campo7").value.trim(),
        campo8: document.getElementById("campo8").value.trim(),
        campo9: document.getElementById("campo9").value.trim()

    };
}

function limparErros() {
    let erros = document.querySelectorAll('.erro');
    erros.forEach(e => e.textContent = '');
}

function salvarVacinacao(){
    limparErros();

    if (!validarFormulario()) return;

    const dados = coletarDados();
    console.log(dados);

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");


    //Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint

            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            body: JSON.stringify(
                dados
            ),
        
            headers: headers

       
    }).then(async response => {
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

function consultarVacinacao(){
    limparErros();

    if (!validarFormulario()) return;

    const dados = coletarDados();

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    //Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint

            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            body: JSON.stringify(
                dados
            ),
        
            headers: headers

       
    }).then(async response => {
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

function alterarVacinacao(){
    limparErros();

    if (!validarFormulario()) return;

    const dados = coletarDados();

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    //Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint

            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            body: JSON.stringify(
                dados
            ),
        
            headers: headers

       
    }).then(async response => {
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

function deletarVacinacao(){
    limparErros();

    if (!validarFormulario()) return;

    const dados = coletarDados();

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    //Envia os dados via fetch
    fetch('http://127.0.0.1:8080/responsaveis', { // altere a URL conforme seu endpoint
        
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            body: JSON.stringify(
                dados
            ),
        
            headers: headers

       
    }).then(async response => {
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