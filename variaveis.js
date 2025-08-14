/*
===========================================================
Arquivo: variaveis.js
Assunto: Diferença entre var, let e const em JavaScript
===========================================================
*/

// -------------------------------
// 1️⃣ VAR – O veterano (pré-ES6)
// -------------------------------

// Escopo de função (não respeita blocos como if, for, etc.)
if (true) {
  var exemploVar = "Sou var!";
}
console.log(exemploVar); // "Sou var!" - escapa do bloco

// Redeclaração permitida
var exemploVar = "Var redeclarado!";
console.log(exemploVar); // "Var redeclarado!"

// Hoisting (içamento)
console.log(varAntes); // undefined (foi içado)
var varAntes = "Fui declarado depois";

// -------------------------------
// 2️⃣ LET – O substituto seguro (ES6+)
// -------------------------------

if (true) {
  let exemploLet = "Sou let!";
  console.log(exemploLet); // "Sou let!"
}
// console.log(exemploLet); // ❌ Erro: exemploLet não está definido

// Redeclaração no mesmo escopo não permitida
let numero = 10;
// let numero = 20; // ❌ Erro

// Pode reatribuir
numero = 15;
console.log(numero); // 15

// Hoisting com TDZ (Temporal Dead Zone)
// console.log(naoDeclaradoAinda); // ❌ Erro
let naoDeclaradoAinda = "Agora sim!";

// -------------------------------
// 3️⃣ CONST – O imutável de referência (ES6+)
// -------------------------------

const PI = 3.14159;
// PI = 3.14; // ❌ Erro: não pode reatribuir

// Escopo de bloco igual ao let
if (true) {
  const exemploConst = "Sou const!";
  console.log(exemploConst); // "Sou const!"
}
// console.log(exemploConst); // ❌ Erro

// Objetos e arrays com const
const pessoa = { nome: "Ana" };
pessoa.nome = "Carlos"; // permitido
console.log(pessoa); // { nome: "Carlos" }

const numeros = [1, 2, 3];
numeros.push(4); // permitido
console.log(numeros); // [1, 2, 3, 4]

// -------------------------------
// 4️⃣ Comparativo rápido (resumo)
// -------------------------------

/*
| Característica          | var                  | let                  | const                |
|-------------------------|----------------------|----------------------|----------------------|
| Escopo                  | Função               | Bloco                | Bloco                |
| Hoisting                | Sim (undefined)      | Sim (TDZ)            | Sim (TDZ)            |
| Redeclaração            | Sim                  | Não                  | Não                  |
| Reatribuição            | Sim                  | Sim                  | Não                  |
| Uso recomendado         | Evitar               | Quando valor muda    | Quando valor não muda|
*/

// -------------------------------
// 5️⃣ Boas práticas
// -------------------------------

// ✅ Prefira const por padrão
// ✅ Use let quando precisar alterar valores
// ❌ Evite var para evitar comportamento inesperado
