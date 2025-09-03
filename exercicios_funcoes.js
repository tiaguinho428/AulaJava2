/*
===========================================================
Exercícios Práticos - Funções
===========================================================
*/

// 1. Crie uma função tradicional que receba dois números e retorne a soma.
function somar(a, b) {
    return a + b;
}
console.log(somar(5, 3)); // 8

// 2. Crie uma função de seta (arrow function) que receba uma string e retorne ela em maiúsculas.
const paraMaiusculas = (str) => str.toUpperCase();
console.log(paraMaiusculas("teste")); // "TESTE"

// 3. Crie uma função que recebe um parâmetro opcional com valor padrão e retorne uma saudação.
function saudacao(nome = "Visitante") {
    return Olá, ${nome}!;
}
console.log(saudacao()); // "Olá, Visitante!"
console.log(saudacao("Ana")); // "Olá, Ana!"

// 4. Crie uma função que receba um número indefinido de argumentos e retorne a média deles.
function calcularMedia(...numeros) {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
}
console.log(calcularMedia(10, 20, 30)); // 20

// 5. Crie uma função que retorna outra função que adiciona um número fixo.
function criarAdicionador(fixo) {
    return function(num) {
        return fixo + num;
    };
}
const adicionar5 = criarAdicionador(5);
console.log(adicionar5(10)); // 15

// 6. Escreva uma IIFE que imprima "Função autoexecutada".
(function() {
    console.log("Função autoexecutada");
})();

// 7. Crie uma função que usa `this` e explique a diferença entre função tradicional e arrow function no contexto do `this`.
const obj = {
    valor: 42,
    funcTradicional: function() {
        console.log(this.valor); // 42
    },
    funcArrow: () => {
        console.log(this.valor); // undefined, pois this não se refere ao objeto obj
    }
};
obj.funcTradicional();
obj.funcArrow();

// 8. Crie uma função que recebe um objeto e imprime seus valores usando destructuring.
function imprimirValores({ nome, idade }) {
    console.log(Nome: ${nome}, Idade: ${idade});
}
imprimirValores({ nome: "Carlos", idade: 28 }); // "Nome: Carlos, Idade: 28"        

// 9. Crie uma função que troca os valores de duas variáveis usando destructuring.
function trocarValores(a, b) {
    [a, b] = [b, a];
    return [a, b];
}
let x = 5, y = 10;
[x, y] = trocarValores(x, y);
console.log(x, y); // 10 5

// 10. Crie uma função recursiva que calcula o fatorial de um número.
function fatorial(n) {
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
}
console.log(fatorial(5)); // 120

