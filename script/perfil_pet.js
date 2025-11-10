//ok
function mostrarErro(idElemento, mensagem) {
    document.getElementById(idElemento).textContent = mensagem;
}

//ok
function limparErros() {
    let erros = document.querySelectorAll('.erro');
    erros.forEach(e => e.textContent = '');
}

function limparFormulario() {
    document.querySelectorAll('input, select').forEach(campo => {
        campo.value = "";
    });
    limparErros();
}

// function validarCampo(campo, texto) {
//     if (campo.value.trim() === "") {
//         campo.placeholder = texto;
//         campo.style.border = "2px solid red";
//         campo.style.color = "red";
//         return false;
//     } else {
//         campo.style.border = "";
//         campo.style.color = "";
//         return true;
//     }
// }

//ok
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

//ok
function coletarDados() {
    const canvas = document.getElementById('signaturePad');
  
    return {
        nome: document.getElementById("nome").value.trim(),
<<<<<<< HEAD
        idade: document.getElementById("idade").value.trim(),
        raca: document.getElementById("raca").value.trim(),
        tipo: document.getElementById("tipo").value.trim(),
        responsavel: document.getElementById("responsavel").value.trim(),
        outro_tipo: document.getElementById("outro_tipo").value.trim(),

        user: localStorage.getItem("id_usuario")

        };
=======
        cpf: document.getElementById("cpf").value.trim()
    };
>>>>>>> 7d88f9f7ef9ca41462c196c661db2e23410174b1
}

function salvarCadastro() {
    
    limparErros();
    
    if (!validarFormulario()) return;

    const dados = coletarDados();
    //console.log("Enviando criar conta:", dados);

    console.log(JSON.stringify(dados));


    console.log(dados);

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
        localStorage.setItem("id_usuario", data.id);
        // mostrarMensagem(data.message || "✅ Usuario cadastrado com sucesso!", "sucesso");
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

