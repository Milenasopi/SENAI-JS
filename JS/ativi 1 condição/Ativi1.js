const prompt = require("prompt-sync")();
const idade = Number(prompt("Digite sua idade: "));

if (idade >= 18) {
  console.log("Apto a dirigir");
} else {
  console.log("Não possui idade o suficiente para dirigir");
}
