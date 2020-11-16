const textoPar ='Par'
const textoImpar='Impar'
for(let index =0; index<=10; index++){
    const descisao = index %2 === 0 ? textoPar : textoImpar
    console.log(`O numero ${index} é ${descisao}`)
}


const minhaListaDeTarefas =[
    {
        id: parseInt(Math.random()*10),
        nome:'Zezinho',
        superPoder: 'Valoz'
    },
    {
        id:parseInt(Math.random()*10),
        nome:'Mariazinha',
        superPoder:'super força'
    }
]

for(let index = 0; index<minhaListaDeTarefas.length; index++){
    const item =minhaListaDeTarefas[index]
    console.log(
        `id: ${index.id}
        nome: ${item.nome}`
    )

}

//não precisa usar contador
for( const index in minhaListaDeTarefas){
    const item =  minhaListaDeTarefas[index]
    console.log(`Nome:`,item.nome)
}
//não precisa usar index
for(const item of minhaListaDeTarefas){
    console.log(`Nome:`, item.nome)
}