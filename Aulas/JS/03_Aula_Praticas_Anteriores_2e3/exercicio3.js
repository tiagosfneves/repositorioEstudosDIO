/* 
  Calcule a compra de um produto e sua forma de pagamento e suas descontos.

  CONDIÇÕES DE PAGTO:
   1 - À VISTA  DÉBITO = 10% de desconto;
   2 - À VISTA DINHEIRO OU PIX = 15% de desconto;
   3 - NO CRÉDITO ATÉ 2 X = Preço da Etiqueta, sem juros;
   4 - ACIMA DE 2 X = Preço normal de etiqueta mais juros de 10%;
*/

/* ENTRADAS */
const precoEtiqueta = 100 /* valor atribuido ao produto */
let formaPagto = 10 /* formas de pagamentos válidas de 1 a 4 */

/* SAIDAS */
if (formaPagto === 1) {
  console.log('Seu produto "X" custa R$' + precoEtiqueta, ' e no débito  tem desconto de 10% e fica por R$' +
      (precoEtiqueta - precoEtiqueta * 0.1)
  )
} else if (formaPagto === 2) {
  console.log('Seu produto "X" custa R$' + precoEtiqueta, ' e no dinheiro ou pix tem desconto de 15% e fica por R$' +
      (precoEtiqueta - precoEtiqueta * 0.15)
  )
} else if (formaPagto === 3) {
  console.log('Seu produto "X" custa R$' + precoEtiqueta + ', e pode ser parcelado em até 2 vezes sem juros.')
} else if (formaPagto === 4){
  console.log('Seu produto "X" custa R$' + precoEtiqueta + ', se parcela acima de 2 vezes tem juros de 5% e fica por R$' +
      (precoEtiqueta + precoEtiqueta * 0.05)
  )
} else {
  console.log('Escolha uma forma de Pagamento Válida!')
}
/* Else sem atributos o sair do escopo é invalidado e essa msg é apresentada */