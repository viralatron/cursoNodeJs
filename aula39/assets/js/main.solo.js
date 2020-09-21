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

// function App() {
//     const form = document.querySelector(`.form`);
    
//     function CalcIMC ( event ){
//         event.preventDefault();
//         // hora de calcular o IMC kg/m²
//         const peso = Number(form.querySelector(`#peso`).value);
//         const altura = Number(form.querySelector(`#altura`).value);
//         let resultado;
//         let color;
//         if( (isNaN(peso) || isNaN(altura)) || (peso === 0 || peso === 0) ) {
//             resultado = `<p>Cálculo inválido</p>`;
//         } else {
//             const BMI = peso/(altura**2);

//             resultado = `<p>IMC: ${BMI}</p>`;
//             if ( BMI < 18.5 ) {
//                 resultado+=`<p>Abaixo do peso</p>`;
//             } else if ( BMI >= 18.5 && BMI < 25 ) {
//                 resultado+=`<p>Peso ideal</p>`;
//             } else if ( BMI >= 25 && BMI < 30 ) {
//                 resultado+=`<p>Sobrepeso</p>`;
//             } else if ( BMI >= 30 && BMI < 35 ) {
//                 resultado+=`<p>Obesidade grau 1</p>`;
//             } else if ( BMI >= 35 && BMI < 40 ) {
//                 resultado+=`<p>Obesidade grau 2</p>`;
//             } else {
//                 resultado+=`<p>Obesidade grau 3</p>`;
//             }
//         }

//         return document.querySelector(`.resultado`).innerHTML = resultado;
//     }

//     form.addEventListener(`submit`, CalcIMC);
// }

// App();