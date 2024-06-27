const prompt = require("prompt-sync")();
let ano = Number(prompt("Digite o ano escolhido: "));

let resto = ano % 4 && ano % 400;

if (resto == 0) {
  console.log("É um ano bissexto");
} else {
  console.log("É um ano comum");
}

// correção: if(ano % 4 || ano % 100 != 0)
