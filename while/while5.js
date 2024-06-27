const prompt = require("prompt-sync")();

const nome = "Milena";
const senha = "1234";
let i = 0;

while (true) {
  let nomeusu = prompt("Digite seu nome: ");
  let senhausu = prompt("Digite sua senha: ");

  if (nome == nomeusu && senha == senhausu) {
    console.log("Login realizado com sucesso mano!");
    break;
  } else {
    console.log("Os dados estão incorretos. Quer roubar essa conta? ");
  }
}
