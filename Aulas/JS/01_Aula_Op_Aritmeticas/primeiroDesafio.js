/* 
  Calcular distancia;
  Preço do combustivel;
  Média de consumo;
  Media de gasto para uma viagem "X"
*/

const valorEtanol = 4.99;
let consumoKmPorLitro = 15;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / consumoKmPorLitro;
const valorGastoNaViagem = litrosConsumidos * valorEtanol;

console.log('Total de litros gastos: ', litrosConsumidos.toFixed(2), 'e Total gasto em dinheiro: ', valorGastoNaViagem.toFixed(2));
