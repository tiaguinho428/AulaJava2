/*
===========================================================
Arquivo: array.js
Assunto: Arrays em JavaScript
===========================================================

📌 O que é um Array?
- Estrutura que armazena valores ordenados e indexados.
- Índice começa em 0.
- Pode conter qualquer tipo de dado (misturado).
*/

// -------------------------------
// 1️⃣ Criando arrays
// -------------------------------

// Forma literal
const frutas = ["Maçã", "Banana", "Uva"];
console.log(frutas);

// Usando new Array()
const numeros = new Array(1, 2, 3, 4);
console.log(numeros);

// Array vazio e adicionando depois
const lista = [];
lista[0] = "Primeiro";
lista[1] = "Segundo";
console.log(lista);

// -------------------------------
// 2️⃣ Acessando e alterando elementos
// -------------------------------

console.log(frutas[0]); // "Maçã"
frutas[1] = "Pera"; // altera
console.log(frutas);

// -------------------------------
// 3️⃣ Tamanho do array
// -------------------------------

console.log(frutas.length); // 3

// -------------------------------
// 4️⃣ Adicionando e removendo elementos
// -------------------------------

const cores = ["Vermelho", "Verde"];

// push - adiciona no final
cores.push("Azul");
console.log(cores);

// pop - remove do final
cores.pop();
console.log(cores);

// unshift - adiciona no início
cores.unshift("Amarelo");
console.log(cores);

// shift - remove do início
cores.shift();
console.log(cores);

// -------------------------------
// 5️⃣ Iterando sobre arrays
// -------------------------------

const numeros2 = [1, 2, 3, 4];

// for clássico
for (let i = 0; i < numeros2.length; i++) {
  console.log(numeros2[i]);
}

// for...of (valores)
for (let valor of numeros2) {
  console.log(valor);
}

// forEach (callback)
numeros2.forEach((valor, indice) => {
  console.log(`Índice ${indice}: ${valor}`);
});

// -------------------------------
// 6️⃣ Principais métodos de arrays
// -------------------------------

const nomes = ["Ana", "Carlos", "Pedro"];

// map - cria novo array transformado
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos);

// filter - cria novo array filtrando
const nomesComA = nomes.filter(nome => nome.includes("A") || nome.includes("a"));
console.log(nomesComA);

// reduce - acumula valores
const somaNumeros = numeros2.reduce((total, n) => total + n, 0);
console.log(somaNumeros);

// find - retorna o primeiro que satisfaz a condição
const encontrado = nomes.find(nome => nome.startsWith("C"));
console.log(encontrado);

// some - verifica se pelo menos 1 elemento satisfaz a condição
console.log(nomes.some(nome => nome.length > 4)); // true

// every - verifica se todos satisfazem
console.log(nomes.every(nome => nome.length >= 3)); // true

// includes - verifica se contém
console.log(nomes.includes("Ana")); // true

// indexOf - retorna índice do elemento
console.log(nomes.indexOf("Carlos")); // 1

// sort - ordena (alfabética por padrão)
console.log([...nomes].sort());

// reverse - inverte a ordem
console.log([...nomes].reverse());

// join - junta em string
console.log(nomes.join(", "));

// split (string para array)
const texto = "a,b,c";
console.log(texto.split(","));

// -------------------------------
// 7️⃣ Arrays multidimensionais
// -------------------------------

const matriz = [
  [1, 2],
  [3, 4]
];
console.log(matriz[0][1]); // 2

// -------------------------------
// 8️⃣ Clonando arrays
// -------------------------------

const original = [1, 2, 3];
const clone1 = [...original];
const clone2 = original.slice();
console.log(clone1, clone2);

// -------------------------------
// 9️⃣ Pegadinhas de referência
// -------------------------------

const ref1 = [1, 2];
const ref2 = ref1; // mesma referência
ref2.push(3);
console.log(ref1, ref2); // ambos mudam

// -------------------------------
// 🔟 Resumo rápido
// -------------------------------
/*
✅ Criação: [], new Array()
✅ Métodos importantes:
   push / pop      -> final
   unshift / shift -> início
   map / filter / reduce -> transformação
   find / some / every   -> busca/verificação
   includes / indexOf    -> busca
   sort / reverse        -> ordenação
   join / split          -> conversão string/array
✅ Cuidado com referência: copiar com spread ou slice para evitar alterações indesejadas.
*/
