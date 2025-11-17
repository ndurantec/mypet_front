document.addEventListener("DOMContentLoaded", function() {
  carregarComboResponsavel();
  //carregarComboOperacao();
  //definirNegativo()
});

function carregarComboResponsavel() {
 
  //console.log('Carregou a página e chamou a função');

  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");

  fetch('http://localhost:8080/responsavel/lista' ,{

    method: "GET",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela

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
        const comboBox = document.getElementById('responsaveis');
        data.forEach(responsavel => {
            const option = document.createElement('option');
            option.value = responsavel.id;
            option.textContent = responsavel.nome;
            comboBox.appendChild(option);
        });
      })
    .catch(error => console.error(error));   

}


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


function validarFormulario() {

    // Captura dos valores do formulário
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let raca = document.getElementById("raca").value;
    let tipo = document.getElementById("tipo").value;
    let responsavel = document.getElementById("responsaveis").value;
    
    let ok = true;

    if (!nome) { mostrarErro('erro-nome', 'Verifique se possui nome para continuar.'); ok = false; }
    if (!idade) { mostrarErro('erro-idade', 'Verifique se possui idade para continuar.'); ok = false; }
    if (!raca) { mostrarErro('erro-raca', 'Verifique se possui raça para continuar.'); ok = false; }
    if (!tipo) { mostrarErro('erro-tipo', 'Verifique se possui tipo para continuar.'); ok = false; }
    if (!responsavel) { mostrarErro('erro-responsavel', 'Verifique se possui responsavel para continuar.'); ok = false; }
 
    return ok;
}


function coletarDados() {    
  
    return {
        nome: document.getElementById("nome").value.trim(),
        idade: document.getElementById("idade").value.trim(),
        raca: document.getElementById("raca").value.trim(),
        tipo: document.getElementById("tipo").value.trim(),
        sexo: document.getElementById("sexo").value.trim(),
        user: localStorage.getItem("id_usuario"),
        responsavelDto : {
            id : document.getElementById("responsaveis").value
        }
    };
}

function popularDados(usuario) {
    if (!usuario) {
        console.error("Nenhum dado de usuário encontrado para popular a tela.");
        return;
    }

    // Preenche os campos do formulário
    document.getElementById("nome").value = usuario.nome || "";
    document.getElementById("idade").value = usuario.email || "";
    document.getElementById("raca").value = usuario.telefone || "";
    document.getElementById("tipo").value = usuario.senha || "";
    document.getElementById("sexo").value = usuario.senha || "";

    // Armazena o id do usuário no localStorage (caso ainda não esteja salvo)
    if (usuario.id) {
        localStorage.setItem("id_usuario", usuario.id);
    }
}


function limparErros() {
    let erros = document.querySelectorAll('.erro');
    erros.forEach(e => e.textContent = '');
}



function limparCampos() {
    console.log("Iniciando limpeza dos campos do formulário...");

    // 1. Limpa os campos de texto/input
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";    
    document.getElementById("raca").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("responsaveis").value = "";
    
    // 3. Limpa mensagens de erro/sucesso (se a função existir)
    if (typeof limparErros === 'function') {
        limparErros();
    }
    
    // 4. Limpa o ID do usuário salvo no localStorage, tratando o próximo como novo
    localStorage.removeItem("id_pet"); 
    
    console.log("Limpeza concluída. Formulário pronto para novo registro.");
}

function salvarCadastro() {
    
    limparErros();
    
    if (!validarFormulario()) return;

    const dados = coletarDados();
    //console.log("Enviando criar conta:", dados);
    console.log("============================ front ======================");
    console.log( dados );
    console.log("============================ front ======================");
    
  

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    
    fetch('http://127.0.0.1:8080/pet/cadpet', {
        
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
        localStorage.setItem("id_pet", data.id);
        mostrarMensagem(data.message || "✅ Pet cadastrado com sucesso!", "sucesso");
        limparCampos();
        window.location.href = '/page/home.html';
    }
    })
    .catch(error => console.error(error));
}

function consultarCadastro() {
    
    limparErros();
    
    
    if (!validarFormulario()) return;

    const dados = coletarDados();
    //console.log("Enviando criar conta:", dados);

    console.log(JSON.stringify(dados));
    
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");


    
    fetch(`http://127.0.0.1:8080/pet/buscarNomePet/${encodeURIComponent(nome)}`, {
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

    function deletarCadastro() {

    limparErros();

    
    if (!validarFormulario()) return;

    const dados = coletarDados();
    //console.log("Enviando criar conta:", dados);

    console.log(JSON.stringify(dados));

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");


    

    fetch('http://127.0.0.1:8080/pet/apagar/', {

        method: 'DELETE',
        mode: 'cors',
        body: JSON.stringify({ nome: nome }),
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

function alterarCadastro() {

    limparErros();
    
    if (!validarFormulario()) return;
    
    const dados = coletarDados();
    //console.log("Enviando criar conta:", dados);

    console.log(JSON.stringify(dados));

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    fetch('http://127.0.0.1:8080/pet/alterar/', {
        
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(dados),
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

    
    // function limparFormulario() {
    //     document.querySelectorAll('input, select').forEach(campo => {
    //         campo.value = "";
    //     });
    //     limparErros();
    // }