//object literals

const objetoPessoa = {
    nome: "João",
    idade: 30,
};

console.log(objetoPessoa.nome);
console.log(objetoPessoa);

// remover propriedade do objeto
const pessoa = {
    nome: "Morgana",
    idade: 40,
};

console.log(pessoa);

//removendo
delete pessoa.idade;
console.log(pessoa);

// adicionando propriedade ao objeto
const funcionario = {
    nome: "Luis",
    metricula: 159753,
};

console.log(funcionario);

//adicionando
funcionario.sobrenome = "Santana";
console.log(funcionario);

console.log(funcionario);

//método assign
const objeto1 = {
    nome: "Juliano",
    idade: 30,
};

const objeto2 = {
    altura: 1.80,
    genero: "masculino",
};

const objetoDestino = {};
Object.assign(objetoDestino, objeto1, objeto2);

console.log(objetoDestino);

// método keys
const objeto = {
    nome: "Fernanda",
    idade: 29,
};

const chaves = Object.keys(objeto);
console.log(chaves);

// exibindo os valores do array
const valores  = Object.values(objeto);
console.log(valores);

// mutação de atribuição
const hospede = {
    nome: "Alberto",
};
console.log(hospede.nome);

hospede.nome = "Júnior";
console.log(hospede.nome);

//mutação - inserção
hospede.sobrenome = "Lima";
console.log(hospede);

// mutação - adição
const hospede2 = {
    nome: "Meiriane",
    idade: 29,
};

hospede2.idade += 2;
console.log(hospede2.idade);

// mutação - deletar
delete hospede2.nome;
console.log(hospede2);
