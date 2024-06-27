const prompt = require("prompt-sync")();

let arr = [];

for (let i = 1; i <= 5; i++) {
  let nome = prompt("Digite seu nome: ");
  let obj = {
    id: i,
    nomeobj: nome,
  };
  arr.push(obj);
}

console.log(arr);
