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

const tiago = new Pessoa('tiago', 36);
console.log(tiago);


/* MODO DE CHAMAR O CONSTRUTOR NA CLASSE

const tiago = new Pessoa();
tiago.nome = 'Tiago Neves';
tiago.idade = 36;
tiago.cidade = 'São Paulo';

const Kiara = new Pessoa();
Kiara.nome = 'Kiara Neves';
Kiara.idade = 30;
Kiara.cidade = 'São Paulo';

tiago.descrever();
Kiara.descrever(); */



