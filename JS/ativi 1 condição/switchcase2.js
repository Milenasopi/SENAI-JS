const prompt = require("prompt-sync")();
let nota = Number(prompt("Digite sua nota: "));

switch (true) {
  case nota <= 10 && nota >= 7:
    console.log("aprovado");
    break;
  case nota <= 6 && nota >= 4:
    console.log("recuperação");
    break;
  case nota <= 3 && nota >= 0:
    console.log("reprovado");
    break;
}

// poderia ser: switch (nota) {
// case 10:
//... case 7:
//console.log("aprovado")
//break
//****são só 3 case então seria melhor usar o IF
