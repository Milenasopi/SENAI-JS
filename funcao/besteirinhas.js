const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");

function cumprimentar() {
  console.log("Olá migão", nome);
}

cumprimentar();
