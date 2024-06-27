const numbers = [
  [10, 20, 30],
  [10, 20, 30],
];

let multipli = [];

for (let c = 0; c < numbers[0].length; c++) {
  let vezes = 1;
  for (let l = 0; l < numbers.length; l++) {
    vezes = vezes * numbers[l][c];
  }
  multipli.push(vezes);
}
console.log(multipli);
