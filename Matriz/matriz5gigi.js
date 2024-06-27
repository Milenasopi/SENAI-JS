const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];

let multipli = [];

for (let l = 0; l < numbers.length; l++) {
  let vezes = 1;
  for (let c = 0; c < numbers[l].length; c++) {
    vezes = vezes * numbers[l][c];
  }
  multipli.push(vezes);
}
console.log(multipli);
