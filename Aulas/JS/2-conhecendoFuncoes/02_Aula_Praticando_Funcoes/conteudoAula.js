/* MODIFICAÇÃO DO Exercício 3 da 3 aula dos Primeiros passos */

/* 
  Calcule a compra de um produto e sua forma de pagamento e suas descontos.

  CONDIÇÕES DE PAGTO:
   1 - À VISTA  DÉBITO = 10% de desconto;
   2 - À VISTA DINHEIRO OU PIX = 15% de desconto;
   3 - NO CRÉDITO ATÉ 2 X = Preço da Etiqueta, sem juros;
   4 - ACIMA DE 2 X = Preço normal de etiqueta mais juros de 10%;
*/

/* FUNÇÕES */
function aplicarDesconto(valor, desconto) {
  return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
  return (valor + (valor * (juros / 100)));
}

/* ENTRADAS */
const precoEtiqueta = 100;
let formaPagto = 4;

/* SAIDAS */
if (formaPagto === 1) {
  console.log('Seu produto "X" custa R$' + precoEtiqueta, ' e no débito  tem desconto de 10% e fica por R$' + aplicarDesconto(precoEtiqueta, 10));
} else if (formaPagto === 2) {
  console.log('Seu produto "X" custa R$' + precoEtiqueta, ' e no dinheiro ou pix tem desconto de 15% e fica por R$' +
  aplicarDesconto(precoEtiqueta, 15));
} else if (formaPagto === 3) {
  console.log('Seu produto "X" custa R$' + precoEtiqueta + ', e pode ser parcelado em até 2 vezes sem juros de R$' + (precoEtiqueta / 2));
} else if (formaPagto === 4){
  console.log('Seu produto "X" custa R$' + precoEtiqueta + ', se parcelar acima de 2 vezes tem juros de 5%, totalizando R$' +
  aplicarJuros(precoEtiqueta, 5));
} else {
  console.log('Escolha uma forma de Pagamento Válida!');
}
