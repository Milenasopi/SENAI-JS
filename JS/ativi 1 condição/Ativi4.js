const prompt = require("prompt-sync")();
const direcao = prompt("Para que direção você irá dirigir? ");

if (direcao == "Para frente") {
  console.log("Frente");
} else if (direcao == "Para trás") {
  console.log("Para trás");
} else if (direcao == "Direita") {
  console.log("Para a direita");
} else if (direcao == "Esquerda") {
  console.log("Para esquerda");
}
