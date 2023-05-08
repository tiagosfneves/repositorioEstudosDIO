/* function incremenetarJuros(valor, percentualJuros) {
  const valorDeAcrescimo = (percentualJuros / 100) * valor;
  return valor + valorDeAcrescimo;
}

console.log(incremenetarJuros(100, 10));
console.log(incremenetarJuros(100, 15));
console.log(incremenetarJuros(100, 20)); */  /*  20% de 100 é? */




/* Funcões que antescendem a MAIN */




/* A partir de agora vamos trabalhar com a função MAIN onde tudo acontece */

function calcularIMC(peso, altura) {
  return peso /  Math.pow(altura, 2);
}

function classificarIMC(imc) {
    /* SAIDAS */
  if (imc < 18.5) {
    return `Você está "Abaixo do peso", seu IMC é: `;
  } else if (imc >= 18.5 && imc < 25) {
    return `Você está com "Peso normal", seu IMC é: `;
  } else if (imc >= 25 && imc < 30) {
    return `Você está "Acima do peso", seu IMC é: `;
  } else if (imc >= 30 && imc < 40) {
    return `'Você está classificado como "Obeso", seu IMC é: `;
  } else {
    return `ATENÇÃO! Você está classificado na "Obesidade morbida", seu IMC é: `;
  }
}

/* MAIN de forma SIMPLes */

/* function main() {
  const peso = 63; 
  const altura = 1.73;
  const imc = calcularIMC(peso, altura); 
  console.log(classificarIMC(imc), imc.toFixed(2));

}

main(); */


/* MAIN AUTO EXECUTÁVEL E ANONIMA */

(function () {
  const peso = 63; 
  const altura = 1.73;
  const imc = calcularIMC(peso, altura); 
  console.log(classificarIMC(imc), imc.toFixed(2));

})();

