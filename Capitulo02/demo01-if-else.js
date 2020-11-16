let frutaExistenteNoMercado = false
let temCPUSuficiente  = true

//
//obter valores do terminal 

const args = process.argv
const saldo = args[args.length -1]

console.log('args', args)
console.log('saldo', saldo)

if(isNaN(saldo)){
    console.log('Valor invalido')
    return;
}

let tipoCliente ='Premium'
if(saldo<9){
    tipoCliente='basic'
}
else if(saldo>=10 && saldo<20){
    tipoCliente='gold'
}
else{
    tipoCliente = null
}

//null, indefined, vazio, 0 ==false!
if(!tipoCliente){
   
    tipoCliente='indefinido'
}

console.log('tipodoCliente', tipoCliente)

const operadorOu =1 >2 || 2 > 1
const operadorE = 1 === 1 && 2!==2
const operadorNot = !(1==1)  
const idade=8

const resultado = idade >= 18? 'pode dirigir' : 'não pode dirigir'
console.log('resultado', resultado)
const resultado12 = 1 ? (null || ((1 != '1') ? "Hello world!": "Hackerzao")) : "não zero";

const item = "abc"
 console.log(isNaN(item) ? "Hey jude" : "Hey Julia");