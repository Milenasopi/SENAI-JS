let prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número maior que 0:"));

for (let i = 1; i <= numero; i++) {
  console.log(i);
}
