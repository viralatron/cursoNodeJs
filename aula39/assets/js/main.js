const form = document.querySelector(`.form`);

form.addEventListener(`submit`, function(e) {
    e.preventDefault();

    const inputPeso = e.target.querySelector(`#peso`);
    const inputAltura = e.target.querySelector(`#altura`);

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado(`Peso inválido`, false);
        return;
    }

    if(!altura) {
        setResultado(`Altura inválida`, false);
        return;
    }

    const imc = getIMC (peso, altura);
    const categoria = getCategoria ( imc );
    
    const msg = `Seu IMC é ${imc} (${categoria})`;

    setResultado(msg, true);
});

function getCategoria (imc) {
    const categoria = [
        `Abaixo do peso`, 
        `Peso ideal`, 
        `Sobrepeso`, 
        `Obesidade grau 1`, 
        `Obesidade grau 2`, 
        `Obesidade grau 3`
    ];
    if ( imc >= 40 ) return categoria[5];
    if ( imc >= 35 ) return categoria[4];
    if ( imc >= 30 ) return categoria[3];
    if ( imc >= 25 ) return categoria[2];
    if ( imc >= 18.5 ) return categoria[1];
    if ( imc < 18.5 ) return categoria[0];
    
}

function getIMC (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP (){
    const p = document.createElement(`p`);
    return p;
}
function setResultado (msg, isValid) {
    const resultado = document.querySelector(`.resultado`);
    resultado.innerHTML = '';
    
    const p = criaP();

    if(isValid) {
        p.classList.add(`success`);
    } else {
        p.classList.add(`error`);
    }

    p.innerHTML = msg;    

    resultado.appendChild(p);
}
