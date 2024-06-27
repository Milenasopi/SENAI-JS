const prompt = require("prompt-sync")();
let maior;
let menor;

for (let i = 0; i < 5; i++) {
  const numero = Number(prompt("Digite um número: "));

  if (i == 0) {
    menor = numero;
    maior = numero;
  } else {
    if (numero > maior) {
      maior = numero;
    }

    if (numero < menor) {
      menor = numero;
    }
  }
}

console.log("O menor número é:", menor);
console.log("O maior número é:", maior);

//amémmmmmmmmmmmmmmmmm
