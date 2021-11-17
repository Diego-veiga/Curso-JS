class jogoDaMemoria{
    //se mandar um obj={tela:1, idade:2, etc:3}
    //vai ignorar o resto das propriedades e pegar somebte a propriedade
    //tela
    constructor({tela}){
        this.tela=tela
        //caminho do arquivo, sempre relativo
        //ao index

        this.heroiIniciais =[
            {img: './arquivos/heroi1.png', nome:'batman'},
            {img: './arquivos/lanternaVerde.png', nome:'lanternaVerde'},
            {img: './arquivos/mulherMaravilha.png', nome:'mulherMaravilha'},
        ]

        this.iconePadrao = './arquivos/IconePdrao.png'
        this.heroisEscondidos =[]
        this.heroisSelecionados=[]
    }
    //para usar os this, não podemos usar static
    inicializar(){
        //vai pegar todas as funcoes da classetela!
        //colcoa todos os herois na tela
        this.tela.atualizarImagens(this.heroiIniciais)
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
    }

    verificarSelecao(id, nome){
        const item ={id, nome}
        const heroisSelecionados= this.heroisSelecionados.length
        
        //vamos verificar a quantidade de herois selecionados
        //e tomar ação se escolheu certo ou errado
        
        switch(heroisSelecionados){
            case 0:
                //adiciona a esolha na lista, esperando pela proxima 
                //clciada 
                this.heroisSelecionados.push(item)
            break;
            case 1:
                //se a quantidade de esolhidos for 1, significa que o usuario so pdoe escolher mais um 
                //vamos obter o primeiro item da lista
                const[opcao1] = this.heroisSelecionados
                //zerar itens para nao selecionar mais de dois 
                this.heroisSelecionados = []
                //conferimosse os nome e ids batem conforme o esperado
                if(opcao1.nome === item.nome && opcao1.id !== item.id){
                    //aqui verificamos se são ids difernetes para o usuario não clciar duas vezes no mesmo 
                   this.exibirHerois(item.nome)
                    //para de executar 
                    return
                }
                alert('Combinação incorreta !')
                break;

        }

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
    exibirHerois(nomeDeHeroi){
        //vamos procurar esse heroi pelo nome em nossos herois iniciais
        //vamos obter somete a imagem dele 
        const {img} = this.heroiIniciais.find(({nome})=> nomeDeHeroi === nome)
        this.tela.exibirHerois(nomeDeHeroi, img)
    }
    jogar(){
        
        this.embaralhar()
    }
}