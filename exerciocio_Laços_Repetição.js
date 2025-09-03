// 1. Use um for para exibir os números de 1 a 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Use um for para exibir apenas os números pares de 0 a 20.

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// 3. Crie um for que exiba a tabuada do 5 (de 1 até 10).

for (let i = 1; i <= 10; i++) {
  console.log(5 x ${i} = ${5 * i});
}

// 4. Use um for para somar todos os números de 1 a 100 e exiba o resultado.

let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i;
}
console.log(A soma de 1 a 100 é: ${soma});
// 5. Crie um for que exiba os elementos de um array ["a", "b", "c", "d"].

const array = ["a", "b", "c", "d"];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    }


// 6. Use um for para exibir os quadrados dos números de 1 a 10.

for (let i = 1; i <= 10; i++) {
  console.log(O quadrado de ${i} é ${i * i});
}

// 7. Crie um for que conte de 10 até 1 (contagem regressiva).

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 8. Crie um for que percorra um array de notas [7, 8, 5, 10] e exiba cada nota.

const notas = [7, 8, 5, 10];
for (let i = 0; i < notas.length; i++) {
  console.log(Nota ${i + 1}: ${notas[i]});
}
// 9. Crie um for que exiba apenas os múltiplos de 3 entre 1 e 30.

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
    }
}

// 10. Use um for para inverter e exibir os caracteres de uma string "JavaScript".

const str = "JavaScript";
let strInvertida = "";
for (let i = str.length - 1; i >= 0; i--) {
  strInvertida += str[i];
}
console.log(strInvertida);
// ---------- WHILE ----------

// 11. Crie um while que exiba os números de 1 a 10.

let contador = 1;
while (contador <= 10) {  
    console.log(contador);
    contador++;
    }


// 12. Crie um while que exiba os números pares de 0 a 20.

let num = 0;
while (num <= 20) {
    console.log(num);
    num += 2;
    }
// 13. Crie um while que conte de 10 até 1 (regressivo).

let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
    }


// 14. Crie um while que exiba os múltiplos de 5 de 0 até 50.

let multiple = 0;
while (multiple <= 50) {
    console.log(multiple);
    multiple += 5;
    }


// 15. Crie um while que exiba a soma dos números de 1 a 100.

let sum = 0;
let i = 1;
while (i <= 100) {
    sum += i;
    i++;
    }
console.log(A soma de 1 a 100 é: ${sum});

// 16. Crie um while que percorra um array de nomes ["Ana", "Carlos", "João"] e exiba cada nome.

const nomes = ["Ana", "Carlos", "João"];
let index = 0;
while (index < nomes.length) {
    console.log(nomes[index]);
    index++;
    }


// 17. Crie um while que exiba os números de 1 a 50, mas pule os múltiplos de 4.

let number = 1;
while (number <= 50) {
    if (number % 4 !== 0) {
        console.log(number);
    }
    number++;
    }
// 18. Crie um while que exiba os dígitos de um número, por exemplo 123 → 1, 2, 3.

let numero = 123;
let numeroStr = numero.toString();
let idx = 0;
while (idx < numeroStr.length) {
    console.log(numeroStr[idx]);
    idx++;
    }

// 19. Crie um while que exiba o fatorial de 5 (5! = 120).

let fatorial = 1;
let n = 5;
let j = 1;
while (j <= n) {
    fatorial *= j;
    j++;
    }
console.log(O fatorial de ${n} é: ${fatorial});

// 20. Crie um while que calcule a média dos valores de um array [10, 20, 30, 40].

const valores = [10, 20, 30, 40];
let somaValores = 0;
let k = 0;
while (k < valores.length) {
    somaValores += valores[k];
    k++;
    }
let media = somaValores / valores.length;
console.log(A média dos valores é: ${media});

// ---------- DO...WHILE ----------

// 21. Crie um do...while que exiba os números de 1 a 10.

let countDo = 1;
do {
    console.log(countDo);
    countDo++;
} while (countDo <= 10);


// 22. Crie um do...while que exiba os números pares de 0 a 20.

let evenNum = 0;
do {
    console.log(evenNum);
    evenNum += 2;
} while (evenNum <= 20);


// 23. Crie um do...while que exiba os múltiplos de 7 até 70.

let multipleOf7 = 0;
do {
    console.log(multipleOf7);
    multipleOf7 += 7;
} while (multipleOf7 <= 70);

// 24. Crie um do...while que exiba a contagem regressiva de 5 até 1.

let countdown = 5;
do {
    console.log(countdown);
    countdown--;
} while (countdown >= 1);


// 25. Crie um do...while que pergunte uma senha até que o usuário acerte ("1234").

let senha;
do {
    senha = prompt("Digite a senha:");
} while (senha !== "1234");
console.log("Senha correta!");


// 26. Crie um do...while que exiba a soma dos números de 1 a 50.

let totalSum = 0;
let p = 1;
do {
    totalSum += p;
    p++;
} while (p <= 50);
console.log(A soma de 1 a 50 é: ${totalSum});


// 27. Crie um do...while que percorra os elementos de um array [2, 4, 6, 8] e exiba cada um.

const numeros = [2, 4, 6, 8];
let q = 0;
do {
    console.log(numeros[q]);
    q++;
} while (q < numeros.length);


// 28. Crie um do...while que exiba os números ímpares de 1 a 15.

let oddNum = 1;
do {
    console.log(oddNum);
    oddNum += 2;
} while (oddNum <= 15);


// 29. Crie um do...while que mostre os caracteres de uma string "Olá" um por um.

const mensagem = "Olá";
let r = 0;
do {
    console.log(mensagem[r]);
    r++;
} while (r < mensagem.length);

// 30. Crie um do...while que simule uma contagem de vidas de um jogo (3 até 0).

let vidas = 3;
do {
    console.log(Vidas restantes: ${vidas});
    vidas--;
} while (vidas >= 0);
console.log("Game Over!");


// ---------- FOREACH ----------

// 31. Use forEach para exibir todos os elementos do array [1, 2, 3, 4].

let arr = [1, 2, 3, 4];
arr.forEach(function(element) {
    console.log(element);
    });
// 32. Use forEach para exibir cada nome em ["Ana", "João", "Maria"].

const nomesArray = ["Ana", "João", "Maria"];
nomesArray.forEach(function(nome) {
    console.log(nome);
    });
    
// 33. Use forEach para exibir cada elemento e seu índice no array ["a", "b", "c"].

const letras = ["a", "b", "c"];
letras.forEach(function(letra, indice) {
    console.log(Índice: ${indice}, Letra: ${letra});
    });


// 34. Use forEach para exibir o dobro de cada número em [2, 4, 6, 8].

const numerosArray = [2, 4, 6, 8];
numerosArray.forEach(function(num) {
    console.log(num * 2);
    });
// 35. Use forEach para somar todos os números de [1, 2, 3, 4, 5] e exibir o total.

const nums = [1, 2, 3, 4, 5];
let total = 0;
nums.forEach(function(num) {
    total += num;
    });
console.log(A soma total é: ${total});


// 36. Use forEach para exibir apenas os números pares de [1, 2, 3, 4, 5, 6].

const numerosPares = [1, 2, 3, 4, 5, 6];
numerosPares.forEach(function(num) {
    if (num % 2 === 0) {
        console.log(num);
    }
    });

    // 37. Use forEach para exibir a quantidade de caracteres de cada palavra em ["carro", "casa", "sol"].

const palavras = ["carro", "casa", "sol"];
palavras.forEach(function(palavra) {
    console.log(A palavra "${palavra}" tem ${palavra.length} caracteres.);
    });


// 38. Use forEach para criar uma string com todos os elementos de [ "JS", "é", "top" ] separados por espaço.

const palavrasArray = ["JS", "é", "top"];
let frase = "";
palavrasArray.forEach(function(palavra) {
    frase += palavra + " ";
    }
);
console.log(frase.trim());


// 39. Use forEach para calcular o quadrado de cada número em [1, 2, 3, 4].

const numsArray = [1, 2, 3, 4];
numsArray.forEach(function(num) {
    console.log(num * num);
    });

// 40. Use forEach para exibir a soma acumulada dos números de [10, 20, 30].

const valoresArray = [10, 20, 30];
let somaAcumulada = 0;
valoresArray.forEach(function(valor) {
    somaAcumulada += valor;
    console.log(Soma acumulada: ${somaAcumulada});
    }
);