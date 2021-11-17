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

        this.iconePadrao = './arquivos/IconePdrao.png'
        this.heroisEscondidos =[]
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
        //vamos esperar um segundo para atualziar a tela
        setTimeout(() => {
            this.escoderHerois(copias)
        }, 1000);
    }

    escoderHerois(herois){
        //vamos trocar a imagem de todos os herois existentes
        //pelo icone padrão
        //como fizemos no construtor, vamos extrai somente o necessario
        //usando a sintaxe({chave;1}) estanos falando que que vamos retornar
        //o que tiver dentro do parenteses
        //quando nao usamos: (exemplo do id), js entende que o nome
        //é o mesmo do valor . Ex: id: id, vara id
        //
        const heroisOcultos = herois.map(({id, nome})=>({
            id,
            nome,
            img: this.iconePadrao
        }))
        //atualizamos os herois  para trabalhar com eles depois 
        this.tela.atualizarImagens(heroisOcultos)
        this.heroisOcultos = heroisOcultos
    }
    jogar(){
        
        this.embaralhar()
    }
}