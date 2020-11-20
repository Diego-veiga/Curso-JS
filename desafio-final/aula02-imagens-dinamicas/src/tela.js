const ID_CONTEUDO ="conteudo"
class tela{
    static obterCodigoHtml(item){
        return `
        <div class="col-md-3">
            <div class="card" style="width: 18rem;">
                <img src="${item.img}"  name="${item.nome} class="card-img-top" alt="...">
            </div>
            <br/>
          </div>
        `
    }
    static aleterarCOnteudoHTML(codigoHtml){
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }

    static gerarStringHtmlPelaImagem(item){
        //para cada item da lista, vai executar a funcao obterCodigoHtml
        //ao final, vai concatenar tudo em umaunica string
        return item.map(tela.obterCodigoHtml).join('')
    }

    static atualizarImagens(itens){
        const codigoHtml = tela.gerarStringHtmlPelaImagem(itens)
        tela.aleterarCOnteudoHTML(codigoHtml)
    }

}