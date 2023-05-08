/*
    OBJETO LITERAL,
    OBJETO  no JS é uma coleção dinâmica(add e remover 'valores')
    de chave {} e valores nome, idade...
*/

const pessoa = {
  /* decalração de variavéis desse objeto (pessoa) */
  nome: 'Tiago S F Neves',
  idade: 36,
  cidade: 'São Paulo',

  /* FUNÇÃO  dentro de um OBJETO é uma METODO */
  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}, eu moro em ${this.cidade}.`);
    /* USO DA CRASE ` ` habilita usar string com ${} para inserir os valores do objeto na METODO(tipo função). */
  }

}

/* ACESSOS DIRETO */
/* MUDANDO o OBJETO */
pessoa.nome = 'Kiara';
pessoa.idade = 30;
pessoa.cidade = 'Jandira';

/* console.log(pessoa.nome, pessoa.idade, pessoa.cidade, pessoa); IMPRIME NA TELA a CONSt e seus VALORES */
pessoa.descrever();



