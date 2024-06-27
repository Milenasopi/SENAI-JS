const carro = {
  marca: "chevrolet",
  modelo: "fusca",
  ano: "2007",
  cor: "azul",
};

carro.cor = "Jacinto";

carro.condicao = "usado acabado";

delete carro.ano;

console.log(carro);
