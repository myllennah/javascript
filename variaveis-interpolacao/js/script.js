// comentário de uma linha

/* comentário
de várias linhas*/

// exibindo um número na tela
console.log(2);

//exibindo o tipo de dado
console.log(typeof 3.5);

//declarando e imprimindo uma constante
const meunumero = 10;
console.log(meunumero);

//erro ao alterar constante
const numero = 5;
//numero = 3;
console.log(numero);

//string - usar aspas simples e duplas
console.log('Estou aprendendo javascript')
console.log("Seguindo a aprendizagem")

//contagem de strings
const nome = "Carlos Cunha";
console.log(nome.length);

//string de números
const valores = "589";
console.log(valores);
console.log(typeof valores);

//pular uma linha
console.log("pulando linhas\ndentro da string")

//espaçamento na string
console.log("espaçamento \tna string")

// variáveis var (global) e let (local)
var num1 = 5;
num1 = 3;
console.log(num1);

//interpolação
const sobrenome = "Cunha";
console.log(`Olá, ${sobrenome}!`);

const idade = 34;
console.log(`Você tem ${idade} anos.`);

console.log(`${sobrenome}, você tem ${idade} anos`);
