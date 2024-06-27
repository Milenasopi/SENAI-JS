const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome: ");
const idade = prompt("Digite sua idade: ");
const email = prompt("Digite seu email: ");

console.group(nome, idade, email);
