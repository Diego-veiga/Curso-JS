 var btn=document.querySelector('.calcular');

 btn.onclick =()=>{

     var eleme1 = document.querySelector('.valor1');
     var eleme2 = document.querySelector('.valor2');
     var eleme3 = document.querySelector('.valor3');
     var eleme4 = document.querySelector('.valor4');

    let v1 = Number(eleme1.value);
    let v2 = Number(eleme2.value)
    let v3 = Number(eleme3.value)
    let v4 = Number(eleme4.value)

     
    let valor  = CaculaDiferenca(v1, v2, v3,v4);
    alert(valor)

 }


 function CaculaDiferenca(valor1, valor2, valor3, valor4){

     let diferenca =((valor1 * valor2) - (valor3 * valor4))
     return diferenca
 }