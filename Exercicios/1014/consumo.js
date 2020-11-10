let btnCalcular = document.querySelector('.calcular');

btnCalcular.onclick=()=>{

    let dist = Number(document.querySelector('.distancia').value);
    let con = Number(document.querySelector('.consumo').value);

   let total= cacularConsumo(dist, con)
    console.log(`${total} KM/l`)
    
}

function cacularConsumo(distancia, consumo){

    let km = distancia/consumo;
    return km.toFixed(2)

}