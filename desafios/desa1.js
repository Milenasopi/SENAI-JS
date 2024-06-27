const prompt = require("prompt-sync")();

/*
  Exemplo do Objeto da Tarefa
  {
    id: number,
    tarefa: string,
    marcada: boolean
  }
*/

//marcada - true
//n marcada/finalizada - false

const lista = [];

console.clear();

function mostrarLista() {
  console.log(lista);
}

function adicionarTarefa() {
  let usertarefa = prompt("Qual será a tarefa desse novo id? ");
  lista.push({ id: lista.length + 1, tarefa: usertarefa, marcada: false });
}

function marcarTarefa() {
  let digitado = Number(prompt("Digite o número id que você deseja marcar: "));
  for (let i = 0; i < lista.length; i++) {
    //console.log(i);
    //console.log(lista[i].id);
    if (lista[i].id == digitado) {
      console.log(lista[i].id);
      lista[i].marcada = true;
    }
  }
}

function removerTarefa() {
  let digitado = Number(prompt("Digite o número id que você deseja remover: "));
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id == digitado) {
      lista.splice(i,1)
}

function continuar() {
  prompt.hide("pressione Enter para continuar ...");
}

while (true) {
  console.log(
    `MENU
    1 - ver lista
    2 - adicionar tarefa
    3 - marcar tarefa
    4 - remover tarefa
    5 - encerrar`
  );

  const option = Number(prompt("Digite a opção: "));

  if (option === 5) {
    console.clear();
    console.log("Programa encerrado!");
    break;
  }

  console.clear();

  switch (option) {
    case 1:
      mostrarLista();
      continuar();
      break;
    case 2:
      adicionarTarefa();
      continuar();
      break;
    case 3:
      marcarTarefa();
      continuar();
      break;
    case 4:
      removerTarefa();
      continuar();
      break;
    default:
      console.log("Opção inválida");
      continuar();
  }

  console.clear();
}
