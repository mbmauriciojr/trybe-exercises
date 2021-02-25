let pecaXadrez = 'Pawns';
let respostaMov = pecaXadrez.toLowerCase();


switch (respostaMov) {
  case "king":
    console.log('O Rei anda para todas as direções, somente uma casa de cada vez');
    break;
  case "queen":
    console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças');
    break;
  case "bishop":
    console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças');
    break;
  case "horse":
    console.log('O cavalo é a única peça que pode pular as outras. O movimento do cavalo é em forma de L');
    break;
  case "tower":
    console.log('A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças');
    break;
  case "pawns":
    console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal');
    break;
  default:
    console.log('Peça inválida')
}