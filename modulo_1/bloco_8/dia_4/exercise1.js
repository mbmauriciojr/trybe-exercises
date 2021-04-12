// Dada uma matriz de matrizes, transforme em uma única matriz. 

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const flatArray = arrays.reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);
  return flatArray;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// console.log(flatten());

// Aprendi aqui o uso do concat para unir dois arrays