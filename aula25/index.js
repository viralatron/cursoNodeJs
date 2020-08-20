const alunos = [
    `Luiz`,
    `Maria`,
    `João`
];
console.log(alunos);

alunos.push(`Rodrigo`);
console.log(alunos);

console.log(alunos);
alunos.unshift(`Gertrudes`);
console.log(alunos);

alunos.shift();
console.log(alunos);

delete alunos[1];
console.log(alunos);

console.log(typeof alunos);
console.log(alunos instanceof Array);