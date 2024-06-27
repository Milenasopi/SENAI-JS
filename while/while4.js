const prompt = require("prompt-sync")();
const n = 4;

while (true) {
  let N_usuario = Number(
    prompt("Digite um valor maior que zero e maior ou igual a 100: ")
  );

  if (N_usuario == n) {
    console.log("Parabéns, você acertou o número!!");
    break;
  }
  if (N_usuario < n) {
    console.log("É maior!");
  }
  if (N_usuario > n) {
    console.log("É menor!");
  }
}

//!!!!!!!
