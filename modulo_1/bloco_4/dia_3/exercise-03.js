//Agora inverta o lado do triângulo. Por exemplo: 

let number = 5;
let symbol = '*';
let line = '';
let position = number;

for (let indexLine = 0; indexLine < number; indexLine +=1){
  for (let indexColumn = 1; indexColumn <= number; indexColumn += 1){
    if (indexColumn < position){
      line += ' ';
    } else {
      line += symbol;
    }
  }
  console.log(line);
  line = '';
  position -= 1;
}
