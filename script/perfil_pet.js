

function limparErros() {
    let erros = document.querySelectorAll('.erro');
    erros.forEach(e => e.textContent = '');
    
    // Limpar estilos dos campos
    const campos = document.querySelectorAll('input, select');
    campos.forEach(campo => {
        campo.style.border = "";
        campo.style.color = "";
        campo.placeholder = "";
    });
}

function validarCampo(campo, texto) {
    if (campo.value.trim() === "") {
        campo.placeholder = texto;
        campo.style.border = "2px solid red";
        campo.style.color = "red";
        return false;
    } else {
        campo.style.border = "";
        campo.style.color = "";
        return true;
    }
}

function validarFormulario() {
    limparErros();

    const nome = document.getElementById("nome");
    const idade = document.getElementById("idade");
    const raca = document.getElementById("raca");
    const tipo = document.getElementById("tipo");
    const responsavel = document.getElementById("responsavel");

    const nomeOK = validarCampo(nome, "Campo nome é obrigatório");
    const idadeOK = validarCampo(idade, "Campo idade é obrigatório");
    const racaOK = validarCampo(raca, "Campo raça é obrigatório");
    const tipoOK = validarCampo(tipo, "Campo tipo é obrigatório");
    const responsavelOK = validarCampo(responsavel, "Campo responsável é obrigatório");

    return nomeOK && idadeOK && racaOK && tipoOK && responsavelOK;
}

function coletarDados() {
    return {
        nome: document.getElementById("nome").value.trim(),
        idade: document.getElementById("idade").value.trim(),
        raca: document.getElementById("raca").value.trim(),
        tipo: document.getElementById("tipo").value.trim(),
        responsavel: document.getElementById("responsavel").value.trim(),
        outro_tipo: document.getElementById("outro_tipo").value.trim()
    };
}

function salvarCadastro() {
    if (!validarFormulario()) {
        return;
    }

    limparErros();

    const dados = coletarDados();
    console.log("Enviando cadastro:", dados);

    fetch('http://127.0.0.1:8080/pet/cadpet', { 
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
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

function consultarCadastro() {
    const nome = document.getElementById("nome").value.trim();
    
    if (!nome) {
        return;
    }

    fetch(`http://127.0.0.1:8080/pet/buscarNomePet/${encodeURIComponent(nome)}`, {
        method: 'GET',
        mode: 'cors',
        headers: headers
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Pet não encontrado');
        }
        return response.json();
    })
    .then(data => {
        console.log("Dados encontrados:", data);
        // Preencher os campos com os dados retornados
        document.getElementById("idade").value = data.idade || "";
        document.getElementById("raca").value = data.raca || "";
        document.getElementById("tipo").value = data.tipo || "";
        document.getElementById("responsavel").value = data.responsavel || "";
        document.getElementById("outro_tipo").value = data.outro_tipo || "";
        
        
    })
    .catch(error => {
        console.error("Erro:", error);
    });
}

function deletarCadastro() {
    const nome = document.getElementById("nome").value.trim();
    
    if (!nome) {
        
        return;
    }

    if (!confirm(`Tem certeza que deseja deletar o cadastro de ${nome}?`)) {
        return;
    }

    fetch('http://127.0.0.1:8080/pet/apagar/', { 
        method: 'DELETE',
        mode: 'cors',
        body: JSON.stringify({ nome: nome }),
        headers: headers
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao deletar');
        }
        return response.json();
    })
    .then(data => {
        console.log("Deletado:", data);
        limparFormulario();
    })
    .catch(error => {
        console.error("Erro:", error);
       
    });
}

function alterarCadastro() {
    if (!validarFormulario()) {
      
        return;
    }

    const dados = coletarDados();

    fetch('http://127.0.0.1:8080/pet/alterar/', { 
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(dados),
        headers: headers
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao alterar');
        }
        return response.json();
    })
    .then(data => {
        console.log("Alterado:", data);
       
    })
    .catch(error => {
        console.error("Erro:", error);
       
    });
}

function limparFormulario() {
    document.querySelectorAll('input, select').forEach(campo => {
        campo.value = "";
    });
    limparErros();
}