/*
 * Operadores de comparação
 * > maior que
 * >= maior ou igual a
 * < menor que
 * <= menor ou igual a
 * == igualdade (valor)
 * === igualdade estrita (valor e tipo) RECOMENDADO
 * != diferente (valor)
 * !== diferença estrita (valor e tipo) RECOMENDADO
 * o uso delas retorna TRUE (VERDADEIRO) ou FALSE (FALSO)
 * recomenda-se checagem de tipo para evitar efeitos inesperados no código
 * JS não faz conversão automática de tipo
 * possivel atribuir a uma variável ex.:
 */

const num1 = 10;
const num2 = '10';

const expr = num1 === num2;

console.log(expr);

