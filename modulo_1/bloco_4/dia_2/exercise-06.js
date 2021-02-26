/*
Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */

let numbers = [2, 10, 0, 8, 70, 8, 100, 2, 4, 30];
let contNumbersImpar = 0;

for (let index = 0; index < numbers.length; index += 1){
  let currentNumber = numbers[index];

  if (currentNumber % 2 > 0) {
    contNumbersImpar += 1;
  }

}

if (contNumbersImpar === 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log('Foram encontrados:',contNumbersImpar,'números impares')
}