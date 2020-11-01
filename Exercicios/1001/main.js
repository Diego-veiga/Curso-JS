let btnCacular = document.querySelector('.btnCalcular') 
let element1 = document.querySelector(".vl1");
let element2 = document.querySelector(".vl2");

btnCacular.onclick = ()=>{
    let valor1 = element1.value;
    let valor2 = element2.value;
    let valorTotal = Number(valor1) + Number(valor2);
    alert(`o valor de X:  ${valorTotal}`);
}



