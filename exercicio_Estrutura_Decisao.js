
// 1. Crie uma variável `idade` e use um `if` para exibir "Maior de idade" se idade >= 18.
let idade = 20;
if (idade >= 18) {
  console.log("1: Maior de idade");
}

// 2. Crie uma variável `hora` e use `if/else` para exibir "Bom dia" se hora < 12 e "Boa tarde" caso contrário.
let hora = 14;
if (hora < 12) {
  console.log("2: Bom dia");
} else {
  console.log("2: Boa tarde");
}

// 3. Crie uma variável `nota` e use `if/else if/else` para exibir:
// "Excelente" se nota >= 9
// "Aprovado" se nota >= 7
// "Recuperação" se nota >= 5
// "Reprovado" caso contrário
let nota = 8;
if (nota >= 9) {
  console.log("3: Excelente");
} else if (nota >= 7) {
  console.log("3: Aprovado");
} else if (nota >= 5) {
  console.log("3: Recuperação");
} else {
  console.log("3: Reprovado");
}

// 4. Crie uma variável `diaSemana` (1 a 7) e use `switch/case` para exibir o nome do dia correspondente.
let diaSemana = 3;
switch (diaSemana) {
  case 1: console.log("4/5: Domingo"); break;
  case 2: console.log("4/5: Segunda"); break;
  case 3: console.log("4/5: Terça"); break;
  case 4: console.log("4/5: Quarta"); break;
  case 5: console.log("4/5: Quinta"); break;
  case 6: console.log("4/5: Sexta"); break;
  case 7: console.log("4/5: Sábado"); break;
 
}

// 5. Modifique o exercício anterior para usar `default` caso o valor da variável não seja de 1 a 7.
let diaSemana1 = 3;
switch (diaSemana1) {
  case 1: console.log("4/5: Domingo"); break;
  case 2: console.log("4/5: Segunda"); break;
  case 3: console.log("4/5: Terça"); break;
  case 4: console.log("4/5: Quarta"); break;
  case 5: console.log("4/5: Quinta"); break;
  case 6: console.log("4/5: Sexta"); break;
  case 7: console.log("4/5: Sábado"); break;
  default: console.log("4/5: Dia inválido");
}

// 6. Crie uma variável `cor` e use `switch/case` para agrupar cores primárias (vermelho, azul, verde) e secundárias (amarelo, roxo, laranja).
let cor = "vermelho";
switch (cor) {
  case "vermelho":
  case "azul":
  case "verde":
    console.log("6: Cor primária"); break;
  case "amarelo":
  case "roxo":
  case "laranja":
    console.log("6: Cor secundária"); break;
  default:
    console.log("6: Cor desconhecida");
}

// 7. Crie um `if` que verifique se um número é positivo, negativo ou zero, e exiba a mensagem correspondente.
let num = -3;
if (num > 0) console.log("7: Positivo");
else if (num < 0) console.log("7: Negativo");
else console.log("7: Zero");

// 8. Crie um `if/else` que verifica se um usuário pode acessar um sistema com base em idade >= 18.
if (idade >= 18) console.log("8: Acesso permitido");
else console.log("8: Acesso negado");

// 9. Crie um `switch` que exiba uma mensagem diferente para cada mês do ano (1 a 12), usando `default` para valor inválido.
let mes = 12;
switch (mes) {
  case 1: console.log("9: Janeiro"); break;
  case 2: console.log("9: Fevereiro"); break;
  case 3: console.log("9: Março"); break;
  case 4: console.log("9: Abril"); break;
  case 5: console.log("9: Maio"); break;
  case 6: console.log("9: Junho"); break;
  case 7: console.log("9: Julho"); break;
  case 8: console.log("9: Agosto"); break;
  case 9: console.log("9: Setembro"); break;
  case 10: console.log("9: Outubro"); break;
  case 11: console.log("9: Novembro"); break;
  case 12: console.log("9: Dezembro"); break;
  default: console.log("9: Mês inválido");
}


// 10. Crie um `if/else if/else` que classifica a velocidade de um veículo:
// <= 40 km/h → "Devagar"
// <= 80 km/h → "Moderado"
// <= 120 km/h → "Rápido"
// > 120 km/h → "Muito rápido"
let velocidade = 130;
if (velocidade <= 40) console.log("10: Devagar");
else if (velocidade <= 80) console.log("10: Moderado");
else if (velocidade <= 120) console.log("10: Rápido");
else console.log("10: Muito rápido");

// 11. Crie uma variável booleana `isAdmin` e use `if/else` para exibir se o usuário tem acesso ou não.
let isAdmin = false;
if (isAdmin) console.log("11: Tem acesso");
else console.log("11: Sem acesso");

// 12. Crie uma variável `temperatura` e use `switch` para exibir:
// "Frio" se 0, 1, 2
// "Agradável" se 3, 4, 5
// "Quente" se 6, 7, 8
// "Desconhecido" para outros valores
let temperatura = 6;
switch (temperatura) {
  case 0: case 1: case 2:
    console.log("12: Frio"); break;
  case 3: case 4: case 5:
    console.log("12: Agradável"); break;
  case 6: case 7: case 8:
    console.log("12: Quente"); break;
  default:
    console.log("12: Desconhecido");
}

// 13. Crie um `if` que verifica se um número é par ou ímpar.
let n13 = 9;
if (n13 % 2 === 0) console.log("13: Par");
else console.log("13: Ímpar");

// 14. Crie um `switch` para exibir a estação do ano com base em um número de 1 a 4.
let estacao = 2;
switch (estacao) {
  case 1: console.log("14: Primavera"); break;
  case 2: console.log("14: Verão"); break;
  case 3: console.log("14: Outono"); break;
  case 4: console.log("14: Inverno"); break;
  default: console.log("14: Estação inválida");
}

// 15. Crie um `if/else if/else` para classificar idade de uma pessoa:
// 0-12 → Criança
// 13-19 → Adolescente
// 20-59 → Adulto
// 60+ → Idoso
let idadePessoa = 65;
if (idadePessoa <= 12) console.log("15: Criança");
else if (idadePessoa <= 19) console.log("15: Adolescente");
else if (idadePessoa <= 59) console.log("15: Adulto");
else console.log("15: Idoso");

// 16. Crie uma variável `saldo` e use `if` para verificar se é positivo, negativo ou zero.
let saldo = 0;
if (saldo > 0) console.log("16: Saldo positivo");
else if (saldo < 0) console.log("16: Saldo negativo");
else console.log("16: Saldo zerado");

// 17. Crie uma variável `letra` e use `switch` para verificar se é vogal ou consoante.
let letra = "a";
switch (letra.toLowerCase()) {
  case "a": case "e": case "i": case "o": case "u":
    console.log("17: Vogal"); break;
  default:
    console.log("17: Consoante");
}

// 18. Crie um `if/else` que verifica se um número está dentro de um intervalo (10 a 20).
let n18 = 15;
if (n18 >= 10 && n18 <= 20) console.log("18: Dentro do intervalo");
else console.log("18: Fora do intervalo");

// 19. Crie um `switch` para exibir mensagens diferentes para valores 1, 2, 3 e default.
let valor19 = 3;
switch (valor19) {
  case 1: console.log("19: Um"); break;
  case 2: console.log("19: Dois"); break;
  case 3: console.log("19: Três"); break;
  default: console.log("19: Outro valor");
}

// 20. Crie um `if` que verifica se um ano é bissexto (divisível por 4, mas não por 100, exceto se divisível por 400).
let ano = 2024;
if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log("20: Ano bissexto");
} else {
  console.log("20: Não é bissexto");
}

// 21. Crie um `if/else` que verifica se uma string contém pelo menos 5 caracteres.
let palavra = "Olá!";
if (palavra.length >= 5) console.log("21: Possui 5 ou mais caracteres");
else console.log("21: Menos de 5 caracteres");


// 22. Crie uma variável `nota1` e `nota2` e use `if/else` para exibir se a média é maior ou igual a 7.
let nota1 = 6, nota2 = 8;
let media = (nota1 + nota2) / 2;
if (media >= 7) console.log("22: Aprovado");
else console.log("22: Reprovado");

// 23. Crie um `switch` que exiba o tipo de triângulo com base em um número de 1 a 3 (1: Equilátero, 2: Isósceles, 3: Escaleno).
let tipoTriangulo = 2;
switch (tipoTriangulo) {
  case 1: console.log("23: Equilátero"); break;
  case 2: console.log("23: Isósceles"); break;
  case 3: console.log("23: Escaleno"); break;
  default: console.log("23: Tipo inválido");
}

// 24. Crie um `if/else` que verifica se uma variável `senha` corresponde à senha correta.
let senha = "1234";
if (senha === "1234") console.log("24: Senha correta");
else console.log("24: Senha incorreta");

// 25. Crie um `switch` que exiba a quantidade de dias do mês baseado em uma variável `mes` (1 a 12).
let mes25 = 2;
switch (mes25) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    console.log("25: 31 dias"); break;
  case 4: case 6: case 9: case 11:
    console.log("25: 30 dias"); break;
  case 2:
    console.log("25: 28 ou 29 dias"); break;
  default:
    console.log("25: Mês inválido");
}

// 26. Crie um `if/else` que verifica se um número é múltiplo de 3, de 5, ou de ambos.
let n26 = 15;
if (n26 % 3 === 0 && n26 % 5 === 0) console.log("26: Múltiplo de 3 e 5");
else if (n26 % 3 === 0) console.log("26: Múltiplo de 3");
else if (n26 % 5 === 0) console.log("26: Múltiplo de 5");
else console.log("26: Não é múltiplo de 3 nem de 5");

// 27. Crie um `switch` que retorna "Sim" para caso 1 e 2, "Não" para caso 3 e 4, e "Talvez" para outros.
let valor27 = 4;
switch (valor27) {
  case 1: case 2:
    console.log("27: Sim"); break;
  case 3: case 4:
    console.log("27: Não"); break;
  default:
    console.log("27: Talvez");
}

// 28. Crie um `if` que verifica se uma variável `temperatura` está em uma faixa entre 18 e 25 graus.
let temp28 = 22;
if (temp28 >= 18 && temp28 <= 25) console.log("28: Temperatura agradável");
else console.log("28: Fora da faixa");

// 29. Crie um `switch` que agrupe vários casos em uma mesma ação (por exemplo, cores quentes e frias).
let cor29 = "vermelho";
switch (cor29) {
  case "vermelho": case "laranja": case "amarelo":
    console.log("29: Cores quentes"); break;
  case "azul": case "verde": case "roxo":
    console.log("29: Cores frias"); break;
  default:
    console.log("29: Cor desconhecida");
}

// 30. Crie um `if/else` que combina duas condições (ex: idade >= 18 e isAdmin = true) para permitir ou negar acesso.
let idade30 = 20, isAdmin30 = true;
if (idade30 >= 18 && isAdmin30) {
  console.log("30: Acesso autorizado");
} else {
  console.log("30: Acesso negado");
}
