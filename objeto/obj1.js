const pessoa = {
  nome: "Xilfe chan",
  idade: 51,
  profissao: "cozinheiro da liberdade",
  pais: "Brasil",
};

pessoa.profissao = "vendedor da shopee";
pessoa.email = "Xilfegostosao@gmail.com";

delete pessoa.pais;

console.log(pessoa);
