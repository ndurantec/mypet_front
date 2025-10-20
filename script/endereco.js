function validarCampos() {
  let ok = true;

  // Limpa mensagens anteriores
  document.querySelectorAll('.erro').forEach(div => div.textContent = '');

  // Nome (texto)
  const Rua = document.getElementById('Rua').value.trim();
  if (Rua === '') {
    mostrarErro('erro-Rua', 'O Rua é obrigatório.');
    ok = false;
  } else if (Rua.length < 3) {
    mostrarErro('erro-Rua', 'O Rua deve ter pelo menos 3 caracteres.');
    ok = false;
  }

  // Idade (inteiro)
  const numero = document.getElementById('Numero').value;
  if (Numero === '') {
    mostrarErro('erro-Numero', 'Informe a Numero.');
    ok = false;
  } else if (Numero < 0 || Numero > 120) {
    mostrarErro('erro-Numero', 'Numero inválida.');
    ok = false;
  }

  // Salário (valor em reais)
  const bairro = document.getElementById('bairro').value;
  if (bairro === '') {
    mostrarErro('erro-bairro', 'Informe o salário.');
    ok = false;
  } else if (!/^\d+(\.\d{1,2})?$/.test(bairro)) {
    mostrarErro('erro-bairro', 'Formato inválido. Use ponto como separador decimal.');
    ok = false;
  }

  // Email
  const cep = document.getElementById('cep').value;
  if (cep === '') {
    mostrarErro('erro-cep', 'Informe o e-mail.');
    ok = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cep)) {
    mostrarErro('erro-cep', 'E-mail inválido.');
    ok = false;
  }

  // Telefone
  const complento = document.getElementById('complemento').value;
  if (complemento === '') {
    mostrarErro('erro-complemento', 'Informe o complemento.');
    ok = false;
  } else if (!/^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(complemento)) {
    mostrarErro('erro-complemento', 'Formato inválido. Ex: (99) 99999-9999');
    ok = false;
  }

}

function mostrarErro(idCampo, mensagem) {
  document.getElementById(idCampo).textContent = mensagem;
}
