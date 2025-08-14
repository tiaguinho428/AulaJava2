/*
===========================================================
Arquivo: objetos.js
Assunto: Objetos em JavaScript
===========================================================

📌 O que é um Objeto?
- Estrutura que armazena dados no formato PAR NOME/VALOR.
- Pode conter:
  ✅ Propriedades (dados)
  ✅ Métodos (funções dentro de objetos)
- Muito usado para representar entidades do mundo real.
*/

// -------------------------------
// 1️⃣ Criando objetos
// -------------------------------

// Forma literal:
const pessoa1 = {
  nome: "Ana",
  idade: 25
};
console.log(pessoa1);

// Usando new Object():
const pessoa2 = new Object();
pessoa2.nome = "Carlos";
pessoa2.idade = 30;
console.log(pessoa2);

// Função construtora:
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const pessoa3 = new Pessoa("Maria", 28);
console.log(pessoa3);

// Classe (ES6):
class PessoaClasse {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}
const pessoa4 = new PessoaClasse("João", 35);
console.log(pessoa4);

// -------------------------------
// 2️⃣ Acessando propriedades
// -------------------------------

const produto = {
  nome: "Notebook",
  preco: 2500
};

console.log(produto.nome);      // Acesso por ponto
console.log(produto["preco"]);  // Acesso por colchetes (dinâmico)

// -------------------------------
// 3️⃣ Adicionando e removendo propriedades
// -------------------------------

produto.marca = "Dell"; // adiciona
console.log(produto);

delete produto.preco; // remove
console.log(produto);

// -------------------------------
// 4️⃣ Métodos em objetos
// -------------------------------

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ligar: function () {
    console.log("Carro ligado!");
  },
  desligar() {
    console.log("Carro desligado!");
  }
};

carro.ligar();
carro.desligar();

// -------------------------------
// 5️⃣ Objetos aninhados
// -------------------------------

const cliente = {
  nome: "Pedro",
  endereco: {
    rua: "Rua A",
    numero: 123
  }
};
console.log(cliente.endereco.rua);

// -------------------------------
// 6️⃣ Iterando sobre propriedades
// -------------------------------

const usuario = { nome: "Lucas", idade: 22 };

for (let chave in usuario) {
  console.log(`${chave}: ${usuario[chave]}`);
}

console.log(Object.keys(usuario));   // ["nome", "idade"]
console.log(Object.values(usuario)); // ["Lucas", 22]
console.log(Object.entries(usuario));// [["nome","Lucas"],["idade",22]]

// -------------------------------
// 7️⃣ Clonando objetos
// -------------------------------

const original = { a: 1, b: 2 };

// Clonagem superficial (shallow copy)
const clone1 = Object.assign({}, original);
const clone2 = { ...original };

console.log(clone1, clone2);

// Clonagem profunda (deep copy) - evita referência compartilhada
const objAninhado = { nome: "Teste", endereco: { cidade: "SP" } };
const deepClone = JSON.parse(JSON.stringify(objAninhado));
deepClone.endereco.cidade = "RJ";
console.log(objAninhado, deepClone);

// -------------------------------
// 8️⃣ Comparando objetos
// -------------------------------

const obj1 = { nome: "A" };
const obj2 = { nome: "A" };

console.log(obj1 === obj2); // false (referências diferentes)
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true (conteúdo igual)

// -------------------------------
// 9️⃣ Objetos imutáveis
// -------------------------------

const imutavel = { nome: "Teste" };
Object.freeze(imutavel);
// imutavel.nome = "Novo"; // ❌ não altera
console.log(imutavel);

const selado = { nome: "Teste" };
Object.seal(selado);
selado.nome = "Novo"; // ✅ altera valor existente
// selado.sobrenome = "Outro"; // ❌ não adiciona nova propriedade
console.log(selado);

// -------------------------------
// 🔟 Resumo rápido
// -------------------------------
/*
✅ Criar: {}, new Object(), funções construtoras, classes
✅ Acessar: ponto (.) ou colchetes []
✅ Adicionar/Remover propriedades dinamicamente
✅ Métodos = funções dentro de objetos
✅ Objetos podem ser aninhados
✅ Iterar: for...in, Object.keys(), Object.values(), Object.entries()
✅ Clonar: spread (...), Object.assign(), JSON.parse/stringify (deep copy)
✅ Comparar: referências diferentes mesmo com conteúdo igual
✅ Imutabilidade: Object.freeze(), Object.seal()
*/
