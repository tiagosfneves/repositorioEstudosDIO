// Essa linha de código chama as funções de outro arquivo para operar aqui dentro
const { gets, print } = require('./eXfuncoesAuxiliares');

/* com os print e gets dessa forma imprime item a item do array */
/* print(gets());
print(gets());
print(gets());
print(gets());
print(gets());
print(gets()); */


// Esse código executa o maior numero do array

/* const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
  const numerosSorteado = gets();
  numerosSorteados.push(numerosSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
  const numerosSorteado = numerosSorteados[i];
  
  if (numerosSorteado > maiorValor) {
    maiorValor = numerosSorteado;
  }
}

print(maiorValor); */


// Esse cósigo é mais simples que o anterior e faz a mesma coisa

/* let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i++) {
  const numerosSorteado = gets();
    
  if (numerosSorteado > maiorValorEncontrado) {
    maiorValorEncontrado = numerosSorteado;
  }
}

print(maiorValorEncontrado); */


// Esse código faz a mesma coisa só que de forma organica

const quantidadeDeAlunos = gets(); //incluido essa variavel e no laço 'For'
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
  const numerosSorteado = gets();
    
  if (numerosSorteado > maiorValorEncontrado) {
    maiorValorEncontrado = numerosSorteado;
  }
}

print(maiorValorEncontrado);