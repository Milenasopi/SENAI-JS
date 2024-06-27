//todas expressões

for (let i = 1; i < 10000; i = i * 2) {
  console.log(i);
}

//inicializador usando uma VAR já criada
let i = 0;
for (i; i < 10; i++) {
  console.log(1);
}

//ou

let i = 0;
for (; i < 10; i++) {
  console.log(1);
}

//condição
for (let i = 0; ; i++) {
  if (i > 10) {
    break;
  }
}

//sem a expressão final
// para o numero n ser fixo
for (let i = 0; i < 10; ) {
  if (i < 5) {
    i++;
  } else {
    i += 2;
  }
}
// i += 2 (i = i +2) aumenta 2

//sem nada - loop infinito
let i = 0;
for (;;) {
  i++;
  if (i == 10) {
    break;
  }
}
