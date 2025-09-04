/*
===========================================================
Exercícios Práticos - Objetos
===========================================================
*/

// 1. Crie um objeto com 3 propriedades diferentes e exiba-o.
const pessoa = {
    nome: "Ana",
    idade: 28,
    profissao: "Engenheira"
};
console.log(pessoa);

// 2. Acesse e exiba uma propriedade usando notação de ponto e colchetes.
console.log(pessoa.nome); // Notação de ponto
console.log(pessoa["idade"]); // Notação de colchetes

// 3. Adicione uma nova propriedade ao objeto depois de criado.
pessoa.cidade = "São Paulo";
console.log(pessoa);

// 4. Remova uma propriedade do objeto.
delete pessoa.profissao;
console.log(pessoa);

// 5. Adicione um método que retorne uma string usando propriedades do objeto.
pessoa.apresentar = function() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
};
console.log(pessoa.apresentar());

// 6. Crie um objeto aninhado (objeto dentro de objeto) e exiba um valor interno.
const empresa = {
    nome: "Tech Solutions",
    endereco: {
        rua: "Av. Central",
        numero: 1000,
        cidade: "Rio de Janeiro"
    }
};
console.log(empresa.endereco.cidade);

// 7. Itere sobre as propriedades do objeto e exiba cada par nome/valor.
for (let chave in pessoa) {
    if (pessoa.hasOwnProperty(chave)) {
        console.log(`${chave}: ${pessoa[chave]}`);
    }
}

// 8. Clone um objeto usando spread e altere uma propriedade no clone.
const pessoaClone = { ...pessoa, idade: 30 };
console.log(pessoaClone);
console.log(pessoa); // Original permanece inalterado

// 9. Compare dois objetos com mesmo conteúdo e explique o resultado da comparação.
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
console.log(obj1 === obj2); // false, porque são referências diferentes na memória

// 10. Congele um objeto com Object.freeze e tente alterar uma propriedade.
const carro = { marca: "Toyota", modelo: "Corolla" };
Object.freeze(carro);
carro.modelo = "Civic"; // Tentativa de alteração
console.log(carro); // Permanece inalterado { marca: "Toyota", modelo: "Corolla" }


