let arr = ["amora", "ameixa", "abacate"];

arr.unshift("banana", "bergamota");

console.log(arr, arr.length);

for (let i = 0; i <= 3; i++) {
  {
    arr.shift();
    console.log(arr);
  }
  i++;
}
