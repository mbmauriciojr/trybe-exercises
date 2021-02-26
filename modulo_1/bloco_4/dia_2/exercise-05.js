/*
Utilizando for , descubra qual o maior valor contido no array e imprima-o;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 127];
let maiorValor = 0;
let valorAtual = 0;

for (let index = 0; index < numbers.length; index += 1) {
  valorAtual = numbers[index];
  
  if (valorAtual > maiorValor) {
    maiorValor = valorAtual;
  }  
}

console.log(maiorValor);