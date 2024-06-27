const prompt = require("prompt-sync")();

function processo() {
  function soma(x, y) {
    return x + y;
  }

  function subtracao(x, y) {
    return x - y;
  }

  function multipli(x, y) {
    return x * y;
  }

  function divisao(x, y) {
    return x / y;
  }

  x = Number(prompt("Digite um número: "));
  y = Number(prompt("Digite o segundo número: "));

  let operacao = prompt("Escolha a operação matemática desejada: ");

  let resultado;

  if (operacao === "soma") {
    resultado = soma(x, y);
  }
  if (operacao === "subtracao") {
    resultado = subtracao(x, y);
  }
  if (operacao === "multiplicação") {
    resultado = multipli(x, y);
  }
  if (operacao === "divisão") {
    resultado = divisao(x, y);
  }

  console.log(resultado);
}

processo();
//3. exibir o resultado
//4. perguntar se o usuário deseja realizar mais alguma operação: caso queira, recomeçar o processo.

let repetirouNao = prompt("Mano, vai querer repetir? ");
if (repetirouNao === "sim") {
  processo();
} else {
  console.log("Programa encerrado mo! ");
}
