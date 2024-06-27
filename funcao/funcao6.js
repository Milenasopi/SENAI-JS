//A função deve gerar um número aleatório e usar o número do parâmetro como valor máximo de aleatoriedade.
//y = valor máx de aleatoriedade
function maior(x, y) {
  y = 24;
  x = Math.floor(Math.random() * 100); //0 a 99

  if (x < y) {
    console.log(x);
  } else if (x < y) {
    console.log("Infelizmente o valor sorteado passou do parâmetro");
  }
}

//Math.floor(Math.random() * 24) + 1

//corrigir
//if (x < y) {
//   console.log("O valor sorteado não passou do parâmetro, está correto");
//} else if (x < y) {
//  console.log("Infelizmente o valor sorteado passou do parâmetro");
// }
