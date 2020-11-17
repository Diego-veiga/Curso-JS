window.onload=()=>{
    console.log('Tela carregou')
    const btn = document.getElementById('btnCalcular')
    btn.onclick = click
    
    function obterValorInput(id){
        const item = document.getElementById(id)
        return item.value
    }
    
    function click(){
      const tipoOperaca = obterValorInput('tipoOperacao')
      const valor1 = obterValorInput('valor1')
      const valor2 = obterValorInput('valor2')

     const resultado = Matematica[tipoOperaca](
         valor1, valor2
     )
     document.getElementById('resultado').innerHTML=`A operacao de ${tipoOperaca}, ${valor1}, por ${valor2} e ${resultado}`
   
    }

   
}