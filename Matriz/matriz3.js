const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];

let coluna;

for (let linha = 0; linha < numbers.length; linha++) {
  for (coluna = 0; coluna < numbers[linha].length; coluna++) {
    console.log(numbers[linha][coluna]);
  }
}
