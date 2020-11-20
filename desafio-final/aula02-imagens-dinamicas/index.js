function onLoad(){
    //console.log('Carregou a tels!!', tela, jogoDaMemoria)

    const heroi ={
        img:'./arquivos/lanternaVerde.png',
        nome:'batman'
    }

    const codigoHtml = tela.obterCodigoHtml(heroi)
    console.log(codigoHtml)

    tela.aleterarCOnteudoHTML(codigoHtml)

}

window.onload = onLoad