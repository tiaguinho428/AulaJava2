/*
===========================================================
Exercícios Práticos - Par Nome/Valor
===========================================================
*/

// 1. Declare uma variável string e exiba seu valor no console.
let minhaString = "Olá, mundo!";
console.log(minhaString);

// 2. Crie um objeto com pelo menos 3 pares nome/valor e exiba uma das propriedades.
let meuObjeto = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};
console.log(meuObjeto.nome);
// 3. Crie um array com 5 elementos e exiba o terceiro elemento.
let meuArray = [10, 20, 30, 40, 50];
console.log(meuArray[2]);

// 4. Crie um objeto e adicione uma nova propriedade dinamicamente.
meuObjeto.profissao = "Engenheiro";
console.log(meuObjeto);

// 5. Mostre como acessar um valor de um objeto usando colchetes e uma variável.
let chave = "idade";
console.log(meuObjeto[chave]);

// 6. Crie uma função que recebe um objeto e exibe as chaves e valores (usando for...in).
function exibirChavesValores(obj) {
    for (let chave in obj) {
        console.log(${chave}: ${obj[chave]});
    }
}
exibirChavesValores(meuObjeto);

// 7. Declare um objeto aninhado (objeto dentro de objeto) e exiba um valor profundo.
let objetoAninhado = {
    pessoa: {
        nome: "Maria",
        endereco: {
            rua: "Rua A",
            cidade: "Rio de Janeiro"
        }
    }
};
console.log(objetoAninhado.pessoa.endereco.cidade);

// 8. Crie um array e mostre que o índice é o nome e o valor é o conteúdo.
let arrayNomes = ["Ana", "Bruno", "Carlos"];
arrayNomes.forEach((nome, indice) => {
    console.log(Índice: ${indice}, Nome: ${nome});
});

// 9. Crie uma variável com escopo global e outra local dentro de função e mostre seus valores.
let variavelGlobal = "Eu sou global";

function minhaFuncao() {
    let variavelLocal = "Eu sou local";
    console.log(variavelLocal);
}

console.log(variavelGlobal);
minhaFuncao();

// 10. Modifique o valor de uma propriedade de um objeto e exiba antes e depois.
console.log("Antes:", meuObjeto.idade);
meuObjeto.idade = 31;
console.log("Depois:", meuObjeto.idade);