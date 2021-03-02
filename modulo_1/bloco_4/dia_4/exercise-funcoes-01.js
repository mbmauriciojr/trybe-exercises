//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. 

function PalindromeCheck(string){
  let stringReverse = string.split('').reverse().join(''); // split separa em silabas, o reverse troca a ordem das letras e o join junta em uma palavra novamente. Final concluído com o gabarito pois eu não conhecia o .join .
  if (stringReverse === string ){
    return true;
  } else {
    return false;
  }
}

console.log(PalindromeCheck('arara'));
console.log(PalindromeCheck('desenvolvimento'));