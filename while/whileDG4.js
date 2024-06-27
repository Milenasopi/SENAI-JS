let e = 10; //espaço
let faces = 20;
let i = 0;

while (true) {
  i++;
  let r = Math.random() * faces;
  const d = Math.ceil(r);

  if (d == 1) {
    e = e - 1;
  }
  if (d <= 2 && d >= 11) {
    e = e;
  }
  if (d <= 12 && d >= 19) {
    e = e + 1;
  }
  if (d == 20) {
    e = e + 10;
  }

  console.log("Seu dado foi:", d);

  if (e >= 10) {
  }
  console.log("Você chegou no final com", i, "iterações");
  break;
}
