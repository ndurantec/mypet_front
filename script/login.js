function mostrarErro(idElemento, mensagem) {
    document.getElementById(idElemento).textContent = mensagem;
}
function limparErros() {
    let erros = document.querySelectorAll('.erro');
    erros.forEach(e => e.textContent = '');
 

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



 document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // evita que o formulário seja enviado para um servidor

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Aqui você pode colocar a lógica de autenticação, por exemplo:
  console.log('Login com:', { email, password });
  alert('Login realizado com sucesso! (simulado)');
});
   
function limparErros() {
    let erros = document.querySelectorAll('.erro');
    erros.forEach(e => e.textContent = '');
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

function Logar() {


  
    limparErros();
    
    if (!validarFormulario()) return;

    const dados = coletarDados();
    //console.log("Enviando criar conta:", dados);

   


    // Envia os dados via fetch
    fetch("http://127.0.0.1:8080/login/authenticate", { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}


    fetch('http://localhost:8080/professor/insert', {
        
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(
            dados
        ),
    
        headers: headers


    })

    
function Logar() {

    limparErros();

    if (!validarFormulario)) return

    const dados = coletarDados ();
    //console.log ("Enviando criar conta:", dados);

    
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");



    }
}

    fetch(`http://127.0.0.1:8080/pet/buscarNomePet/${encodeURIComponent(email)}`, {
        method: 'GET',
        mode: 'cors',
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
                // Mapeia o email do campo do backend ('email', 'senha', etc.) para o ID do elemento no HTML
                const idElementoErro = "erro-" + campo; // Ex: 'email_error_message'

                console.log("========================================================");
                console.log(idElementoErro);
                console.log("========================================================");
                // Tenta exibir o erro no elemento específico
                if (document.getElementById(idElementoErro)) {
                    //CHAMANDO A SUA FUNÇÃO mostrarErro(idElemento, mensagem)
                    mostrarErro(idElementoErro, mensagem);
                                        
                } 



            }
        }