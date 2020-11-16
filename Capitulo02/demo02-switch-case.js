const { SSL_OP_CISCO_ANYCONNECT } = require('constants')
const { sign } = require('crypto')
const readLine = require('readline')
const terminal = readLine.createInterface({
    //defini o mode de entrada via terminal
    input: process.stdin,
    //todo texto de saida sairá no terminal
    output: process.stdout
})
//texto do menu

const textMenu = `Olá, seja bem vindo ao sistema de media
Digite 1 para acessar o menu inicial
Digite 2 para acessar  o menu de herois
Digite 3 para acessar o menu de Guerreiras
Diegite 0 para sair `


console.log('TextoMenu', textMenu)
const opcao = 1

switch(opcao){
    case 1:
        console.log('pressionou 1')
        break;
    case 2:
        console.log('pressionou 2')
        break;
    default:
        console.log('opção invalida')
        break
}


terminal.question('Qual é o seu nome?', (msg)=>{
    console.log('você escreveu', msg)
    terminal.close()
})

/*const questoes = {
    menuInicial:{
        texto: textMenu,
        fn: menuInicial
    },
    opcao1:{
        texto:'submenu! Pressione enter para selecionar mais opcoes...',
        fn: opcao1
    }
       
}
function opcao1(msg){
    console.log('Não há mais opções!')
    terminal.close()
}
function menuInicial(msg){
   const opcao = Number(msg)
   if(isNaN(opcao)){
       throw new Error('Não é um numero', msg)
   }
   switch(opcao){
       case 0:
           console.log('Saindo...')
           terminal.close()
           break;
        case 1:
            console.log('menu inicial')
            terminal.question(
                questoes.opcao1.texto,
                questoes.opcao1.fn
            )
            
            break;
        default:
            console.log('opcao invalida')
            terminal.close()
            break;

   }
}

terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)*/switch(0) {

case 0:

    console.log('Hello World');
    
    case 1:
    
    console.log('Segunda Opção');
    
    }
    
    