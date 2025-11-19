function mostrarErro(idElemento, mensagem) {
    document.getElementById(idElemento).textContent = mensagem;
}

function limparErros() {
    let erros = document.querySelectorAll('.erro');
    erros.forEach(e => e.textContent = '');
 
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
    //limparErros();

    // Captura dos valores do formulário
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
        
    let ok = true;

    if (!email) { mostrarErro('erro-email', 'Verifique se possui email para continuar.'); ok = false; }
    if (!senha) { mostrarErro('erro-senha', 'Verifique se possui senha para continuar.'); ok = false; }
    

    return ok;
} 
 
function coletarDados() {
  const canvas = document.getElementById('signaturePad');

  return {
      email: document.getElementById("email").value.trim(),
      senha: document.getElementById("senha").value.trim()
  };
}


function login() {    

    limparErros();
    
    if (!validarFormulario()) return;

    const dados = coletarDados();
    //console.log("Enviando criar conta:", dados);

    console.log( dados );

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    fetch('http://localhost:8080/auth/login', {
        
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

      console.log("resposta do servidor");//resposta do servidor
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
        mostrarMensagem(data.message || "✅ Login efetuado com sucesso!", "sucesso");
        window.location.href = '/page/home.html';
      }
    })
    .catch(error => console.error(error));
}
