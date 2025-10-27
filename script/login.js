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
   


function Logar() {
   


    // Envia os dados via fetch
    fetch("http://127.0.0.1:8080/login/authenticate", { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}