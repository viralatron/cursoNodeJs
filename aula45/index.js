// atribuição por desestruturação [arrays]
// ... rest para colocar o resto dos valores se não quiser continuar atribuindo
const valores = ['a', 'b', 'c', 'd', 'e', 'f'];
const [a, b, c, ...resto] = valores

console.log(a, b, c, resto);

// atribuição por desestruturação [objetos]
const valoresArray = [['a', 'b'], ['c', 'd'], ['e', 'f']]
const [arr1, arr2, arr3] = valoresArray;

console.log(arr1, arr2);