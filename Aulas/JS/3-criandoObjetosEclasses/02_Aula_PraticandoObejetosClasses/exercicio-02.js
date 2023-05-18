
/*     1 - Crie uma classe para representar pessoas;
    Cada pessoa terá:
     - nome;
     - peso;
     - altura;
    As pessoas informam seu IMC (IMC = peso / (altura * altura));
    INstancie a PESSOA:
    - 'José';
    - 70kg;
    - 1.75m;
    - José deve informar seu IMC;
  
 */


class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    return this.peso / (this.altura * this.altura);    
  }

    classificarIMC() {
      const imc = this.calcularImc();

      if (imc < 18.5) {
        return(`, Você está "Abaixo do peso", seu IMC é: `);
      } else if (imc >= 18.5 && imc < 25) {
        return(`, Você está com "Peso normal", seu IMC é: `);
      } else if (imc >= 25 && imc < 30) {
        return(`, Você está "Acima do peso", seu IMC é: `);
      } else if (imc >= 30 && imc < 40) {
        return(`', Você está classificado como "Obeso", seu IMC é: `);
      } else {
        return(`, ATENÇÃO! Você está classificado na "Obesidade morbida", seu IMC é: `);
      }
    }
  }


const kiara = new Pessoa('Kiara', 63, 1.58);
console.log(kiara.nome, kiara.classificarIMC(), kiara.calcularImc());
const tiago = new Pessoa('Tiago', 60, 1.70);
console.log(tiago.nome, tiago.classificarIMC(), tiago.calcularImc());
const pierry = new Pessoa('Pierry', 60, 1.67);
console.log(pierry.nome, pierry.classificarIMC(), pierry.calcularImc());
const victor = new Pessoa('Victor', 60, 1.66);
console.log(victor.nome, victor.classificarIMC(), victor.calcularImc());