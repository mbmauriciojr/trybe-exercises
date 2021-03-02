// Crie uma função que receba um array de inteiros e retorne o índice do maior valor. 

function biggerValue(numbers){
  let indexNumber = 0;
  for (let index in numbers){
    if (numbers[indexNumber] < numbers[index]) {
      indexNumber = index;
    }
  }
  return indexNumber;
}
  

console.log(biggerValue([15, 20, 5, 7, 6, 100]));

//Exercício feito com o gabarito, pois a lógica que eu havia chego estava muito grande e acabou não dando certo, pois utilizava dois For's para percorer os index.