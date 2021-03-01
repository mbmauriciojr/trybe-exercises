/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n. */

let number = 5;
let symbol = '*';
let line = '';


for (let indexLine = 0; indexLine < number; indexLine += 1) {
  line += symbol;
}

for (let index = 0; index < number; index += 1) {
  console.log(line);
}