const alunos = ['Joao', 'Maria', 'Pedro'];

alunos.push('Renan'); /* o push inclui ma última posição vazia */
alunos[4] = 'Vinicius'; /* Declaro a posição do array que eu quero incluir */

console.log(alunos[1]);

const numeros = [1, 2, 3, 4, 5];

console.log(numeros);

numeros.pop(); /* o push inclui ma última posição vazia */
numeros[3] = 'Vinicius'; /* Declaro a posição do array que eu quero incluir */

console.log(numeros);

console.log(numeros.pop()); /* exclui o último do arrays */

console.log(numeros);

console.log(numeros.shift()); /* exclui o primeiro do arrays */

console.log(numeros);