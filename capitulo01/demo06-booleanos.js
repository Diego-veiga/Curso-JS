const  podeDirigir = true

if(podeDirigir){
    console.log('Ela pode dirigir');
}

const saldoEmConta = 0
if(!saldoEmConta){
    console.log('não tem saldo');   
}


const boolComString = "ae hackerzao !!"

//força o valor a treu ou false
// de acordo com a tabela
console.log('boolComString', !!boolComString);

//negação
console.log('negação', !boolComString);

//negação + força a bool

console.log(
    !(!!boolComString)
);
