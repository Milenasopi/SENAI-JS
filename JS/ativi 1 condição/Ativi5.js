const prompt = require("prompt-sync")();
let salario = Number(prompt("Digite seu salário: "));

if (salario <= 2112.0) {
  console.log("Isento");
} else if (salario >= 2112.01 && salario <= 2826.65) {
  let imposto = (salario * 7.5) / 100;
  console.log("(salário * 7.5)/100 =", imposto);
} else if (salario >= 2826.66 && salario <= 3751.05) {
  let imposto = (salario * 15) / 100;
  console.log("(salário * 15)/100 =", imposto);
} else if (salario >= 3751.06 && salario <= 4664.68) {
  let imposto = (salario * 22.5) / 100;
  console.log("(salário * 22.5)/100 =", imposto);
} else if (salario >= 4664.68) {
  let imposto = (salario * 27.5) / 100;
  console.log("(salário * 27.5)/100 =", imposto);
}
