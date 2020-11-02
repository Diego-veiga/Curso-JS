elementButton = document.querySelector('.btnMedia');

elementButton.onclick = ()=>{
    var elementInput1 = document.querySelector('.nota1');
    var elementInput2 = document.querySelector('.nota2');
    
    v1 = Number(elementInput1.value);
    v2 = Number(elementInput2.value);
    
    let final = Calculamedia(v1, v2)
    alert(`Sua media final é:${final}`);


}

function Calculamedia(v1,v2){
    let nota1 = v1 * 0.35;
    let nota2  = v2 * 0.75;
    
    let notaFinal = (nota1 + nota2);
     let nf =notaFinal.toFixed(1);

     return nf ;

}