const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];
let soma = 0;

for (let l = 0; l < numbers.length; l++) {
  for (let c = 0; c < numbers[l].length; c++) {
    soma += numbers[l][c];
    console.log(soma);
  }
}
