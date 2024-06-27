const prompt = require("prompt-sync")();
const celsius = Number(prompt("Digite a temperatura em celsius: "));
const fahrenheit = celsius * 1.8 + 32;
console.log("Convertendo em fahrenheit");
console.log(fahrenheit);
