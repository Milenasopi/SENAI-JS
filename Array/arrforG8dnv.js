const numbers = [5, 2, 1, 2, 3, 4, 2, 5, 1, 6, 3, 6, 2, 1];
numbers.sort();

for (let i = 0; i < numbers.length; i++) {
  if (numbers.indexOf(numbers[i]) != i) {
    numbers.splice(i, 1);
    i = i - 1;
  }
}

console.log("Organizado: ", numbers);
//

//
//numbers.sort();
//console.log("Organizando", numbers);

//GIGI
//numbers.splice(i, i);
//numbers.sort();
//console.log("Dando um sort e organizando: ", numbers);

//lenght, index of, splice, sort
