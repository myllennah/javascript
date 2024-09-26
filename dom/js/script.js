//https://hasthemes.com/blog/useless-websites-on-the-internet/
//https://maze.toys/mazes/mini/daily/
//https://checkbox.toys/scale/

//DOM movimentando-se no console
console.log(document.body);

console.log(document.body.childNodes);
console.log(document.body.childNodes[1].childNodes);

//propriedade para acessar o elemento do título
console.log(document.body.childNodes[1].childNodes[1].textContent);

console.log(document.body.childNodes[5].childNodes[1].textContent);

//para corrigir o retorno dos filhos do nó, sem os espaços em branco do texto, utilizar a linha de comando abaixo; dessa forma, o header estará na posição 0, main na posição 1 e footer na 2
console.log(document.body.children);

//alterando para children, ele mostra o conteúdo do texto do footer na posição real, que é a posição 2
console.log(document.body.children[2].childNodes[1].textContent);

//pesquisar por tags
const listadeItens = document.getElementsByTagName("li");
console.log(listadeItens);

//pesquisar por id
const titulo = document.getElementById('titulo');
console.log(titulo);

//pesquisar por classe
const classe = document.getElementsByClassName("produtos");
console.log(classe);

//insertBefore
const paragrafo = document.createElement("p");
const header = titulo.parentElement;
header.insertBefore(paragrafo, titulo);

//appendChild
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);

//replaceChild
const h2 = document.createElement("h2");
h2.textContent = "Novo Título";
header.replaceChild(h2, titulo);

//criando um nó de texto
const meuTexto = document.createTextNode("Inserindo outro título");
const h3 = document.createElement("h3");
h3.appendChild(meuTexto);

const header2 = document.querySelector('header');
const oldTitle = header.querySelector('h2');

header.replaceChild(h3, h2);

//setAttribute e getAttribute
const primeiroLink = navLinks.querySelector("a");
console.log(primeiroLink);
primeiroLink.setAttribute('href', "https://puginarug.com/");

//abrir o link em uma nova aba
console.log(primeiroLink.getAttribute('href'));
primeiroLink.setAttribute('target', '_blank');

//alterar altura e largura
const footer = document.querySelector('footer');
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);
console.log(footer.clientWidth);
console.log(footer.clientHeight);

//getClientBoundingRect
// const produtos1 = produtos[0];
// console.log(produtos1.getBoundingClientRect());

//css com js
const mainCss = document.getElementById("main-container");
mainCss.style.color = "red";
mainCss.style.backgroundColor = "#000";
mainCss.style.paddingBottom = "100px";

//html collection
//fazer um loop no li e alterar a cor do fundo

for(const li of listadeItens){
    li.style.backgroundColor = 'yellow';
}