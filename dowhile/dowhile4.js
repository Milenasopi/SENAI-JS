const prompt = require("prompt-sync")();
let i = 1;
let contador = 0;

const Nuser = Number(prompt("Digite números e descubra se é primo: "));

//primo só divide por 2 condições

do {
  if (Nuser % i == 0) {
    contador++;
  }
  i++;
} while (i <= contador);

if (contador == 2) {
  console.log("O numéro", Nuser, "é primo!!");
} else {
  console.log("O número", Nuser, "não é primo.");
}

///ainda ta dando errado

//do {
//if (Nuser % i == 0 && Nuser % Nuser == 0) {
// contador++;
// }
// if (contador == 2) {
//  console.log("O numéro", Nuser, "é primo!!");
//} else console.log("O número", Nuser, "não é primo.");
//} while (contador >= 2);

//if (Nuser % Nuser == 0 && Nuser % 1 == 0) {
// console.log("O numéro", Nuser, "é primo!!");
//} else if (console.log("O número", Nuser, "não é primo."));

//if(contador == 2){
// a
//}else if {
// a
//}
//
//i <= contador;

//if (Nuser % i == 0) {
// contador++;
//}
