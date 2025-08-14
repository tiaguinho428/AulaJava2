/*
===========================================================
Exercícios Práticos - Variáveis (var, let, const)
===========================================================
*/

// 1. Declare uma variável com `var` e atribua uma string com seu nome. Exiba no console.
var nome = "Tiago"
console.log(typeof nome)
console.log("Meu nome e", nome)
// 2. Declare uma variável com `let` contendo um número e depois altere esse número para outro valor.
let numero = 17;
console.log("Numero inicial", numero);
numero = 20;
console.log("Numero Alterado", numero);
// 3. Declare uma constante `const` com um array vazio. Adicione três elementos a esse array e exiba.
const lista = [];
lista.push("Tiago", "Luis", "Andre");
console.log("array", lista);
// 4. Escreva um bloco `if` que declare uma variável `var` dentro dele. Exiba essa variável fora do bloco.
if (true) {
    var testeVar = "Estou dentro do if com o var";
}
// 5. Escreva um bloco `if` que declare uma variável `let` dentro dele. Tente exibir essa variável fora do bloco (comente a linha que causa erro).
if (true) {
    let testelet "estou dentro do if com o let";
}
// 6. Tente redeclarar uma variável usando `var` no mesmo escopo. Faça o mesmo com `let` e observe o erro.
var x = 1;
var x = 2;
console.log("var redeclarado", x);

let y = 3
console.log("let nao pode ser redeclarado no mesmo escopo", y);
// 7. Declare uma variável com `const` que contém um objeto com duas propriedades. Altere uma dessas propriedades e exiba o objeto.
const pessoa = {"Nome:Tiago", "Idade:25"};
pessoa.idade = 26;
console.log("Objeto pessoa", pessoa);
// 8. Declare uma variável com `let` sem inicializá-la. Depois atribua um valor e exiba.
let cor;
cor = "Azul";
console.log("Cor", cor);
// 9. Demonstre hoisting declarando uma variável com `var` depois de usá-la (exiba antes da declaração).
console.log("valor de z antes da declaracao", z);
var = z 100;
console.log("valor de z depois da declaracao",z)
// 10. Crie uma função que declare uma variável `var` dentro dela e tente acessar essa variável fora da função (explique o resultado).
function minhaFuncao() {
    var interna = "sou interna da funcao";
    console.log(imterna);
}
minhaFuncao();