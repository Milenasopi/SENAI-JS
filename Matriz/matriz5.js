const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];

let multipli = 1;

for (let l = 0; l < numbers.length; l++) {
  for (let c = 0; c < numbers[l].length; c++) {
    if ((l = numbers[l][c])) {
      multipli = multipli * numbers[0];
      console.log("l1 ", multipli);
    }
    if ((l = numbers[l][c])) {
      multipli = multipli * numbers[1];
      console.log("l2 ", multipli);
    }
  }
}
