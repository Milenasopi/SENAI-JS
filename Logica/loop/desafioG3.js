const prompt = require("prompt-sync")();
let y = 0;
let media;

for (let i = 0; i < 10; i++) {
  const numerousua = Number(prompt("Digite um número maior que 0: "));
  {
    y = y + numerousua;
    media = y / 10;
  }
}

console.log(media);
