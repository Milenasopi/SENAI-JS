const prompt = require("prompt-sync")();
let nota1 = Number(prompt("Digite sua primeira nota: "));
let nota2 = Number(prompt("Digite sua segunda nota: "));
let nota3 = Number(prompt("Digite sua terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;

if (media < 4) {
  console.log("Reprovado");
} else if (media >= 4 && media <= 7) {
  console.log("Recuperação");
} else {
  console.log("Aprovado");
}

//na inha 10 poderia ser só o "media <= 7"
