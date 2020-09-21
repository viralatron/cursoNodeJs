const horaAtual = () => {
    const data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(() => {
    console.log(horaAtual());
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 6000);