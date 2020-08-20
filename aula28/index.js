function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,

        apresentacao() {
            console.log(`Oi, me chamo ${this.nome} ${this.sobrenome}, tenho ${this.idade} anos`);
        }
    }
};

const Luiz = criaPessoa(`Luiz`, `Miranda`, 25);
const Daniel = criaPessoa(`Daniel`, `Silva`, 33);


console.log(Luiz, Daniel);

Daniel.apresentacao();