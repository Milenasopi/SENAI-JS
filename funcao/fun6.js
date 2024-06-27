//Math.floor(Math.random() * 24) + 1

function maior(x, y) {
  y = 24;
  x = Math.floor(Math.random() * 24) + 1; //1 a 24

  if (x <= y) {
    console.log(x);
  } else if (x > y) {
    console.log("Infelizmente o valor sorteado passou do parâmetro");
  }
}

maior(24, 5);
