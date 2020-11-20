const { rejects } = require('assert')
const { NOMEM } = require('dns')
const { resolve } = require('path')
const { stdin } = require('process')
const readline = require('readline')
const terminal = readline.createInterface({
     input: process.stdin,
     output: process.stdout
})


function questionAsync(texto){
    return new Promise((resolve, reject)=>{
        terminal.question(`${texto}\n`, msg=>{
            !!msg ? resolve(msg):reject(new Error('O campo não pode ser vazio'))
        })
    })
}

async function main(){
    try {
         const name = await questionAsync('Qual é o seu nome ?')
         const telefone= await questionAsync('Qual o seu telefone ?')
         console.log(`nome: ${name}, telefone: ${telefone}`)
        
    } catch (error) {
        console.log('Deu ruim', error.stack)
        
    }
    finally{
        terminal.close()
    }
}
main()