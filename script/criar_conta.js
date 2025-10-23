function validacaoContaUsuario(){
    let nome = document.getElementById("nome").value;
    
    if (nome === '') {
        mostrarErro('erro-nome', 'O nome é obrigatório.');
        ok = false;
    } else 
        if (nome.length < 3) {
            mostrarErro('erro-nome', 'O nome deve ter pelo menos 3 caracteres.');
        ok = false;
        } else 
            if (Number(nome)) {
                mostrarErro('erro-nome', 'Seu nome não pode conter apenas números!');

        } else 
            if (nome.length > 255) {
                mostrarErro('erro-nome', 'Seu nome apenas pode conter 255 caractéres');

        } 

    let email = document.getElementById("email").value;

    if (email === '') {
        mostrarErro('erro-email', 'Informe o e-mail.');
        ok = false;
  } else 
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mostrarErro('erro-email', 'E-mail inválido.');
        ok = false;
        
        } else 
            if (email.length > 64) {
                mostrarErro('erro-email', 'Seu email apenas pode conter 64 caractéres');

        } 
    

    let senha = document.getElementById("senha").value;

    if (senha === '') {
        mostrarErro('erro-senha', 'A senha é obrigatória.');
        ok = false;
  }  else if (senha.length < 8) {
        mostrarErro('erro-senha', 'A senha deve ter pelo menos 8 caracteres.');
        ok = false;
  }
    

    let telefone = document.getElementById("telefone").value;

    if (telefone === '') {
        mostrarErro('erro-telefone', 'Informe o telefone.');
        ok = false;
  } else if (!/^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(telefone)) {
        mostrarErro('erro-telefone', 'Formato inválido. Ex: (99) 99999-9999');
        ok = false;
  } else 
        if (telefone.length > 40) {
            mostrarErro('erro-telefone', 'Seu telefone apenas pode conter 40 caractéres');

        } 
     
}

function mostrarErro(idCampo, mensagem) {
  document.getElementById(idCampo).textContent = mensagem;
}
