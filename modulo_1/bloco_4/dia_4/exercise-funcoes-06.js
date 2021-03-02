// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. 

function sumNumber(number) {
  let sumTotal = 0;
  for (let index = 1; index <= number; index += 1){
  sumTotal += index;
  }
  return sumTotal;
}

console.log(sumNumber(5));
console.log(sumNumber(6));