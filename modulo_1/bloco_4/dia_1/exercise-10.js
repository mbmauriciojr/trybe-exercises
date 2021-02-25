let custoProduto = 1000;
let valorVenda = 2000;
let lucro;
let custoTotal;
let impostoProduto;
let valor1000;

impostoProduto = custoProduto * 0.20;

custoTotal = custoProduto + impostoProduto;

console.log(custoTotal);

lucro = valorVenda - custoTotal;

console.log(lucro);

if (custoProduto < 0 || valorVenda < 0){
  console.log('O produto ou o seu valor de venda está incorreto');
} else {
  valor1000 = lucro * 1000;
  console.log('A venda de 1000 produtos resultará em:',valor1000,' de lucro');
}
