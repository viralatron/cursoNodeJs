/**
 * escreva uma funcao que recebe um numero e
 * retorne o seguinte:
 * numero divisivel por 3 = fizz
 * numero divisivel por 5 = buzz
 * numero divisivel por 3 e 5 = fizzbuzz
 * numero nao é divisivel por 3 e 5 = retorna o proprio numero
 * checar se o numero é realmente um numero
 * use a função com números de 0 a 100
 */

const fizzBuzz = (num) => {
    if(isNaN(num)) return num;

    if(num % 15 === 0) return 'fizzbuzz';
    if(num % 3 === 0) return 'fizz';
    if(num % 5 === 0) return 'buzz';


    return num;
}

console.log(fizzBuzz(`teste`));

for (let index = 0; index <= 100; index++) {
    console.log(index, fizzBuzz(index));
}