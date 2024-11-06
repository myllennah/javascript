// setTimeOut - uma iteração
function exibirMensagem(){
    console.log("A mensagem foi exibida após 5 segundos");
}

setTimeout(exibirMensagem, 5000);

// setInterval - loop
//setInterval(exibirMensagem, 5000)

//promises

const promise = Promise.resolve(2+5);
console.log("Exibir o primeiro teste");

promise
.then((value) => {
    console.log(`A soma dos valores informados é ${value}`);
    return value;
})
.then((value) => value -1)
.then((value) => console.log(`Eis o novo resultado: ${value}`));

console.log("Exibir novo teste");

//rejeição de promise
function verificarNumero(numero){
    return new Promise((resolve, reject) => {
        if (typeof numero === 'number'){
            resolve(`O numero digitado foi ${numero}`);
        }else{
            reject(`O valor informado "${numero}" não é um número.`);
        }
    })
}

verificarNumero(42)
.then((mensagem) => {
    console.log(mensagem);
})
.catch((erro) => {
    console.log(erro);
});

// async funtion
async function esperar(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Esperei ${segundos} segundos`);
        }, segundos*1000);
    });  
}

async function executar() {
    const resultado = await esperar(5) ;
    console.log(resultado);   
}

executar();