function mostrarErro(idElemento, mensagem) {
  document.getElementById(idElemento).textContent = mensagem;
}

function mostrarMensagem(texto, tipo) {
  const mensagemDiv = document.getElementById("erro-mensagem");
  mensagemDiv.innerHTML = texto;

  if (tipo === "sucesso") {
    mensagemDiv.className = "mensagem sucesso";
  } else {
    mensagemDiv.className = "mensagem erro";
  }
}

function limparErros() {
  let erros = document.querySelectorAll('.erro');
  erros.forEach(e => e.textContent = '');
}

function limparMensagem() {
  const mensagem = document.getElementById('erro-mensagem');
  if (mensagem) mensagem.textContent = '';
}

function validarFormulario() {
  
    let nome = document.getElementById("nome").value;
    let cnpj = document.getElementById("cnpj").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;    
    let ok = true;

    if (!nome) { mostrarErro('erro-nome', 'Verifique se possui nome para continuar.'); ok = false; }
    if (!cnpj) { mostrarErro('erro-cnpj', 'Verifique se possui cnpj para continuar.'); ok = false; }
    if (!telefone) { mostrarErro('erro-telefone', 'Verifique se possui telefone para continuar.'); ok = false; }
    if (!email) { mostrarErro('erre-mail', 'Verifique se possui email para continuar.'); ok = false; }
    
    return ok;
}

function coletarDados() {
   
    return {
        nome: document.getElementById("nome").value.trim(),
        cnpj: document.getElementById("cnpj").value.trim(),
        telefone: document.getElementById("telefone").value.trim(),
        email: document.getElementById("email").value.trim()        
    };
}

function limparCampos() {
  console.log("Iniciando limpeza dos campos do formulário...");

  // 1. Limpa os campos de texto/input
  document.getElementById("nome").value = "";
  document.getElementById("cnpj").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("email").value = "";   
  
  console.log("Limpeza concluída. Formulário pronto para novo registro.");
}

function popularDados(data) {

  console.log("Chamou a função popularDados");

  if (!data) {
      console.error("Nenhuma loja encontrada.");
      return;
  }

  // Preenche os campos do formulário
  document.getElementById("nome").value = data.nome || "";
  document.getElementById("email").value = data.email || "";
  document.getElementById("telefone").value = data.telefone || "";  
  document.getElementById("cnpj").value = data.cnpj || "";

  // Armazena o id do usuário no localStorage (caso ainda não esteja salvo)
  if (data.id) {
      localStorage.setItem("id_loja", data.id);
  }
}


function salvar() {

    limparErros();

    if (!validarFormulario()) return;

    const dados = coletarDados();   

    console.log (dados);
    
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    

    // Envia os dados via fetch
    fetch("http://localhost:8080/loja/cadloja", { // altere a URL conforme seu endpoint

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

      console.log("Resposta do Servidor");
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
                    limparCampos();
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
        localStorage.setItem("id_loja", data.id);
        mostrarMensagem(data.message || "✅ Loja cadastrada com sucesso!", "sucesso");
      }
    })
    .catch(error => console.error("Erro ao cadastrar:", error));
}

function consultar() {
   
    limparErros();

    //if (!validarFormulario()) return;

    const dados = coletarDados();

    console.log( dados );

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");


    // Envia os dados via fetch
    fetch("http://localhost:8080/loja/consultar", { // altere a URL conforme seu endpoint
       
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',

        body: JSON.stringify( dados ),
        
        headers: headers
   
    }).then(async response => {
      let data = await response.json();

      console.log("Resposta do Servidor");
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
        localStorage.setItem("id_loja", data.id);
        popularDados(data);
        mostrarMensagem(data.message || "✅ loja encontrada!", "sucesso");
      }
    })
    .catch(error => console.error("Erro ao cadastrar:", error));
 }


function alterar() {

    limparErros();

    if (!validarFormulario()) return;

    const dados = coletarDados();
    dados.id = localStorage.getItem("id_loja");
    
   
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    // Envia os dados via fetch
    fetch("http://localhost:8080/loja/alterar", { // altere a URL conforme seu endpoint
       
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',

        body: JSON.stringify( dados ),

        headers: headers


        
    }).then(async response => {
      let data = await response.json();

      console.log("Resposta do servidor");
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
        localStorage.setItem("id_loja", data.id);
        mostrarMensagem(data.message || "✅ loja alterada com sucesso!", "sucesso");
      }
    })
    .catch(error => console.error("Erro ao cadastrar:", error));
}  

function deletar() {
     
    limparErros();

    //if (!validarFormulario()) return;

    const dados = coletarDados();

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");


    // Envia os dados via fetch
    fetch("http://localhost:8080/loja/deletar", { // altere a URL conforme seu endpoint
       

        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(
        dados),
        headers: headers


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
        localStorage.setItem("id_loja", data.id);
        mostrarMensagem(data.message || "✅ loja deletada com sucesso!", "sucesso");
        limparCampos();
      }
    })
    .catch(error => console.error(error))
    });
}