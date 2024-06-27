const prompt = require("prompt-sync")();

const Nuser = Number(prompt("Digite um número e descubra seu fatorial: "));

let i = 1;
let fatorial = 1;

do {
  if (i == 1) {
    fatorial = Nuser * (Nuser - i);
  }
  if (i != 1) {
    fatorial = fatorial * (Nuser - i);
  }

  i++;
} while (i < Nuser);

//n!=n⋅(n−1)⋅(n−2)...

console.log("O resultado da fatorial", Nuser, "é: ", fatorial);

//do{
//3! = 3*i*i
//}while (i<3)

//n = n*operacao

//fatorial = operacao * Nuser
