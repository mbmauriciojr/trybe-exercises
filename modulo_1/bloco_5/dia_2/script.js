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
