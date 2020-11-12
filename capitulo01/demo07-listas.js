const minhaLista =[]

const minhaListaDeTarefas =['mandar e-mail', 'colocar comida para o dog',   'limpar o quarto']

// imprmindo a posções da lista
console.log('--------imprmindo a posções da lista -----------')
console.log(minhaListaDeTarefas[0])
console.log(minhaListaDeTarefas[1])
console.log(minhaListaDeTarefas[4])

//tamanho do array
console.log(`quantidade de itens no array`,minhaListaDeTarefas.length)


//adicionar item na lista  
console.log('--------adicionar item na lista -----------')
minhaListaDeTarefas.push('formatar computador');
console.log(minhaListaDeTarefas);

//removendo ultimo  item da lista
console.log('--------removendo ultimo  item da lista-----------')
minhaListaDeTarefas.pop();
console.log(minhaListaDeTarefas);

//removendo o primeiro item da lista
console.log('--------removendo o primeiro item da lista-------------')
minhaListaDeTarefas.shift();
console.log(minhaListaDeTarefas);


//remove um item especifico a partir de indice 
console.log('------------remove um item especifico a partir de indice -------------')
minhaListaDeTarefas.splice(2,1);
console.log(minhaListaDeTarefas);



const itens =[
    1,'computador',0.22
]

//verifica se um tipo é array
console.log(typeof(itens));

//verifica se é um array da forma correta
console.log(Array.isArray(itens));

//ordenar
const numeros = [3,2,1,0]
console.log(numeros.sort());

const letras =['a','s','r','t']
console.log(letras.sort())

//juntar itens 
const novo = itens.concat([1,2,3]);
console.log(novo);

//juntar arrays em uma string 
console.log(itens.join(','))


let index = itens.indexOf('computador')
console.log(index)


let item = itens.indexOf('computador')
console.log(itens[index])
