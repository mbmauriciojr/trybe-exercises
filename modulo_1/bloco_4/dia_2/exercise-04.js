/* Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let summNumbers = 0;
let mediaAritimetica = 0;

for (index = 0; index < numbers.length; index += 1){
  summNumbers += numbers[index];
}

console.log(summNumbers);

mediaAritimetica = summNumbers / numbers.length;

console.log(mediaAritimetica);

if (mediaAritimetica > 20) {
  console.log('Valor é maior que 20');
} else {
  console.log('Valor é menor ou igual a 20');
}
