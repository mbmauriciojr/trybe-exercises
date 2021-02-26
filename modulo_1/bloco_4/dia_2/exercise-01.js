// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ; 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroAtual = 0;


for (let index = 0; index < numbers.length; index += 1){
  numeroAtual = numbers[index];
  console.log(numeroAtual);
}


/* Algoritmo:
  1 - Adicionar o array;
  2 - Criar uma variável com valor = 0;
  3 - Criar um loop para percorer o array;
  4 - Prescrever a variável com o valor correspondente a cada loop;
  5 - Imprimir a variável prescrita com o valor atual;
*/