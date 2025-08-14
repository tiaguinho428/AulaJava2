/*
===========================================================
Arquivo: destructuring.js
Assunto: Operador Destructuring em JavaScript
===========================================================

📌 O que é Destructuring?
- É uma forma de "desestruturar" dados de arrays ou objetos,
  atribuindo seus valores a variáveis de forma prática.
- Evita a necessidade de acessar manualmente cada elemento/propriedade.
*/

// -------------------------------
// 1️⃣ Destructuring em arrays
// -------------------------------

const numeros = [10, 20, 30, 40];

// Forma tradicional:
const a1 = numeros[0];
const b1 = numeros[1];
console.log(a1, b1); // 10 20

// Com destructuring:
const [a, b] = numeros;
console.log(a, b); // 10 20

// Pulando elementos:
const [primeiro, , terceiro] = numeros;
console.log(primeiro, terceiro); // 10 30

// Valores padrão:
const [x, y, z = 99] = [1, 2];
console.log(x, y, z); // 1 2 99

// -------------------------------
// 2️⃣ Destructuring em objetos
// -------------------------------

const pessoa = {
  nome: "Carlos",
  idade: 35,
  endereco: {
    rua: "Rua B",
    numero: 456
  }
};

// Forma tradicional:
const nomePessoa = pessoa.nome;
console.log(nomePessoa); // "Carlos"

// Com destructuring:
const { nome, idade } = pessoa;
console.log(nome, idade); // "Carlos" 35

// Mudando nome da variável:
const { nome: n, idade: i } = pessoa;
console.log(n, i); // "Carlos" 35

// Valores padrão:
const { sobrenome = "Não informado" } = pessoa;
console.log(sobrenome); // "Não informado"

// Destructuring aninhado:
const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero); // "Rua B" 456

// -------------------------------
// 3️⃣ Destructuring em parâmetros de função
// -------------------------------

function mostrarPessoa({ nome, idade }) {
  console.log(`Nome: ${nome}, Idade: ${idade}`);
}
mostrarPessoa(pessoa); // "Nome: Carlos, Idade: 35"

// -------------------------------
// 4️⃣ Destructuring com rest (...)
const [num1, ...resto] = [1, 2, 3, 4, 5];
console.log(num1); // 1
console.log(resto); // [2, 3, 4, 5]

const { nome: nomePessoa2, ...outrosDados } = pessoa;
console.log(nomePessoa2); // "Carlos"
console.log(outrosDados); // { idade: 35, endereco: { ... } }

// -------------------------------
// 5️⃣ Destructuring em troca de valores
// -------------------------------

let p = 1;
let q = 2;
[p, q] = [q, p];
console.log(p, q); // 2 1

// -------------------------------
// 6️⃣ Destructuring com funções que retornam arrays ou objetos
// -------------------------------

function retornaArray() {
  return [100, 200];
}
const [valor1, valor2] = retornaArray();
console.log(valor1, valor2); // 100 200

function retornaObjeto() {
  return { x: 9, y: 8 };
}
const { x: valX, y: valY } = retornaObjeto();
console.log(valX, valY); // 9 8

// -------------------------------
// 7️⃣ Resumo rápido
// -------------------------------
/*
✅ Arrays:
   const [a, b] = array;
   const [a, , c] = array; // pula elementos
   const [a, b = valorPadrao] = array; // valor padrão
   const [primeiro, ...resto] = array; // rest

✅ Objetos:
   const { chave } = objeto;
   const { chave: novoNome } = objeto; // renomeia
   const { chave = valorPadrao } = objeto; // valor padrão
   const { chave1, ...resto } = objeto; // rest
   const { chaveAninhada: { subChave } } = objeto; // aninhado

✅ Usos comuns:
   - Pegar dados de objetos/arrays rapidamente
   - Definir parâmetros de função
   - Trocar valores entre variáveis
*/
