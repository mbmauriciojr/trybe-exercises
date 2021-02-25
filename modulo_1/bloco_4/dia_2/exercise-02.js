// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado; 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let summNumbers = 0;

for (index = 0; index < numbers.length; index += 1){
  summNumbers += numbers[index];
}

console.log(summNumbers);


//Para que uma variável receba ela mesma somado com outro número o correto é fazer somaArray += numbers[index]; não preica ter aquele + antes do valor que vai ser somado.