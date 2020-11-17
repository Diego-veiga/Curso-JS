const fs = require('fs')

/*fs.readFile('./arq1.txt', (error, resposta)=>{
    if(error){
        console.error('Deu ruim', error.stack)
        return;
    }

    console.log('resposta', resposta.toString())
})*/


fs.readFile('./arq1.txt', (errorArq1, respostaArq1)=>{
    if(errorArq1){
        console.error('Deu ruim no arquivo 1', errorArq1.stack)
        return;
    }
    fs.readFile('./arq2.txt', (errorArq2, respostaArq2)=>{
        if(errorArq2){
            console.error('Deu ruim no arquvo 2', errorArq2.stack)
            return;
        }
        fs.readFile('./arq3.txt', (errorArq3, respostaArq3)=>{
            if(errorArq3){
                console.error('Deu ruim no arquivo 3',errorArq3)
                return;
            }
            const conteudo =`${respostaArq1}\n${respostaArq2}\n${respostaArq3}`;
            console.log(conteudo);
            fs.writeFile('./final.txt', conteudo,(errorWrite, respotaWrite)=>{
                if(errorWrite){
                    console.error('Deu ruim na gravacao', errorWrite)
                }
                console.log('Arquvio salvo com sucesso')
            })
        })
        
    })
})