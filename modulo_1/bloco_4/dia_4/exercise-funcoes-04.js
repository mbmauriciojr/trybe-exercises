//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. 

function biggerName(names) {
  let biggestName = names[0];
  for (let index in names){
    if (biggestName.length < names[index].length){
      biggestName = names[index];
    }
  }
  return biggestName;
}

console.log(biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Jeremias Silva']));


//Exercicio feito após entender a lógica com o gabarito.