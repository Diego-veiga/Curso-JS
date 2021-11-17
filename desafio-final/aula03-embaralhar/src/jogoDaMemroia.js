class jogoDaMemoria{
    //se mandar um obj={tela:1, idade:2, etc:3}
    //vai ignorar o resto das propriedades e pegar somebte a propriedade
    //tela
    constructor({tela}){
        this.tela=tela
        //caminho do arquivo, sempre relativo
        //ao index

        this.heroiIniciais =[
            {img: './arquivos/heroi1.png', name:'batman'},
            {img: './arquivos/lanternaVerde.png', name:'lanternaVerde'},
            {img: './arquivos/mulherMaravilha.png', name:'mulherMaravilha'},
        ]
    }
    //para usar os this, não podemos usar static
    inicializar(){
        //vai pegar todas as funcoes da classetela!
        //colcoa todos os herois na tela
        this.tela.atualizarImagens(this.heroiIniciais)
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }

    embaralhar(){
        const copias = this.heroiIniciais
        //duplicar herois
        .concat(this.heroiIniciais)
      

        //entrar nos objectos e embaralhar
        .map(item=>{
            return Object.assign({}, item, {id: Math.random()/0.5})
        })
        .sort(()=> Math.random()-0.5)
      
        
        this.tela.atualizarImagens(copias)
    }
    jogar(){
        
        this.embaralhar()
    }
}