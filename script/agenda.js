function salvarServico() {
   

    if (data === "") return "Selecione uma data";
    let hoje = new Date();
    let dataDigitada = new Date(data);
    if (dataDigitada > hoje) return "A data não pode ser futura";



    // Envia os dados via fetch
    fetch('http://127.0.0.1:8080/agenda/imprimir/id', { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}


function consultarServico() {
   


    // Envia os dados via fetch
    fetch('http://127.0.0.1:8080/agenda/{id}', { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}



function alterarServico() {
   


    // Envia os dados via fetch
    fetch('http://127.0.0.1:8080/agenda/imprimir/id', { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}



function deletarServico() {
   


    // Envia os dados via fetch
    fetch('http://127.0.0.1:8080/agenda/{id}', { // altere a URL conforme seu endpoint
       
    }).then(response => {
           
    }).then(data => {
       
    }).catch(error => {
       
    });
}