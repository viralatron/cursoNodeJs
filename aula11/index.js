/**
 * Luiz Otávio Miranda tem 30 anos, pesa 84kg
 * tem 1.8 de altura e seu IMC é de 25.92
 * Luiz Otávio nasceu em 1980
 */

const nome = "Daniel";
const sobrenome = "Amaral e Silva";
const idade = 32;
const peso = 103;
const altura = 1.99;
let imc;
const anoAtual = new Date().getFullYear();
let anoNascimento;

imc = peso/(altura * altura);
anoNascimento = anoAtual - idade

 //console.log(nome+" "+sobrenome+" tem "+idade+" anos, pesa ");
console.log(
    `${nome} ${sobrenome} tem ${idade} anos,
pesa ${peso}kg, tem ${altura} de altura
e seu IMC é de ${imc.toFixed(2)}.
${nome} nasceu em ${anoNascimento}`
);