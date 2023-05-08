/* 
    1 - Crie uma classe para representar carros;
    Os carros possuem:
     - marca;
     - cor;
     - gasto médio de combustivel por KM;
    Crie um METODO que
    - dado a QTD de KM
    - e o preço de combustivel
    - nos dê o valor gasto em reais para realizar este percurso;
*/

class Carro {
  marca;
  cor;
  consumoMedioPorKm;

  constructor(marca, cor, consumoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.consumoMedioPorKm = consumoMedioPorKm;
  }

  calcularConsumoTotalDaViagem(distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.consumoMedioPorKm * precoCombustivel;
  }
}

const x3 = new Carro('BMW', 'Azul', 1/12);
console.log(x3.calcularConsumoTotalDaViagem(70, 5));
const brasilia = new Carro('VW', 'Amarelo', 1/8);
console.log(brasilia.calcularConsumoTotalDaViagem(70, 5));