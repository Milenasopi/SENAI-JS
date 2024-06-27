const arr = [
  [12, -8, 15, 6],
  [1, 6, 20, -9],
  [0, -4, 0, -8],
  [-1, 6, 0, 15],
];

for (let l = 0; l < arr.length; l++) {
  let c1 = l; //0 mas a cada iteração adiciona 1;
  console.log(arr[l][c1], arr[l][arr[arr.lenght - 1 - l]]);
}
//arrumar e term
