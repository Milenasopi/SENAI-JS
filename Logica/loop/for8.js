const prompt = require("prompt-sync")();
let numero = prompt("Digite um número e descubra se é primo: ");
let i = 1;

for (; i <= numero; i++) {
  if (numero % i == 0) {
    i++;
    console.log(numero, i);
  }
}

if (i == 2) {
  console.log("É primo!");
} else {
  console.log("Não é primo");
}

//aparecer todos os numeros que a VAR é divisível
