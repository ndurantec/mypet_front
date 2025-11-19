document.addEventListener("DOMContentLoaded", function() {
  carregarComboLoja();
  
});


function carregarComboLoja() {
 
  //console.log('Carregou a página e chamou a função');

  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");

  fetch('http://localhost:8080/loja/lista' ,{

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
        const comboBox = document.getElementById('lojas');
        data.forEach(loja => {
            const option = document.createElement('option');
            option.value = loja.id;
            option.textContent = loja.nome;
            comboBox.appendChild(option);
        });
      })
    .catch(error => console.error(error));   

}





function limparErros() {
    let erros = document.querySelectorAll('.erro');
    erros.forEach(e => e.textContent = '');
}

function mostrarErro(idElemento, mensagem) {
    document.getElementById(idElemento).textContent = mensagem;
}

function validarFormulario() {
    // 1. Limpa erros anteriores
    limparErros();

    // 2. Captura dos valores do formulário
    // IDs dos campos <select> e <input type="datetime-local">
    let loja = document.getElementById("lojas").value;
    let tipoServico = document.getElementById("lojaDto").value; // Tipo de Serviço (Estética, Banho, Check-Up, etc. - usando ID "lojaDto" conforme seu HTML)
    
    // Serviços Disponíveis (Opcionais, mas incluídos para validação de exemplo)
    let tosa = document.getElementById("petDto").value; // Opções de Tosa
    let banho = document.getElementById("banhoDto").value; // Opções de Banho
    let checkup = document.getElementById("checkupDto").value; // Opções de Check-Up
    let tratamento = document.getElementById("tratamentosDto").value; // Tratamentos Especiais
    
    let dataHora = document.getElementById("dataDigitada").value; // Data e Horário

    let ok = true;

    // 3. Verificação dos Campos Obrigatórios (Exemplo)

    // Loja (obrigatório)
    if (!loja) { mostrarErro('erro-lojas', 'Selecione uma loja para continuar.'); ok = false; }    
    
    if (!tipoServico) { 
        mostrarErro('erro-lojaDto', 'Selecione o tipo de serviço (Tosa, Banho, etc.).'); 
        ok = false; 
    }

    // Data e Horário (obrigatório)
    if (!dataHora) { 
        mostrarErro('erro-dataDigitada', 'Preencha a data e horário do agendamento.'); 
        ok = false; 
    } else {
        // Exemplo de validação adicional: verifica se a data/hora é no futuro
        if (new Date(dataHora) < new Date()) {
            mostrarErro('erro-dataDigitada', 'A data e hora devem ser futuras.');
            ok = false;
        }
    }
    
    // Regras de validação adicionais (Exemplo: Se o Tipo de Serviço for "Tosa", o campo Tosa deve ser preenchido)
    if (tipoServico === 'Tosa' && !tosa) {
        mostrarErro('erro-petDto', 'Se o serviço for Tosa, selecione uma opção de tosa.');
        // Não define ok=false novamente, pois já está implícito pelos outros campos ou pela lógica inicial.
    }
    
    // Nota: O resto dos campos de serviço (banho, checkup, tratamento) podem ser considerados opcionais a menos que regras específicas sejam aplicadas.
    // Se eles fossem obrigatórios, a lógica seria:
    // if (!tosa) { mostrarErro('erro-petDto', 'Verifique se possui opção de tosa.'); ok = false; }
    // ... e assim por diante.
    
    
    // 4. Retorna o status da validação
    return ok;
}

/**
 * Função para coletar todos os dados dos campos do formulário e retorná-los
 * em um objeto para envio (DTO).
 */
function coletarDados() { 
    // Capturando os valores dos campos
    const idLoja = document.getElementById("lojas").value;
    const tipoServico = document.getElementById("lojaDto").value;
    const opcaoTosa = document.getElementById("petDto").value;
    const opcaoBanho = document.getElementById("banhoDto").value;
    const opcaoCheckup = document.getElementById("checkupDto").value;
    const opcaoTratamento = document.getElementById("tratamentosDto").value;
    const dataAgendamento = document.getElementById("dataDigitada").value;
    
    // Mantendo a variável original do usuário, caso seja um ID secundário de loja
    const idLojaResponsavel = localStorage.getItem("id_Loja"); 

    return {
        // Identificação e Agendamento
        lojaId: idLoja,
        dataAgendamento: dataAgendamento,
        
        // Informação de contexto (pode ser o ID do usuário logado ou outro ID)
        lojaResponsavelId: idLojaResponsavel, 
        
        // Detalhes do Serviço
        tipoServico: tipoServico, 
        opcaoTosa: opcaoTosa,
        opcaoBanho: opcaoBanho,
        opcaoCheckup: opcaoCheckup,
        opcaoTratamento: opcaoTratamento
    };
}

// As funções salvar(), consultar(), alterar(), deletar() permanecem EXATAMENTE como estão
function salvar() {   
    
    limparErros();
    
    if (!validarFormulario()) return;

    const dados = coletarDados();

    console.log("Dados prontos para enviar");
    console.log(dados);


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