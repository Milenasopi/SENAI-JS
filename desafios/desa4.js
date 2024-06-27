const prompt = require("prompt-sync")();

const dicionario = {
  relação:
    "vinculação de alguma ordem entre pessoas, fatos ou coisas; ligação, conexão, vínculo.",
  semelhança: "comparação entre duas coisas; confronto, cotejo, paralelo.",
  aleatório:
    "que depende das circunstâncias, do acaso; casual, fortuito, contingente.",
  incerteza: "falta de certeza; dúvida, hesitação, indecisão, imprecisão.",
  for: "expressão que remete a facilidade; mais fácil impossível.",
};

//1. oferecer opção para o usuário pesquisar uma palavra no dicionário ou inserir uma palavra no dicionário
let escolha = prompt(
  "Olá, você deseja procurar palavra ou adiciona-la no dicionário? "
);
let palavrauser;
if (escolha === "procurar") {
  palavrauser = prompt("Digite a palavra que você deseja buscar: ");
  if (palavrauser === dicionario) {
    console.log(dicionario.palavrauser);
  } else if ("Essa palavra não foi encontrada no dicionário");
}
if (escolha === "adicionar") {
  palavrauser = prompt("Digite a palavra que você deseja adicionar: ");
  let significadouser = prompt(
    "Agora, digite o significado referente a palavra: "
  );
  dicionario.palavrauser = significadouser;
}

//2. receber opção e realizar ação conforme opção selecionada
//3. pesquisar palavra no objeto dicionário e retornar significado
//4. inserir o conjunto da palavra e significado no dicionário
//5. exibir resultado de cada ação realizada
//6. perguntar se o usuário deseja realizar mais alguma operação: caso queira, recomeçar o processo.
