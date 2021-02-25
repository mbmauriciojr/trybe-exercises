let salarioBruto = 3000;
let inss;
let aliquota;
let parcelaIr;
let ir;
let salarioBase;
let salarioLiquido;

if (salarioBruto <= 1556.94){
  inss = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
  inss = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82){
  inss = 570.88;
}

console.log(inss);

salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98){
  aliquota = 0;
  parcelaIr = 0;
  console.log('Isento de imposto de renda'); 
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
  aliquota = 0.075;
  parcelaIr = 142.80;
  console.log('A alíquota é de',aliquota,'. E a parcela do IR é de:',parcelaIr); 
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
  aliquota = 0.15;
  parcelaIr = 354.80;
  console.log('A alíquota é de',aliquota,'. E a parcela do IR é de:',parcelaIr); 
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
  aliquota = 0.225;
  parcelaIr = 636.13;
  console.log('A alíquota é de',aliquota,'. E a parcela do IR é de:',parcelaIr); 
} else if (salarioBase > 4664.68){
  aliquota = 0.275;
  parcelaIr = 869.36;
  console.log('A alíquota é de',aliquota,'. E a parcela do IR é de:',parcelaIr); 
}

ir = (salarioBase * aliquota) - parcelaIr;
console.log('O valor do IR é:',ir,'!');

salarioLiquido = salarioBase - ir;
console.log('O seu salário líquido é de: R$',salarioLiquido,'.');

