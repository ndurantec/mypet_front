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