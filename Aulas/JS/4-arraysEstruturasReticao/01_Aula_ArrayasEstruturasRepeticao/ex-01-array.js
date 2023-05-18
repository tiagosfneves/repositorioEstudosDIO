const notas = [];

notas.push(8);
notas.push(10);
notas.push(9);
notas.push(10);
notas.push(7);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);

/*
  Esse código faz a média automaticamente de forma organica,
  Mesmo que mude os valores, inclua ou exclua algum valor
*/