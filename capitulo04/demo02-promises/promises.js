const { rejects } = require("assert");
const { Console } = require("console");
const { resolve } = require("path");

function numeroPar(numero){
   
    return new Promise((resolve,reject) =>{
        let n = Number(numero)
        const t =!(n % 2 === 0) 
        
        if(!(n % 2 === 0) ){
            
            reject(`${numero}`)
        }
        
            resolve(`${numero}`)
       
    })
}

numeroPar(4)
            .then((mensagem) =>console.log('Sucesso', mensagem))
            .catch((err) => console.log('Deu ruim', err))


/*function menorIdade(idade){
    return new Promise((resolve,reject)=>{
        if((Number(idade)<18)){
            reject('Menor de idade')
        }
        resolve('Maior de idade')

    })

}
menorIdade(14)
              .then(()=>console.log('Maior de idade'))
              .catch(()=>console.error('Menor de idade'))*/