function agendarTosa() {
    const tipoTosa = document.getElementById("tipoTosa").value;
    const dataTosa = document.getElementById("dataTosa").value;

    alert("Tosa agendada com sucesso!");
    console.log("Tosa agendada:");
    console.log("Tipo de Tosa:", tipoTosa);
    console.log("Data e Horário:", dataTosa);
}

function agendarBanho() {
    const tipoBanho = document.getElementById("tipoBanho").value;
    const dataBanho = document.getElementById("dataBanho").value;

    alert("Banho agendado com sucesso!");
    console.log("Banho agendado:");
    console.log("Tipo de Banho:", tipoBanho);
    console.log("Data e Horário:", dataBanho);
}

function agendarCheckup() {
    const tipoCheckup = document.getElementById("tipoCheckup").value;
    const dataCheckup = document.getElementById("dataCheckup").value;

    alert("Check-up agendado com sucesso!");
    console.log("Check-up agendado:");
    console.log("Tipo de Check-up:", tipoCheckup);
    console.log("Data e Horário:", dataCheckup);
}

function agendarProfissional() {
    const profissional = document.getElementById("selecaoProfissional").value;
    const dataProfissional = document.getElementById("dataProfissional").value;

    alert("Agendamento com profissional realizado com sucesso!");
    console.log("Agendamento com profissional:");
    console.log("Profissional:", profissional);
    console.log("Data e Horário:", dataProfissional);
}
