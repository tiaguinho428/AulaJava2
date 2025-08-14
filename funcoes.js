/*
===========================================================
Arquivo: funcoes.js
Assunto: Funções em JavaScript
===========================================================

📌 O que é uma função?
Uma função é um bloco de código reutilizável que executa uma tarefa
ou calcula um valor. Pode receber entradas (parâmetros) e retornar saídas.
*/

// -------------------------------
// 1️⃣ Função declarada (Function Declaration)
// -------------------------------

function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Rodrigo")); // "Olá, Rodrigo!"

// Hoisting: funções declaradas são içadas completamente
console.log(testeHoisting()); // "Função declarada funciona mesmo antes"
function testeHoisting() {
  return "Função declarada funciona mesmo antes";
}

// -------------------------------
// 2️⃣ Função anônima atribuída a variável (Function Expression)
// -------------------------------

const soma = function (a, b) {
  return a + b;
};

console.log(soma(5, 3)); // 8

// Funções em expressão NÃO sofrem hoisting da mesma forma
// console.log(subtrair(5, 3)); // ❌ Erro
const subtrair = function (a, b) {
  return a - b;
};

// -------------------------------
// 3️⃣ Função de seta (Arrow Function)
// -------------------------------

const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 2)); // 8

// Quando tem apenas um parâmetro, parênteses são opcionais
const dobrar = n => n * 2;
console.log(dobrar(5)); // 10

// Quando há várias linhas, precisa de {}
const saudacaoArrow = (nome) => {
  console.log("Preparando mensagem...");
  return `Olá, ${nome}!`;
};
console.log(saudacaoArrow("Maria"));

// Arrow Functions NÃO têm seu próprio "this"
const pessoa = {
  nome: "Ana",
  falar: function () {
    console.log(`Meu nome é ${this.nome}`);
  },
  falarArrow: () => {
    console.log(`Meu nome é ${this.nome}`); // ❌ "this" aqui não é do objeto
  },
};
pessoa.falar(); // "Meu nome é Ana"
pessoa.falarArrow(); // "Meu nome é undefined"

// -------------------------------
// 4️⃣ Parâmetros padrão
// -------------------------------

function saudacaoPadrao(nome = "Visitante") {
  return `Olá, ${nome}!`;
}
console.log(saudacaoPadrao()); // "Olá, Visitante"

// -------------------------------
// 5️⃣ Função com número variável de argumentos
// -------------------------------

function somarTudo(...numeros) {
  return numeros.reduce((total, n) => total + n, 0);
}
console.log(somarTudo(1, 2, 3, 4)); // 10

// -------------------------------
// 6️⃣ Funções dentro de funções (funções aninhadas)
// -------------------------------

function operacoes(a, b) {
  function somaInterna() {
    return a + b;
  }
  function multiplicacaoInterna() {
    return a * b;
  }
  return { somaInterna, multiplicacaoInterna };
}

const { somaInterna, multiplicacaoInterna } = operacoes(3, 4);
console.log(somaInterna()); // 7
console.log(multiplicacaoInterna()); // 12

// -------------------------------
// 7️⃣ Funções como valores (First-Class Functions)
// -------------------------------

function executarFuncao(fn, valor) {
  return fn(valor);
}

console.log(executarFuncao(dobrar, 8)); // 16

// -------------------------------
// 8️⃣ Função autoexecutável (IIFE - Immediately Invoked Function Expression)
// -------------------------------

(function () {
  console.log("Função executada automaticamente!");
})();

// -------------------------------
// 9️⃣ Resumo rápido
// -------------------------------

/*
- Function Declaration:
  ✅ Sofre hoisting
  ✅ Ideal quando quer usar antes de declarar

- Function Expression:
  ❌ Não sofre hoisting
  ✅ Pode ser anônima
  ✅ Boa para passar como argumento

- Arrow Function:
  ❌ Não sofre hoisting
  ❌ Não tem seu próprio "this"
  ✅ Sintaxe curta
  ✅ Ideal para funções simples
*/

// -------------------------------
// 🔟 Boas práticas
// -------------------------------
/*
✅ Use arrow functions para funções curtas e simples
✅ Use function declaration quando precisar de hoisting
✅ Prefira nomes claros para as funções
✅ Use parâmetros padrão para evitar undefined
*/
