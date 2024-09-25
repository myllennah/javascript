// funções

function minhaFuncao(){
    console.log("Teste de Função");
}

minhaFuncao();

// funão na variável
const funcaoVariavel = function(){
    console.log("Teste de função na variável")
}

funcaoVariavel();

// função por parâmetro
function funcaoParametro(txt){
    console.log(`Exibindo ${txt}`);
}

funcaoParametro("Teste de função por parâmetro");

// return
const a = 5;
const b = 6;
const c = 10;
const d = 40;

function soma (n1, n2){
    return n1+n2;
}

const resultado = soma (a,b);
console.log(resultado);

console.log (soma(c,d));

// escopo aninhado
let m = 15;

function escopoAninhado(){
    let m = 30;

    if(true){
        let m = 35;

        if(true){
            let m = 40;
            console.log(m);
        }

        console.log(m);
    }
    console.log(m);
}

escopoAninhado();
console.log(m);

// função arrow
const quadrado = (numero) => numero * numero;
console.log(quadrado(5));

const raizQuadrada = (z) => {
    return z * z;    
}
console.log(raizQuadrada(4))

const aoQuadrado = (x) => x*x;
console.log(aoQuadrado(6));
console.log(aoQuadrado(9));