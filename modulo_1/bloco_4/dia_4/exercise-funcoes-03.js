//Crie uma função que receba um array de inteiros e retorne o índice do menor valor. 

function smallerValue(numbers) {
  smallerIndex = 0;
  for (let index in numbers) {
    if (numbers[smallerIndex] > numbers[index]) {
      smallerIndex = index;
    }
  }
  return smallerIndex;
}

console.log(smallerValue([15, 20, 5, 7, 6, 100, -45]));

//Exercício feito entendendo a lógica anterior!