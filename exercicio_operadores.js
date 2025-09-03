// 1. Declare duas variáveis numéricas e exiba a soma usando o operador `+`.
let a = 12;
let b = 6;
console.log("Soma:", a + b);
// 2. Declare duas variáveis numéricas e exiba a subtração usando o operador `-`.
let c = 15
let d = 5
console.log("subtração:", c-d);

// 3. Declare duas variáveis numéricas e exiba a multiplicação usando o operador `*`.
let e = 5
let f = 10
console.log("Multiplicação:", e*f);
// 4. Declare duas variáveis numéricas e exiba a divisão usando o operador `/`.
let g = 15
let h = 3
console.log("Divisão:", g/h);
// 5. Declare duas variáveis numéricas e exiba o resto da divisão usando `%`.
let i = 12
let j = 2
console.log("Modulo:", i % j);
// 6. Use o operador de exponenciação `**` para calcular 2 elevado a 5.
let k = 2
let l = 5
console.log("Exponenciação:", k**l);
// 7. Crie uma variável e use o operador `+=` para somar um valor a ela.
let num7 = 10;
num7 += 5; 
console.log("7:", num7);

// 8. Crie uma variável e use o operador `-=` para subtrair um valor dela.
let num8 = 20;
num8 -= 7; 
console.log("8:", num8);

// 9. Crie uma variável e use o operador `*=` para multiplicar seu valor por outro.
let num9 = 4;
num9 *= 3;
console.log("9:", num9);

// 10. Crie uma variável e use o operador `/=` para dividir seu valor por outro.
let num10 = 50;
num10 /= 5;
console.log("10:", num10);

// 11. Declare duas variáveis e use o operador `==` para comparar seus valores.
let a11 = 5, b11 = "5";
console.log("11:", a11 == b11);

// 12. Declare duas variáveis e use o operador `===` para comparar valor e tipo.
let a12 = 5, b12 = "5";
console.log("12:", a12 === b12);

// 13. Declare duas variáveis e use o operador `!=` para verificar se são diferentes (valores).
let a13 = 10, b13 = "20";
console.log("13:", a13 != b13);

// 14. Declare duas variáveis e use o operador `!==` para verificar se são diferentes (valor e tipo).
let a14 = 10, b14 = "10";
console.log("14:", a14 !== b14);

// 15. Compare se uma variável é maior que outra usando `>`.
let x15 = 8, y15 = 5;
console.log("15:", x15 > y15);

// 16. Compare se uma variável é menor que outra usando `<`.
let x16 = 3, y16 = 7;
console.log("16:", x16 < y16);

// 17. Compare se uma variável é maior ou igual a outra usando `>=`.
let x17 = 10, y17 = 10;
console.log("17:", x17 >= y17);

// 18. Compare se uma variável é menor ou igual a outra usando `<=`.
let x18 = 6, y18 = 9;
console.log("18:", x18 <= y18);

// 19. Crie uma expressão com `&&` que só retorne verdadeiro se duas condições forem verdadeiras.
let idade = 20, temCarteira = true;
console.log("19:", idade >= 18 && temCarteira);

// 20. Crie uma expressão com `||` que retorne verdadeiro se pelo menos uma condição for verdadeira.
let chuva = false, guardaChuva = true;
console.log("20:", chuva || guardaChuva);

// 21. Use o operador `!` para inverter o valor booleano de uma variável.
let ligado = true;
console.log("21:", !ligado);

// 22. Use o operador ternário `condicao ? valor1 : valor2` para verificar se um número é par ou ímpar.
let numero = 7;
console.log("22:", numero % 2 === 0 ? "Par" : "Ímpar");

// 23. Use o operador `typeof` para verificar o tipo de uma variável string.
let str = "Olá";
console.log("23:", typeof str);

// 24. Use o operador `typeof` para verificar o tipo de uma variável número.
let num = 123;
console.log("24:", typeof num);

// 25. Use o operador `typeof` para verificar o tipo de uma variável booleana.
let bool = false;
console.log("25:", typeof bool);

// 26. Crie um objeto e use o operador `delete` para remover uma de suas propriedades.
let pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" };
delete pessoa.cidade;
console.log("26:", pessoa);

// 27. Use o operador `in` para verificar se uma propriedade existe em um objeto.
console.log("27:", "nome" in pessoa);

// 28. Use o operador `instanceof` para verificar se um objeto é instância de uma função construtora.
function Carro(modelo) {
  this.modelo = modelo;
}

// 29. Crie uma operação com `??` para definir um valor padrão caso a variável seja `null` ou `undefined`.
let valor = null;
let resultado29 = valor ?? "Valor padrão";
console.log("29:", resultado29);

// 30. Combine operadores aritméticos, lógicos e de comparação em uma expressão complexa e exiba o resultado.
let n1 = 10, n2 = 5, n3 = 2;
let resultado30 = ((n1 + n2) * n3 > 20 && n1 !== n2) || n3 === 0;
console.log("30:", resultado30);

/*
