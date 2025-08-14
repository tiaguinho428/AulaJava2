/*
===========================================================
Arquivo: par_nome_valor.js
Assunto: Par Nome/Valor em JavaScript
===========================================================

📌 O que é um Par Nome/Valor?
- Em JavaScript, um dado é representado por um PAR formado por:
  - Nome (ou chave)
  - Valor
- Esse conceito é a base de objetos no JavaScript.
- É como um dicionário onde cada "palavra" (nome) tem um "significado" (valor).
*/

// -------------------------------
// 1️⃣ Exemplo básico
// -------------------------------

const saudacao = "Olá"; // Nome: saudacao | Valor: "Olá"
console.log(saudacao); // "Olá"

// -------------------------------
// 2️⃣ Par Nome/Valor dentro de um objeto
// -------------------------------

const cliente = {
  nome: "Maria",   // Nome: "nome"   | Valor: "Maria"
  idade: 28,       // Nome: "idade"  | Valor: 28
  endereco: {      // Nome: "endereco" | Valor: { ... }
    logradouro: "Rua A",
    numero: 123
  }
};

console.log(cliente.nome); // "Maria"
console.log(cliente.endereco.logradouro); // "Rua A"

// -------------------------------
// 3️⃣ Contexto léxico (onde o par foi definido)
// -------------------------------

// Contexto 1
const valor = "Global";

function minhaFuncao() {
  // Contexto 2
  const valor = "Local";
  console.log(valor); // "Local" -> usa o valor do contexto mais próximo
}

minhaFuncao();
console.log(valor); // "Global"

// -------------------------------
// 4️⃣ Par Nome/Valor em arrays
// -------------------------------

const frutas = ["Maçã", "Banana", "Uva"];
// Aqui o NOME é o índice (0, 1, 2) e o VALOR é o item
console.log(frutas[0]); // "Maçã"

// -------------------------------
// 5️⃣ Par Nome/Valor no escopo global e de função
// -------------------------------

var linguagem = "JavaScript";
console.log(globalThis.linguagem); // ❌ undefined no Node (var não vai pra globalThis aqui)

// Em navegadores, variáveis var globais viram propriedades de window:
// var linguagem = "JavaScript";
// console.log(window.linguagem); // "JavaScript"

// -------------------------------
// 6️⃣ Criando pares dinâmicos
// -------------------------------

const chave = "profissao";
const pessoa = {};
pessoa[chave] = "Programador"; // Nome: "profissao" | Valor: "Programador"

console.log(pessoa); // { profissao: "Programador" }

// -------------------------------
// 7️⃣ Resumo rápido
// -------------------------------
/*
- Par Nome/Valor é um conceito fundamental de objetos.
- Nome: identifica o dado (também chamado de chave ou propriedade).
- Valor: conteúdo associado a essa chave.
- Pode existir em:
  ✅ Objetos
  ✅ Arrays (índice -> valor)
  ✅ Escopos (variáveis -> valores)
- Contexto léxico influencia qual valor será usado.
*/
