import * as promptsync from'prompt-sync'

var prompt = promptsync()

var numero1: number = parseInt(prompt("primeiro numero: "))

var numero2: number = parseInt(prompt("segundo numero: "))

var numero3: number = parseInt(prompt("terceiro numero: "))

if(numero1 > numero2 && numero1 > numero3){
    console.log("O maior é",numero1)
}else if(numero2 > numero1 && numero2 > numero3){
    console.log("o maior é", numero2)
}else if(numero3 > numero1 && numero3> numero2){
    console.log("o maior é", numero3)
}else {
    console.log("os numeros sao iguais")
}