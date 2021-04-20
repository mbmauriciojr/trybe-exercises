// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random()* 11);

//   if (number <= 5) {
//     return reject(number);
//   }
//   resolve(number);
// })
// .then(number => `Que sucesso =) nosso número foi ${number}`)
// .then(msg => console.log(msg))
// .catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));




var arr = [ 'lions', 'bears', 'elephants' ] // ['elephants', 'bears', 'lions']
arr.push(arr.splice(arr.indexOf('lions'), 1)[0]) && arr.push(arr.splice(arr.indexOf('bears'), 1)[0]);
console.log(arr); 


var arr = [ 'lions', 'bears', 'elephants' ]; // ['elephants', 'bears', 'lions']
arr[2] = arr[0] && arr
console.log(arr); 



const object = {
  'Nigel Nelson': ['lions', 'tigers'],
  'Burl Bethea': ['lions', 'tigers', 'bears', 'penguins'],
  'Ola Orloff': ['otters', 'frogs', 'snakes', 'elephants'],
  'Wilburn Wishart': ['snakes', 'elephants'],
  'Stephanie Strauss': ['giraffes', 'otters'],
  'Sharonda Spry': ['otters', 'frogs'],
  'Ardith Azevado': ['tigers', 'bears'],
  'Emery Elser': ['elephants', 'bears', 'lions']
};

console.log(Object.keys(object));
console.log(object['Stephanie Strauss'])
console.log(['Stephanie Strauss'].value)


var arr = [ 'lions', 'bears' ]; // ['elephants', 'bears', 'lions']
arr.reverse();
console.log(arr); 