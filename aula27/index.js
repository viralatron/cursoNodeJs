function saudacao(nome = `nome`)
{
    console.log(`henlo, ${nome}!`);
} // declaracao classica

saudacao(`roberto`);

const raiz = function (n) {
    return n ** 0.5;
}; // funcao anonima
const arrowFunc = (n) => {
    return n ** 0.5;
}; //arrow function é isso aqui

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));