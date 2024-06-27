let arr = [];

arr.push(1, 2, 3, 4, 5);

console.log(arr, arr.length);

for (let i = 0; i <= 3; i++) {
  {
    arr.pop();
    console.log(arr);
  }
  i++;
}
