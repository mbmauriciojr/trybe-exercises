let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for (let index = 1; index < numbers.length; index += 1){
  for (let indexTwo = 0; indexTwo < index; indexTwo +=1){
    if (numbers[index] < numbers[indexTwo]){
      let position = numbers[index];

      numbers[index] = numbers[indexTwo];
      numbers[indexTwo] = position;
    }
  }
}

console.log(numbers[indexTwo]);

// Precisa ser terminado!