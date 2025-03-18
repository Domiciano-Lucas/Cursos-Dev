import * as promptsync from 'prompt-sync'

var prompt = promptsync ()

var numero1 = parseInt(prompt("digite um numero 1 : "))

var numero2 = parseInt(prompt("digite um numero 2 : "))

var numero3 = parseInt(prompt("digite um numero 3 : "))

if (numero1> numero2 && numero1>numero3){
    console.log(numero1)
}else{
    if(numero2>numero1 && numero2>numero3){
        console.log(numero2)
    }else{
        if(numero3>numero1 && numero3>numero2){
            console.log(numero3)
        }else{
            console.log(numero1) //caso os numeros 1, 2 e 3, sejão iguais, imprimir qlqr um deles
        }
    }
}