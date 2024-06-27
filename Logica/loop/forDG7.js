const prompt = require("prompt-sync")();
let x = 0; //espaço e asterisco

let niveis = Number(
  prompt("Digite um número para formar a altura de um triângulo: ")
);

for (let i = 1; i <= niveis; i++) {
  console.log(" ".repeat(niveis - x), "*".repeat(i + x));
  x++;
}

//(o que quer repetir).repeat(tanto de vezes q quer repetir)
