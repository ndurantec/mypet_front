function enviarCadastro() {
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("numero").value;
    let bairro = document.getElementById("bairro").value;
    let cep = document.getElementById("cep").value;
    let complemento = document.getElementById("complemento").value;
    
    if(rua == ""){
        alert("Você precisa preencher o campo rua");
    }

    if(numero == ""){
        alert("Você precisa preencher o campo numero");
    }

    if(bairro == ""){
        alert("Você precisa preencher o campo bairro");
    }

    if( cep== ""){
        alert("Você precisa preencher o campo cep");
    }

      if( complemento== ""){
        alert("Você precisa preencher o campo complemento");
    }


         alert( rua + " - " + numero + " - " + bairro + " - " + cep + " - " + complemento);
}


function limparErros() {
    let erros = document.querySelectorAll('.erro');
    erros.forEach(e => e.textContent = '');
}

function validarFormulario() {
 
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

   

function consultarendereco() {

       limparErros();

       if (!validarFormulario()) return;
       
       const dados = coletarDados();

       console.log(JSON.stringify(dados));

       var headers = new Headers();
       headers.append("Content-Type", "application/json");
       headers.append("Access-Control-Allow-Origin", "*");


   
    fetch('http://127.0.0.1:8080/endereco/findById/{id}'), { 

    method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(
            dados
        ),
    
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
        localStorage.setItem("id_usuario", data.id);
        // mostrarMensagem(data.message || "✅ Usuario cadastrado com sucesso!", "sucesso");
      }
    })
    .catch(error => console.error(error))
}

};


function deletarendereco() {

    limparErros();

    if (!validarFormulario()) return;

    const dados = coletarDados();

    console.log(JSON.stringify(dados));
   
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");


    fetch('http://127.0.0.1:8080/endereco/{id}'), { 
       
    method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(
            dados
        ),
    
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
        localStorage.setItem("id_usuario", data.id);
        // mostrarMensagem(data.message || "✅ Usuario cadastrado com sucesso!", "sucesso");
      }
    })
    .catch(error => console.error(error))
}

};


function atualizarendereco() {

    limparErros();

    if (!validarFormulario()) return;

    const dados = coletarDados();

     console.log(JSON.stringify(dados));
   
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    

   
    fetch('http://127.0.0.1:8080/endereco/UpEndereco/{id}'), { 
       
    method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(
            dados
        ),
    
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
        localStorage.setItem("id_usuario", data.id);
        // mostrarMensagem(data.message || "✅ Usuario cadastrado com sucesso!", "sucesso");
      }
    })
    .catch(error => console.error(error))
}
    
};