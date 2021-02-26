/*
Utilizando for, descubra qual o menor valor contido no array e imprima-o; 
*/

let numbers = [5, 1, 3, 19, 70, 8, 100, 2, 35, 0.75];
let menorValor = numbers[0];
let valorAtual = 0;

for (let index = 0; index < numbers.length; index += 1) {
  valorAtual = numbers[index];
  
  if (valorAtual < menorValor) {
    menorValor = valorAtual;
  }  
}

console.log(menorValor);