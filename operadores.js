/*
===========================================================
Arquivo: operadores.js
Assunto: Todos os operadores em JavaScript
===========================================================
*/

// -------------------------------
// 1️⃣ OPERADORES ARITMÉTICOS
// -------------------------------

let a = 10;
let b = 3;

console.log("Soma:", a + b);         // 13
console.log("Subtração:", a - b);    // 7
console.log("Multiplicação:", a * b);// 30
console.log("Divisão:", a / b);      // 3.333...
console.log("Módulo:", a % b);       // 1 (resto da divisão)
console.log("Exponenciação:", a ** b);// 1000

// -------------------------------
// 2️⃣ OPERADORES DE ATRIBUIÇÃO
// -------------------------------

let x = 5;
x += 2;  // x = x + 2 → 7
x -= 1;  // x = x - 1 → 6
x *= 3;  // x = x * 3 → 18
x /= 2;  // x = x / 2 → 9
x %= 4;  // x = x % 4 → 1
x **= 3; // x = x ** 3 → 1

console.log("Resultado final de x:", x);

// -------------------------------
// 3️⃣ OPERADORES DE COMPARAÇÃO
// -------------------------------

console.log(5 == "5");   // true  (igualdade solta)
console.log(5 === "5");  // false (igualdade estrita, compara valor e tipo)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(5 > 3);      // true
console.log(5 < 3);      // false
console.log(5 >= 5);     // true
console.log(5 <= 4);     // false

// -------------------------------
// 4️⃣ OPERADORES LÓGICOS
// -------------------------------

let verdadeiro = true;
let falso = false;

console.log("AND:", verdadeiro && falso); // false
console.log("OR:", verdadeiro || falso);  // true
console.log("NOT:", !verdadeiro);         // false

// Curto-circuito
console.log(false && "teste"); // false
console.log(true || "teste");  // true

// -------------------------------
// 5️⃣ OPERADOR TERNÁRIO
// -------------------------------

let idade = 18;
let status = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(status); // "Maior de idade"

// -------------------------------
// 6️⃣ OPERADORES DE INCREMENTO/DECREMENTO
// -------------------------------

let y = 5;
console.log("Pós-incremento:", y++); // 5 (depois incrementa)
console.log("Agora y =", y);         // 6
console.log("Pré-incremento:", ++y); // 7

console.log("Pós-decremento:", y--); // 7
console.log("Agora y =", y);         // 6
console.log("Pré-decremento:", --y); // 5

// -------------------------------
// 7️⃣ OPERADORES DE TIPO
// -------------------------------

console.log(typeof 123);       // "number"
console.log(typeof "abc");     // "string"
console.log(typeof true);      // "boolean"
console.log(typeof {});        // "object"
console.log(typeof []);        // "object" (arrays são objetos)
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (bug histórico do JS)
console.log(typeof function(){}); // "function"

// instanceof – verifica se um objeto é instância de uma classe
let data = new Date();
console.log(data instanceof Date); // true
console.log(data instanceof Array); // false

// -------------------------------
// 8️⃣ OPERADORES ESPECIAIS
// -------------------------------

// delete – remove propriedade de objeto
let pessoa = { nome: "Ana", idade: 25 };
delete pessoa.idade;
console.log(pessoa); // { nome: "Ana" }

// in – verifica se uma propriedade existe em objeto
console.log("nome" in pessoa);  // true
console.log("idade" in pessoa); // false

// -------------------------------
// 9️⃣ OPERADORES BITWISE (nível de bits)
// -------------------------------

/*
& (AND)    → 1 se ambos forem 1
| (OR)     → 1 se pelo menos um for 1
^ (XOR)    → 1 se apenas um for 1
~ (NOT)    → inverte os bits
<<         → desloca bits para a esquerda
>>         → desloca bits para a direita
*/

console.log(5 & 3);  // 1  (0101 & 0011 = 0001)
console.log(5 | 3);  // 7  (0101 | 0011 = 0111)
console.log(5 ^ 3);  // 6  (0101 ^ 0011 = 0110)
console.log(~5);     // -6 (inverte os bits)
console.log(5 << 1); // 10 (desloca para a esquerda)
console.log(5 >> 1); // 2  (desloca para a direita)

// -------------------------------
// 🔟 OPERADOR DE AGRUPAMENTO
// -------------------------------

console.log((2 + 3) * 4); // 20 → parênteses têm prioridade

// -------------------------------
// 🔥 Resumo rápido
// -------------------------------

/*
📌 Principais operadores no JS:

- Aritméticos: + - * / % **
- Atribuição: = += -= *= /= %= **=
- Comparação: == === != !== > < >= <=
- Lógicos: && || !
- Ternário: condicao ? valor1 : valor2
- Incremento/Decremento: ++ --
- Tipo: typeof, instanceof
- Especiais: delete, in
- Bitwise: & | ^ ~ << >>
- Agrupamento: ( )
*/


