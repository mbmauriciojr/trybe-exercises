/* Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .  */

let numbers = [];
let numbersDivi = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);

for (let index = 0; index < numbers.length; index += 1) {
  numbersDivi.push(numbers[index] / 2);
}

console.log('A divisão do Array numbers por 2 é:')
console.log(numbersDivi);