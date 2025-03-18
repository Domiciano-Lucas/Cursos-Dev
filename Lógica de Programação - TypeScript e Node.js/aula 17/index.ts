import * as promptsync from'prompt-sync'

var prompt = promptsync()

var numero1: number = parseFloat(prompt("Digite o primeiro numero: "))

var operador : string = prompt ("Digite um operador: ")

var numero2: number = parseFloat(prompt("Digite o segundo numero: "))

var resultado: number | undefined = undefined

if (operador == "*"){
   resultado = numero1 * numero2
}else if (operador == "-"){
    resultado = numero1 - numero2
}else if(operador == "+"){
    resultado = numero1 + numero2
}else if (operador == "/"){
    resultado = numero1 / numero2
}
if (resultado == undefined){
    console.log("operador não reconhecido")
}else{
    console.log(resultado)
}



