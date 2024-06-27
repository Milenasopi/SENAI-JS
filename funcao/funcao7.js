//Crie uma função que receba uma array como parâmetro e retorne a soma de todos os números da array.

arr = [1, 2, 3, 4, 5];

function somando(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma = soma + arr[i];
  }

  return soma;
}

console.log(somando(arr));
