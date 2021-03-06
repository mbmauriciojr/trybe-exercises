// Exercício 1
let tagH1 = document.createElement('h1');
tagH1.innerHTML = 'Exercício 5.2 - JavaScript DOM';

document.body.appendChild(tagH1);

// Exercício 2
let divElement = document.createElement('div');
divElement.className = 'main-content';
document.body.appendChild(divElement);

// Exercício 3
let divCenter = document.createElement('div');
divCenter.className = 'center-content';
document.querySelector('.main-content').appendChild(divCenter);

// Exercício 4
let paragraphCenterContent = document.createElement('p');
paragraphCenterContent.innerText = 'Estamos aqui criando elementos pelo Javascript, obrigado pela atenção!';
document.querySelector('.center-content').appendChild(paragraphCenterContent);

// Exercício 5
let divLeft = document.createElement('div');
divLeft.className = 'left-content';
document.querySelector('.main-content').appendChild(divLeft);

// Exercício 6
let divRight = document.createElement('div');
divRight.className = 'right-content';
document.querySelector('.main-content').appendChild(divRight);

// Exercício 7
let imgDivLeft = document.createElement('img');
imgDivLeft.src = 'https://picsum.photos/200';
imgDivLeft.className = 'small-image';
document.querySelector('.left-content').appendChild(imgDivLeft);

// Exercício 8
let ulDivRight = document.createElement('ul');
document.querySelector('.right-content').appendChild(ulDivRight);

let arrayValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ];

// Solução que eu cheguei antes, mas que concluí ao entender o chamado da ul e da criação da Li dentro do laço via gabarito!
for (let index = 1; index <= 10; index += 1) {
  let liDivRight = document.createElement('li');
  liDivRight.innerHTML = index;
  ulDivRight.appendChild(liDivRight);
}


// Exercício 9
for (let index = 1; index <= 3; index += 1) {
  let headingMain = document.createElement('h3');
  headingMain.innerHTML = 'Olá' + index;
  divElement.appendChild(headingMain);
}


// SEGUNDA PARTE

// Exercício 1.2
tagH1.className = 'title';

// Exercício 2.2
 elementsH3 = document.querySelectorAll('.main-content h3'); // seguindo a linha de pensamento antes de olhar o gabarito.
 for (let index = 0; index < 3; index += 1) {
   elementsH3[index].className = 'description';
 }

 // Exercício 3.2
 let deleteDivContent = document.querySelector('.left-content');
 divElement.removeChild(deleteDivContent);

 