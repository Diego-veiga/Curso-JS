//meses 
const dataAniversario = new Date(2020,0,20)
console.log(dataAniversario)

const primeiroDataDoJS = new Date(0)
console.log(primeiroDataDoJS.getTime())


const hoje = new Date()
console.log(hoje.toString())
console.log(hoje.toLocaleString())

//formato global recomendado
console.log(hoje.toISOString())

const dia = hoje.getDate()
hoje.setDate(dia + 5) // soma + 5 dias da data de hoje 
hoje.setHours(10, 30, 0)

console.log(hoje)


console.log(`Dia:${hoje.getDate()}
              Mes: ${hoje.getMonth()}
              Ano: ${hoje.getFullYear()}
              Hora: ${hoje.getHours()}
              Minute: ${hoje.getMinutes()}
              Seconds: ${hoje.getSeconds()}`)



console.log(new Date(2020, 1,20) > new Date(2000, 1, 1))