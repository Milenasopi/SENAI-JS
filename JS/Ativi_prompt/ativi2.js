const prompt = require("prompt-sync")();
let nota1 = Number(prompt("Digite sua primeira nota: "));
let nota2 = Number(prompt("Digite sua segunda nota: "));
let nota3 = Number(prompt("Digite sua terceira nota: "));

let resultado = (nota1 + nota2 + nota3) / 3;
console.log(resultado);
