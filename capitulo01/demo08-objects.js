const heroi ={
    nome: 'Minas',
    idade: 100,
    sexo: 'Masculino'

}

console.log('nome', heroi.nome)
console.log('idade', heroi['idade'])
console.log('sexo', heroi.sexo)
console.log('naoExiste', heroi.naoExiste)

heroi.id = 0001
console.log(heroi)

//saber as chaves 
console.log(Object.keys(heroi))

//saber valores 
console.log(Object.values(heroi))
const passoa ={
    tamanho: '10 metros'
}

const novoObj = Object.assign(heroi, passoa)
delete novoObj.nome
console.log('NOVO OBJETO',novoObj)

