const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];

numbers.push([5, 4, 2]);
console.log(numbers);

numbers.unshift([1, 2, 3]);

console.log("Tirou o último adicionado: ", numbers.pop([2]));

console.log("Tirou o primeiro", numbers.shift());
