const ID_CONTEUDO ="conteudo"
const ID_BTN_JOGAR = "jogar"
class Tela{
    static obterCodigoHtml(item){
        return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;" onclick="window.verificarSelecao('${item.id}','${item.nome}')">
                <img src="${item.img}"  name="${item.nome} class="card-img-top" alt="...">
            </div>
            <br/>
          </div>
        `
    }
    static configurarBotaoVerificarSelecao(funcaoOnclick){
        window.verificarSelecao =  funcaoOnclick        
    }
    static aleterarCOnteudoHTML(codigoHtml){
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }

    static gerarStringHtmlPelaImagem(itens){
        //para cada item da lista, vai executar a funcao obterCodigoHtml
        //ao final, vai concatenar tudo em umaunica string
        return itens.map(Tela.obterCodigoHtml).join('')
    }

    static atualizarImagens(itens){
        const codigoHtml = Tela.gerarStringHtmlPelaImagem(itens)
        Tela.aleterarCOnteudoHTML(codigoHtml)
    }

    static configurarBotaoJogar(funcaoClick){
        
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick=funcaoClick
    }
    static exibirHerois(nomeDoHeroi, img){
        const elementoHtml = document.getElementsByName(nomeDoHeroi)
        //para cada elemento encontrado na tela ,vamos alterar a imagem
        //para a imagem inicial dele 
        // com o forEach, para cada item, dentro dos () setaos o valor da image
        elementoHtml.forEach(item =>(item.src = img)
    }

}