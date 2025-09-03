/*
===========================================================
Exercícios Práticos - Destructuring
===========================================================
*/

// 1. Usando destructuring, pegue os dois primeiros valores de um array.
const meuArray = [10, 20, 30, 40, 50];
const [primeiro, segundo] = meuArray;
console.log(primeiro, segundo); // 10 20 

// 2. Use destructuring para extrair propriedades nome e idade de um objeto.
const pessoa = { nome: 'Ana', idade: 25, cidade: 'São Paulo' };
const { nome, idade } = pessoa;
console.log(nome, idade); // Ana 25

// 3. Use destructuring para extrair uma propriedade que não existe e defina um valor padrão.
const { profissao = 'Desconhecida' } = pessoa;
console.log(profissao); // Desconhecida

// 4. Use destructuring aninhado para extrair propriedades de um objeto dentro de outro.
const pessoaCompleta = { nome: 'Carlos', endereco: { cidade: 'Rio de Janeiro', estado: 'RJ' } };
const { endereco: { cidade, estado } } = pessoaCompleta;
console.log(cidade, estado); // Rio de Janeiro RJ

// 5. Use rest operator para pegar os elementos restantes de um array depois de extrair alguns.
const [primeiroNum, segundoNum, ...restoNumeros] = meuArray;
console.log(restoNumeros); // [30, 40, 50]

// 6. Troque os valores de duas variáveis usando destructuring.
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a, b); // 10 5

// 7. Destructure os parâmetros de uma função que recebe um objeto com nome e idade.
function exibirInfo({ nome, idade }) {
  console.log(Nome: ${nome}, Idade: ${idade});
}
exibirInfo(pessoa); // Nome: Ana, Idade: 25

// 8. Use destructuring para extrair chaves e valores de um objeto dentro de uma função.
function exibirEndereco({ endereco: { cidade, estado } }) {
  console.log(Cidade: ${cidade}, Estado: ${estado});
}
exibirEndereco(pessoaCompleta); // Cidade: Rio de Janeiro, Estado: RJ

// 9. Extraia propriedades de um objeto e renomeie as variáveis usando destructuring.
const { nome: nomePessoa, idade: idadePessoa } = pessoa;
console.log(nomePessoa, idadePessoa); // Ana 25

// 10. Use destructuring para extrair elementos de um array retornado por uma função.
function retornarArray() {
  return [1, 2, 3, 4, 5];
}
const [um, dois, tres] = retornarArray();
console.log(um, dois, tres); // 1 2 3

