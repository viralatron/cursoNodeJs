/**
 * funções declaradas com function em js
 * dispoem de um objeto chamado "arguments"
 * que armazena todas as variáveis que o dev
 * utilizar no campo de argumentos na função
 */

const totalSum = function() {
     let total = 0;

     for (let argumento of arguments) {
         total += argumento;
     }

     console.log(total, arguments);
 }


totalSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);