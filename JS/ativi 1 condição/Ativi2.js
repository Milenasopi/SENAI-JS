const prompt = require("prompt-sync")();
const usuario_fixo = "Milena";
const senha_fixa = "1234";
let nome_usuario = prompt("Usuário: ");
let senha_usuario = Number(prompt("Senha: "));

if (usuario_fixo !== nome_usuario) {
  console.log("usuário incorreto");
} else {
  console.log("Usuário correto");
}

if (senha_fixa == senha_usuario) {
  console.log("acesso liberado");
} else {
  console.log("acesso negado");
}
