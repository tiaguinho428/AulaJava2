/*
===========================================================
Exercícios Práticos - Par Nome/Valor
===========================================================
*/

// 1. Declare uma variável string e exiba seu valor no console.
const saudacao = "Olá, mundo!";
console.log(saudacao);

// 2. Crie um objeto com pelo menos 3 pares nome/valor e exiba uma das propriedades.
const pessoa = {
    nome: "Carlos",
    idade: 25,
    cidade: "Belo Horizonte"
};
console.log(pessoa.nome);

// 3. Crie um array com 5 elementos e exiba o terceiro elemento.
const numeros = [10, 20, 30, 40, 50];
console.log(numeros[2]);

// 4. Crie um objeto e adicione uma nova propriedade dinamicamente.
const carro = { marca: "Ford", modelo: "Ka" };
carro.ano = 2020;
console.log(carro);

// 5. Mostre como acessar um valor de um objeto usando colchetes e uma variável.
const chave = "cidade";
console.log(pessoa[chave]);

// 6. Crie uma função que recebe um objeto e exibe as chaves e valores (usando for...in).
function exibirPares(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}
exibirPares(pessoa);

// 7. Declare um objeto aninhado (objeto dentro de objeto) e exiba um valor profundo.
const escola = {
    nome: "Escola ABC",
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
        bairro: "Centro"
    }
};
console.log(escola.endereco.bairro);

// 8. Crie um array e mostre que o índice é o nome e o valor é o conteúdo.
const frutas = ["maçã", "banana", "laranja"];
frutas.forEach((valor, indice) => {
    console.log(`Índice (nome): ${indice}, Valor: ${valor}`);
});

// 9. Crie uma variável com escopo global e outra local dentro de função e mostre seus valores.
var globalVar = "Sou global";
function mostrarEscopo() {
    let localVar = "Sou local";
    console.log(globalVar);
    console.log(localVar);
}
mostrarEscopo();
// console.log(localVar); // Isso daria erro, pois localVar é local

// 10. Modifique o valor de uma propriedade de um objeto e exiba antes e depois.
const livro = { titulo: "Dom Casmurro", autor: "Machado de Assis" };
console.log("Antes:", livro.titulo);
livro.titulo = "Memórias Póstumas de Brás Cubas";
console.log("Depois:", livro.titulo);
