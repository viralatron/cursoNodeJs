let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
// pode criar novas variáveis
// console.log(varA, varB, varC)

// let temp
// temp = varA

// varA = varB
// varB = varC
// varC = temp
// ou

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);