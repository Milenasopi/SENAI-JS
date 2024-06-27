const prompt = require("prompt-sync")();
let peso = prompt("Digite o peso do caminhão em kg: ").trim();

switch (true) {
  case peso >= "1000 kg" && peso <= "3999 kg":
    console.log("caminhão de pequeno porte");
    break;
  case peso >= "4000 kg" && peso <= "6000 kg":
    console.log("caminhão de médio porte");
    break;
  case peso > "6000 kg":
    console.log("caminhão de grande porte");
    break;
}
