/* 
  CALCULA MÉDIA DO ALUNO com base em 3 notas e imprima a nota, conforme tabela:
  Média = (nota 1 + nota 2 + nota 3) / 3;

  Classificação
  Mèdia menor q 5 = reprovado;
  Mèdia entre 5 e 7 = recuperação;
  Mèdia acima de 7 = aprovado;
*/

const nota1 = 1;
const nota2 = 5;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  console.log('Parabéns. Aprovado, sua Média é: ' + media.toFixed(2));
}  else if (media >= 5 && media <=7) {
  console.log('Atenção. Ficou de recuperação, Média é: ' + media.toFixed(2));
} else {
  console.log('Atenção. Reprovado, sua Média é: ' + media.toFixed(2));
}