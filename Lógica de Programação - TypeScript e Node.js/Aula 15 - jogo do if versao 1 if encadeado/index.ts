import * as promptsync from'prompt-sync'

var prompt = promptsync()

var numero : number = parseFloat(prompt("Digite um numero para ganhar pontos: "))

if (isNaN(numero)){
    console.log("Erro")
}else{

    

var pontos: number

if (numero >= 8){
    if (numero >= 15){
        pontos = 5
    }else{
        pontos = 10
    }
} else {
    if (numero >= 5){
        pontos = 30
    }else{
        pontos = 50
    }
}
console.log("voce ganhou ", pontos ,"pontos")
    
}