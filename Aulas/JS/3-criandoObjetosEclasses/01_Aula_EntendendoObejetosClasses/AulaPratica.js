/*
    CLASSE,  estrutura
*/

class Pessoa {
  nome;
  idade;
  anoDeNascimento;


  constructor(nome, idade, anoDeNascimento) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;

  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}, eu nasci no ano ${this.anoDeNascimento}.`);
  }
}

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
  }
}

const tiago = new Pessoa('Tiago', 36);
const kiara = new Pessoa('Kiara', 30);

compararPessoas(tiago, kiara);