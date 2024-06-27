function maior(x, y) {
  if (x > y) {
    console.log(x, "é maior");
  }
  if (x < y) {
    console.log(y, "é maior");
  }
}

const numeros = maior((x = 4), (x = 8));
