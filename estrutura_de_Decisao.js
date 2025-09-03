/*
===========================================================
Arquivo: estruturas_decisao.js
Assunto: Estruturas de Decisão em JavaScript
===========================================================
*/

// -------------------------------
// 1️⃣ IF – decisão simples
// -------------------------------

let idade = 20;

if (idade >= 18) {
  console.log("Maior de idade");
}

// -------------------------------
// 2️⃣ IF / ELSE – dois caminhos possíveis
// -------------------------------

let hora = 14;

if (hora < 12) {
  console.log("Bom dia!");
} else {
  console.log("Boa tarde!");
}

// -------------------------------
// 3️⃣ IF / ELSE IF / ELSE – várias condições
// -------------------------------

let nota = 8;

if (nota >= 9) {
  console.log("Excelente!");
} else if (nota >= 7) {
  console.log("Aprovado!");
} else if (nota >= 5) {
  console.log("Recuperação!");
} else {
  console.log("Reprovado!");
}

// -------------------------------
// 4️⃣ SWITCH / CASE – alternativa ao if/else
// -------------------------------

let diaSemana = 5;

switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira"); // executa esse
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
}

// -------------------------------
// 5️⃣ SWITCH COM AGRUPAMENTO
// -------------------------------

let cor = "roxo";

switch (cor) {
  case "vermelho":
  case "azul":
  case "verde":
    console.log("Cor primária");
    break;
  case "amarelo":
  case "roxo":
  case "laranja":
    console.log("Cor secundária"); // executa esse
    break;
  default:
    console.log("Cor desconhecida");
}

// -------------------------------
// 6️⃣ OPERADOR TERNÁRIO – versão curta do if/else
// -------------------------------

let usuarioIdade = 17;
let acesso = (usuarioIdade >= 18) ? "Permitido" : "Negado";
console.log(acesso);

// -------------------------------
// 🔥 RESUMO FINAL
// -------------------------------

/*
📌 Estruturas de decisão no JS:

- if              → executa se a condição for verdadeira
- if / else       → dois caminhos possíveis
- if / else if    → ideal para faixas de valores
- switch / case   → ideal para opções fixas (ex: dias, cores, menus)
- default         → "else" do switch
- ? : (ternário)  → forma curta do if/else
*/
