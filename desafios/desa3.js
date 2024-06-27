const prompt = require("prompt-sync")();

const cambioMoedas = {
  dolar_us: {
    nome: "Dólar Americano",
    codigo: "USD",
    valor_em_real: 5.4,
  },
  euro: {
    nome: "Euro",
    codigo: "EUR",
    valor_em_real: 6.52,
  },
  libra: {
    nome: "Libra Esterlina",
    codigo: "GBP",
    valor_em_real: 7.42,
  },
  iene: {
    nome: "Iene Japonês",
    codigo: "JPY",
    valor_em_real: 0.049,
  },
  dolar_au: {
    nome: "Dólar Australiano",
    codigo: "AUD",
    valor_em_real: 4.14,
  },
};

function processo() {
  //Faça uma aplicação que converta um valor em **BRL** (Real Brasileiro) em outras moedas estrangeiras.

  //Crie uma função que tenha como parâmetro o valor em **BRL** e o
  //valor da moeda estrangeira selecionada pelo usuário, realizar o cálculo e retornar o resultado.

  //**A aplicação deve:**

  //1. receber um valor em **BRL** do usuário
  let real = Number(
    prompt("Digite a quantidade de reais que você deseja converter: ")
  );
  function conversao() {
    return real * valor_em_real; ///TENTAR USAR
  }
  //2. apresentar as opções de moedas para conversão e receber uma escolha do usuário
  //3. baseado na escolha, realizar o cálculo da conversão

  console.log(cambioMoedas);
  let escolha = prompt(
    "Escolha entre as opções de moedas para converter, use o código: "
  );

  if (escolha === "USD") {
    function usd() {
      return real * 5.4;

      usd();
      const resultado = usd;
      console.log(resultado),
        console.log(escolha),
        console.log(cambioMoedas.valor_em_real[0]);
    }
  }
  if (escolha === "EUR") {
    function eur() {
      return real * 6.52;

      eur();
      const resultado = eur;
      console.log(resultado),
        console.log(escolha),
        console.log(cambioMoedas.valor_em_real[1]);
    }
  }
  if (escolha === "GBP") {
    function gbp() {
      return real * 7.42;
    }

    gbp();
    const resultado = gbp;
    console.log(resultado),
      console.log(escolha),
      console.log(cambioMoedas.valor_em_real[2]);
  }
  if (escolha === "JPY") {
    function jpy() {
      return real * 0.049;

      jpy();
      const resultado = jpy;
      console.log(resultado),
        console.log(escolha),
        console.log(cambioMoedas.valor_em_real[3]);
    }
  }
  if (escolha === "AUD") {
    function aud() {
      return real * 4.14;
    }

    aud();
    const resultado = aud;
    console.log(resultado),
      console.log(escolha),
      console.log(cambioMoedas.valor_em_real[4]); //arrumarrr
  }
  //4. exibir o resultado, o nome da moeda convertida e o valor de câmbio atual desta moeda.;
  //5. perguntar se o usuário deseja realizar mais alguma operação: caso queira, recomeçar o processo.
}

processo();

let repetir = prompt("Quer repetir o processo? ");
if (repetir === "sim") {
  processo();
} else {
  console.log("Programa encerrado, bye bye tchau tchau ");
}
