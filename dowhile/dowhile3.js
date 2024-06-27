let i = 0;
const prompt = require("prompt-sync")();
let maior;
let menor;

do {
  const Nuser = Number(prompt("Digite 10 números: "));

  if (i == 0) {
    maior = Nuser;
    menor = Nuser;
  } else {
    if (Nuser > maior) {
      maior = Nuser;
    }

    if (Nuser < menor) {
      menor = Nuser;
    }
  }
  i++;
} while (i < 10);

console.log("O maior número é:", maior);
console.log("O menor número é:", menor);
