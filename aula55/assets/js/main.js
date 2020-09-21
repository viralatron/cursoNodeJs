// escreva uma funçao que receba dois numeros e retorne o maior deles
const calc = document.querySelector('form');

calc.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputs = calc.querySelectorAll('input');
    const values = [];
    
    inputs.forEach(element => {
        values.push(Number(element.value));
    });

    msg(`entre ${values[0]} e ${values[1]}, o valor maior é ${max(values[0], values[1])}`)

});

function msg(msg){
    const result = document.querySelector('.result');

    result.innerText = msg;
}

function max(x, y){
    if( x > y){
        return x;
    } else {
        return y;
    }
}