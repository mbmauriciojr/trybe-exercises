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

