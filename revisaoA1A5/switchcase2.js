const prompt = require("prompt-sync")();

let episodios = Number(
  prompt("Qual é o número de episódios da sua série/anime? R: ")
);

switch (episodios) {
  case 1:
    episodios <= 1 && episodios >= 10;
    console.log("Série curta");
    break;
  case 2:
    episodios <= 11 && episodios >= 100;
    console.log("Série média");
    break;
  case 3:
    episodios <= 101 && episodios >= 999;
    console.log("Série longa");
    break;
  case episodios <= 1000:
    console.log("One piece!! ODA GÊNIO");
    break;
  default:
    console.log("Não exite besta");
    break;
}
