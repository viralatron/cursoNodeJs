const nome = 'daniel amaral e silva';

const pessoa = {
    nome: 'daniel amaral e silva',
    idade: '30',
    nacionalidade: 'brasileiro'
}

for (let index = 0; index < nome.length; index++) {
    console.log(nome[index]);
    
}

for (let key in nome) {
    console.log(nome[key]);
    
}

for (let key in pessoa) {
    console.log(`${key}: ${pessoa[key]}`);
    
}

for (const iterator of nome) {
    console.log(iterator);
}

/**
 * for classico - com iteraveis (array/strings)
 * for in - retorna indices/chaves de iteraveis e objetos
 * for of - retorna valores de iteraveis
 */