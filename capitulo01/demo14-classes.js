class Heroi{
  atacar(){
      console.log(`atacou`)
  }
  defender(){
      console.log(`defendeu`)
  }

}

const heroi = new Heroi()
heroi.atacar()
heroi.defender()

class Heroi2{
    constructor(nome, idade){
        this.nome= nome
        this.idade = idade
    }
    atacar(){
        console.log(`O ${this.nome} atacou!!`)
    }
}

const heroi2 = new Heroi2('Diego',20)
heroi2.atacar()


class Heroi3{
    static ObterAnodeNascimento(idade){
        return 2020 -idade
    }
}

const heroi3 = Heroi3.ObterAnodeNascimento(2000)
console.log(`O ano de nascimento é ${heroi3} `)

class Test { 
    hello() {
         console.log('Olá')
    }
}
new Test().hello() 
 new Test()['hello']()