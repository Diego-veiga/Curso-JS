let elementButton = document.querySelector('.btnCalcular');
let n= 3.14159;

elementButton.onclick = ()=>{
     let elementInput = document.querySelector('.vl');
     let raio = Number(elementInput.value);

     let area = n *(raio**2);
     alert(area.toFixed(4));
}

