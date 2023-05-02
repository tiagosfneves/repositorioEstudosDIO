/* 
  Calcule a média IMC {  imc = peso / (altura * altura)  }

  CALCULE peso e altura de um adulto, conforme tabela abaixo:
  IMC em adultos CONDIÇÃO:
   - Abaixo de 18.5 = Abaixo do peso;
   - Entre de 18.5 e 25 = Peso normal;
   - Entre de 25 e 30 = Acima do peso;
   - Entre de 30 e 40 = Obeso;
   - Acima de 40 = Obesidade morbida;
*/

/* ENTRADAS */
const peso = 63 /* alternando entre 65, 75, 85, 95 e 120 obterá o print de cada um dos níveis do IMC */
const altura = 1.73
const imc =
  peso /
  Math.pow(altura, 2) /* math(metodo) pow(potencia da 'altura' ao quadrado) */

console.log(imc.toFixed(2))

/* SAIDAS */
if (imc < 18.5) {
  console.log('Você está "Abaixo do peso", seu IMC é: ', imc.toFixed(2))
} else if (imc >= 18.5 && imc < 25) {
  console.log('Você está com "Peso normal", seu IMC é: ', imc.toFixed(2))
} else if (imc >= 25 && imc < 30) {
  console.log('Você está "Acima do peso", seu IMC é: ', imc.toFixed(2))
} else if (imc >= 30 && imc < 40) {
  console.log(
    'Você está classificado como "Obeso", seu IMC é: ',
    imc.toFixed(2)
  )
} else {
  console.log(
    'ATENÇÃO! Você está classificado na "Obesidade morbida", seu IMC é: ',
    imc.toFixed(2)
  )
}
