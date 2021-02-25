let nota = -10;

if (nota >= 90 && nota <= 100){
  nota = 'A'
  console.log('Sua nota é', nota, 'Parabéns');
} else if (nota >= 80 && nota <= 89) {
  nota = 'B'
  console.log('Sua nota é', nota, 'Parabéns');
} else if (nota >= 70 && nota <= 79) {
  nota = 'C'
  console.log('Sua nota é', nota, 'Parabéns');
} else if (nota >= 60 && nota <= 69) {
  nota = 'D'
  console.log('Sua nota é', nota, 'Parabéns');
} else if (nota >= 50 && nota <= 59) {
  nota = 'E'
  console.log('Sua nota é', nota, 'Melhore');
} else if (nota < 50 && nota >= 0) {
  nota = 'F'
  console.log('Sua nota é', nota, 'Melhore');
} else {
  console.log('Por favor digite um valor válido');
}