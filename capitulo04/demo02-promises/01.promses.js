const fs = require('fs')
const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*terminal.question('Qual é o seu nome\n', nome=>{
    terminal.question('Qual é o seu telefone',telefone =>{
        console.log(`Nome ${nome},
                      Telefone ${telefone}`)
                      terminal.close()

    })

})*/

 




function nUMERO(numero){
    console.log("Entrou na funcao")
    return new Promise((resolve, reject)=>{
        console.log("lendo arquivo")
      
        if(!numero %2  ===0){
            console.log("Entrou no erro")
            reject(`o não foi encontrado`)
        }
        
        resolve("Aruivo lido com sucesso");
           
        
    })
}



LerArquivo(2)
           .then(()=> console.log('O numero é par'))
           .catch(()=> console.log("nao foi possivel ler arquivo"))
           .finally(()=>terminal.close())


