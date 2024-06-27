const prompt = require("prompt-sync")();
let i = 1;
let maior = Number(prompt("Digite 10 números e descubra o maior e menor: "));
let menor = maior;

while (i < 10) {
  const n = Number(prompt("Digite 10 números e descubra o maior e menor: "));
  if (n > maior) {
    maior = n;
  }

  if (n < menor) {
    menor = n;
  }
  i++;
}

console.log("O menor número é ", menor);
console.log("O maior número é ", maior);
