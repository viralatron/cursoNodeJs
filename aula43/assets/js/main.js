const date = new Date();
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const dataAtual = date.toLocaleDateString("pt-BR", options);
const horaAtual = date.toLocaleTimeString("pt-BR", {timeStyle: "short"});

const textoData = document.querySelector(".date");
const textoHora = document.querySelector(".time");

textoData.innerHTML = dataAtual;
textoHora.innerHTML = horaAtual;