// Cria um programa que liste e imprima os pares da lista de numeros de array

const numeros = [0,101,21,301,41,50,61,701,81,901,10];
// lista de array

for (let i = 0; i < numeros.length; i++) {
  // iniciara à partir de 0 (zero)
  
  const numero = numeros[i];

  if (numero % 2 === 0) {
    console.log(numero);
  } 
}
