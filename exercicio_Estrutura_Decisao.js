/*
===========================================================
Exercícios Práticos - Estruturas de Decisão (if, else, switch)
===========================================================
*/

// 1. Crie uma variável `idade` e use um `if` para exibir "Maior de idade" se idade >= 18.
let idade = 20;
if (idade >= 18) {      
// 2. Crie uma variável `hora` e use `if/else` para exibir "Bom dia" se hora < 12 e "Boa tarde" caso contrário.
    console.log("Maior de idade");
}   else {
    console.log("Menor de idade");      
// 3. Crie uma variável `nota` e use `if/else if/else` para exibir:
    console.log("Menor de idade");
}       
// "Excelente" se nota >= 9
let nota = 8;
if (nota >= 9) {        
// "Aprovado" se nota >= 7
    console.log("Excelente");
}   
// "Recuperação" se nota >= 5 
else if (nota >= 7) {
    console.log("Aprovado");    
// "Reprovado" caso contrário
}
else if (nota >= 5) {       

// 4. Crie uma variável `diaSemana` (1 a 7) e use `switch/case` para exibir o nome do dia correspondente.
    console.log("Recuperação");
}       
// 5. Modifique o exercício anterior para usar `default` caso o valor da variável não seja de 1 a 7.
else {
    console.log("Reprovado");   
// 6. Crie uma variável `cor` e use `switch/case` para agrupar cores primárias (vermelho, azul, verde) e secundárias (amarelo, roxo, laranja).
}
let diaSemana = 3;  
// 7. Crie um `if` que verifique se um número é positivo, negativo ou zero, e exiba a mensagem correspondente.
switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
}       
// 8. Crie um `if/else` que verifica se um usuário pode acessar um sistema com base em idade >= 18.
let numero = -5;
if (numero > 0) {       
// 9. Crie um `switch` que exiba uma mensagem diferente para cada mês do ano (1 a 12), usando `default` para valor inválido.
    console.log("Número positivo");
}           
// 10. Crie um `if/else if/else` que classifica a velocidade de um veículo:
else if (numero < 0) {
    console.log("Número negativo");
} else {
    console.log("Número é zero");
}       
// <= 40 km/h → "Devagar"
else if (numero >= 0 && numero <= 40) {     
// <= 80 km/h → "Moderado"
    console.log("Devagar");
} else if (numero > 40 && numero <= 80) {   
// <= 120 km/h → "Rápido"
    console.log("Moderado");
} else if (numero > 80 && numero <= 120) {  
// > 120 km/h → "Muito rápido"
    console.log("Rápido");          
// 11. Crie uma variável booleana `isAdmin` e use `if/else` para exibir se o usuário tem acesso ou não.
}
else {      
// 12. Crie uma variável `temperatura` e use `switch` para exibir:
    console.log("Muito rápido");
}       
// "Frio" se 0, 1, 2
let isAdmin = true;     
// "Agradável" se 3, 4, 5
if (isAdmin) {
    console.log("Acesso concedido");
}       
// "Quente" se 6, 7, 8
else {
    console.log("Acesso negado");
}   
// "Desconhecido" para outros valores
let temperatura = 4;
switch (temperatura) {      

// 13. Crie um `if` que verifica se um número é par ou ímpar.
    case 0:
    case 1:
    case 2:
        console.log("Frio");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Agradável");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Quente");
        break;
    default:
        console.log("Desconhecido");
}       
// 14. Crie um `switch` para exibir a estação do ano com base em um número de 1 a 4.
let numeroPar = 7;
if (numeroPar % 2 === 0) {  
// 15. Crie um `if/else if/else` para classificar idade de uma pessoa:
    console.log("Número é par");
}       
// 0-12 → Criança
else {
    console.log("Número é ímpar");
}   
// 13-19 → Adolescente
let estacao = 2;        
// 20-59 → Adulto
if (estacao === 1) {
    console.log("Verão");
}       
// 60+ → Idoso
else if (estacao === 2) {
    console.log("Outono");
}       
else if (estacao === 3) {
    console.log("Inverno");
}       
else if (estacao === 4) {
    console.log("Primavera");
}       
else {
    console.log("Estação desconhecida");
}
// 16. Crie uma variável `saldo` e use `if` para verificar se é positivo, negativo ou zero.
let idadePessoa = 15;
if (idadePessoa >= 0 && idadePessoa <= 12) {            
// 17. Crie uma variável `letra` e use `switch` para verificar se é vogal ou consoante.
    console.log("Criança");
}   
// 18. Crie um `if/else` que verifica se um número está dentro de um intervalo (10 a 20).
else if (idadePessoa >= 13 && idadePessoa <= 19) {
    console.log("Adolescente");
} else if (idadePessoa >= 20 && idadePessoa <= 59) {
    console.log("Adulto");
} else if (idadePessoa >= 60) {
    console.log("Idoso");
} else {
    console.log("Idade inválida");
}
// 19. Crie um `switch` para exibir mensagens diferentes para valores 1, 2, 3 e default.
let saldo = -50;
if (saldo > 0) {    
// 20. Crie um `if` que verifica se um ano é bissexto (divisível por 4, mas não por 100, exceto se divisível por 400).
    console.log("Saldo positivo");
}   
// 21. Crie um `if/else` que verifica se uma string contém pelo menos 5 caracteres.
else if (saldo < 0) {
    console.log("Saldo negativo");
} else {
    console.log("Saldo é zero");
}
// 22. Crie uma variável `nota1` e `nota2` e use `if/else` para exibir se a média é maior ou igual a 7.
else if (saldo === 0) {
    console.log("Saldo é zero");
} else {
    console.log("Saldo inválido");
}   
// 23. Crie um `switch` que exiba o tipo de triângulo com base em um número de 1 a 3 (1: Equilátero, 2: Isósceles, 3: Escaleno).
let letra = 'a';
switch (letra.toLowerCase()) {  
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("É uma vogal");
        break;
    default:
        console.log("É uma consoante");
}   
// 24. Crie um `if/else` que verifica se uma variável `senha` corresponde à senha correta.
let numeroIntervalo = 15;
if (numeroIntervalo >= 10 && numeroIntervalo <= 20) {   
    console.log("Número está dentro do intervalo");
}   
// 25. Crie um `switch` que exiba a quantidade de dias do mês baseado em uma variável `mes` (1 a 12).
let mes = 2;
switch (mes) {      
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 dias");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 dias");
        break;
    case 2:
        console.log("28 ou 29 dias (ano bissexto)");
        break;
    default:
        console.log("Mês inválido");
}
// 26. Crie um `if/else` que verifica se um número é múltiplo de 3, de 5, ou de ambos.
let senha = "12345";
if (senha === "12345") {
    console.log("Senha correta");
}   
// 27. Crie um `switch` que retorna "Sim" para caso 1 e 2, "Não" para caso 3 e 4, e "Talvez" para outros.
else {
    console.log("Senha incorreta");
}   
// 28. Crie um `if` que verifica se uma variável `temperatura` está em uma faixa entre 18 e 25 graus.
let mesDias = 2;            
// 29. Crie um `switch` que agrupe vários casos em uma mesma ação (por exemplo, cores quentes e frias).
switch (mesDias) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 dias");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 dias");
        break;
    case 2:
        console.log("28 ou 29 dias (ano bissexto)");
        break;
    default:
        console.log("Mês inválido");
}   
// 30. Crie um `if/else` que combina duas condições (ex: idade >= 18 e isAdmin = true) para permitir ou negar acesso.
if (mesDias >= 1 && mesDias <= 12) {
    console.log("Mês válido");
}       







