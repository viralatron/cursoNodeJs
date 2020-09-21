const pessoa = {
    nome: `Daniel`,
    sobrenome: `Silva`,
    idade: 33,
    endereco: {
        rua: `Rua Frei Tito`,
        numero: 116
    }
};

const { nome, sobrenome, idade, ...endereco} = pessoa;

console.log(nome, idade, endereco);