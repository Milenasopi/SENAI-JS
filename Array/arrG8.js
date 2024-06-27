const numbers = [5, 2, 1, 2, 3, 4, 2, 5, 1, 6, 3, 6, 2, 1];

numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
numbers.splice(1, 2);
console.log(numbers);
numbers.splice(3, 3);
console.log(numbers);
numbers.splice(1, 1);
console.log(numbers);
numbers.splice(4, 1);
console.log(numbers);
numbers.pop();
console.log(numbers);

//INDEX OF E LENGTH

//console.log(numbers.indexOf(1));
//console.log(numbers);

//for (let i = 0; i < numbers.length; i++) {
// if
//}

//sort(function(a, b) { return a - b; }); console. log(numeros)

//indexOF
//if
//splice

//console.log(indexof(0, 1, 2, 3, 4, 6));
