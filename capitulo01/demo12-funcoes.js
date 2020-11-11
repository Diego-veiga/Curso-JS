function nomeDaFuncao(parametro01){
    //bloco de codigo
}

function queDiaEhoje(){
    const data = new Date()
    console.log(`Hoje é dia: ${data.getDate()}`)
}

queDiaEhoje()


function soma(valor1, valor2){
    console.log(`A soma de ${valor1} + ${valor2} é `, valor1+valor2)
}

soma(10, 20)
soma(3,4)

function soma(valor1, valor2){
    return valor1 + valor2
}

const idade =20
const tamanho=10

const resultado = soma(idade,tamanho)
console.log('resultado',resultado)

function multipçlicar(valor1, valor2){
    const resultado = valor1*valor2
    return resultado
}
console.log(`O resultado  da multiplicação é:`,multipçlicar(10,30))

const funcionario1 ={
    nome: 'Zezinho',
    desconto: 0.2,
    salarioBruto: 2000,
    salarioLiquido: 0
}

const funcionario2 ={
    nome: 'Mariazinha',
    desconto: 0.1,
    salarioBruto: 2000, 
    salarioLiquido: 0
}

function calculaDesconto(salarioBruto, desconto){
    return salarioBruto - (salarioBruto* desconto)
}

funcionario1.salarioLiquido=calculaDesconto(funcionario1.salarioBruto,funcionario1.desconto)
funcionario2.salarioLiquido =calculaDesconto(funcionario2.salarioBruto, funcionario2.desconto)

console.log(
    `salario funcionario1: ${funcionario1.salarioLiquido}
    salario funcionario2: ${funcionario2.salarioLiquido}`)


