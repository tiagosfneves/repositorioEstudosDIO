/* 
  Estruturas condicionais, boolean: true or false, 
*/

/* se eu colocar numero par ou impar interfere no resultato */
const numero = 02; /* Trocando este valor ele altera o resultado na tela */

/* % apresenta a sobra da conta,  que classifica o número como par ou impar*/
/* const eNumPar = numero % 2;  */


/* CONDICIONAL BÁSICA */

/* 3 sinais de = = = or = = (compara igualdade entre X e Y),  */
const eNumPar = (numero % 2) === 0; 


/* console.log(eNumPar);

if (eNumPar) {
  console.log("Executei");

}
 */

/* CONDICIONAIS BÁSICAS COM IF, ELSE IF  E  ELSE */


if (numero === 0) {
  console.log("zERO É PAR OU IMPAR?");

} else if (eNumPar) {
  console.log("par");

} else {
  console.log("impar");

}


