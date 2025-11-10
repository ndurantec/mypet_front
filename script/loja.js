
function validarFormulario() {
  
    let nome = document.getElementById("nome").value;
    let cnpj = document.getElementById("cnpj").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;
    let endereco = document.getElementById("endereço").value;
    let ok = true;

    if (!nome) { mostrarErro('erro-nome', 'Verifique se possui nome para continuar.'); ok = false; }
    if (!cnpj) { mostrarErro('erro-cnpj', 'Verifique se possui cnpj para continuar.'); ok = false; }
    if (!telefone) { mostrarErro('erro-telefone', 'Verifique se possui telefone para continuar.'); ok = false; }
    if (!email) { mostrarErro('erre-mail', 'Verifique se possui email para continuar.'); ok = false; }
    if (!endereco) { mostrarErro('erro-endereco', 'Verifique se possui endereço para continuar.'); ok = false; }
    return ok;
}


function limparErros() {
    let erros = document.querySelectorAll('.erro');
    erros.forEach(e => e.textContent = '');
}

function coletarDados() {
    const canvas = document.getElementById('signaturePad');
  
    return {
        nome: document.getElementById("nome").value.trim(),
        cnpj: document.getElementById("cnpj").value.trim(),
        telefone: document.getElementById("telefone").value.trim(),
        email: document.getElementById("email").value.trim(),
        enderecoDto:{  
          id = 1
        //  id: localStorage.getItem ("id_endereco") 
          }
    };
}


// function validarNome() {

//     const nome = document.getElementById('nome').value;
    
//     if (nome.trim() === "") {        
//         mostrarErro('erro-nome', 'O nome deve ter pelo menos 3 caracteres.');
//     }

//     if (nome.length < 3) {
//         return "Digite pelo menos 3 caracteres";
//     }

//     const email = document.getElementById('email').value;
//     if (email === '') {
//         mostrarErro('erro-email', 'Informe o e-mail.');
//         ok = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//         mostrarErro('erro-email', 'E-mail inválido.');
//         ok = false;
//     }
// }


function cadastrar() {

    limparErros();

    if (!validarFormulario()) return;

    const dados = coletarDados();

   
    const nome = document.getElementById('nome').value; //comemntar sobre isso de novo
    
    alert (" loja cadastrada " + nome)

    if (nome.trim() === "") {        
        mostrarErro('erro-nome', 'O nome deve ter pelo menos 3 caracteres.');
    }

    if (nome.length < 3) {
        return "Digite pelo menos 3 caracteres";
    }

    const email = document.getElementById('email').value;
    if (email === '') {
        mostrarErro('erro-email', 'Informe o e-mail.');
        ok = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mostrarErro('erro-email', 'E-mail inválido.');
        ok = false;
    }


    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");


    // Envia os dados via fetch
     fetch("http://127.0.0.1:8080/loja/cadloja", { // altere a URL conforme seu endpoint

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
        localStorage.setItem("id_loja", data.id);
        // mostrarMensagem(data.message || "✅ Usuario cadastrado com sucesso!", "sucesso");
      }
    })
    .catch(error => console.error(error));
}


// function coletarDados() {
    
//     const canvas = document.getElementById('signaturePad');
  
<<<<<<< HEAD
    return {
        nome: document.getElementById("nome").value.trim(),
        cnpj: document.getElementById("cnpj").value.trim(),
        email: document.getElementById("email").value.trim(),
        telefone: document.getElementById("telefone").value.trim(),
        
        endereco: localStorage.getItem ("")
         
    };
   
    console.log (coletarDados);

}
=======
//     return {
//         nome: document.getElementById("nome").value.trim(),
//         cnpj: document.getElementById("cnpj").value.trim()
//     };
// }
>>>>>>> e9849bb79b6e0b6b3a4487c6b54b1707800a86a2


function alterar() {

    limparErros();

     if (!validarFormulario()) return;

    const dados = coletarDados();
    
   
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    // Envia os dados via fetch
    fetch("http://127.0.0.1:8080/loja/UpLoja", { // altere a URL conforme seu endpoint
       

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
        // mostrarMensagem(data.message || "✅ loja cadastrado com sucesso!", "sucesso");
      }
    })
    .catch(error => console.error(error))

   
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
    fetch("http://127.0.0.1:8080/loja/deletar", { // altere a URL conforme seu endpoint
       

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
        // mostrarMensagem(data.message || "✅ loja cadastrado com sucesso!", "sucesso");
      }
    })
    .catch(error => console.error(error))
    });
}

 
function consultar() {
   
    limparErros();

     if (!validarFormulario()) return;


    const dados = coletarDados();

    console.log("Cadastrar ok")

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");


    // Envia os dados via fetch
    fetch("http://127.0.0.1:8080/loja/busacaPorNome/nome", { // altere a URL conforme seu endpoint
       

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
        // mostrarMensagem(data.message || "✅ loja cadastrado com sucesso!", "sucesso");
      }
    })
    .catch(error => console.error(error))
    });
}
