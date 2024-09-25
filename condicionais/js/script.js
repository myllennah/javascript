//if (se a condição for verdadeira)
 
const numerico = 10;
 
if (numerico > 8){
    console.log("O número informado é maior que 8");
}
 
const nomealuno = "Juliano";
 
if (nomealuno === "Juliano"){
    console.log("Olá Juliano");
}
 
if(nomealuno === "Maria"){
    console.log("Olá Maria");
}
 
//else (condição falsa)
const logado = false;
 
if(logado){
    console.log("Está logado");
} else{
    console.log("Não está logado");
}

const altura = 1.65;
if (altura > 1.70){
    console.log("Tem mais de 1,70m");
} else {
    console.log ("Tem menos de 1,70m");
}

//elseif - verifica várias condições
if(1 > 2){
    console.log("Teste1 é verdadeiro");
} else if (2 > 4){
    console.log("Teste2 é verdadeiro");
} else if (4 < 7 ){
    console.log("Teste3 é verdadeiro");
} else {
    console.log("Nenhuma condição verdadeira");
}

//switch

let idade = 18;

switch (idade){
    case 18:
        console.log("Maior de idade");
        break;
    case 17:
        console.log("Usuário é menor");
        break;
    default:
        console.log("Idade inválida");
}



