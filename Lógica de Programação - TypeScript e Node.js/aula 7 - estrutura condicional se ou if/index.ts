import * as promptsync from'prompt-sync'

var prompt = promptsync()

var numero1: number = parseInt(prompt("Digite um numero: "))
var numero2: number = parseInt(prompt("Digite um numero: "))

if (numero1 > numero2){
    console.log(numero1)
}else{
    console.log(numero2)
}

