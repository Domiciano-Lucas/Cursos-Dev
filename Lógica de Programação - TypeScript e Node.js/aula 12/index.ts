import * as promptsync from'prompt-sync'

var prompt = promptsync()

var nota1: number = parseFloat(prompt("nota 1: "))
var nota2: number = parseFloat(prompt("nota 2: "))
var nota3: number = parseFloat(prompt("nota 3: "))
var nota4: number = parseFloat(prompt("nota 4: "))

var media: number = (nota1 + nota2 + nota3 + nota4)/4

if (media>= 6){
    console.log("Aprovado")
}else{
    var notaRecuperacao: number = parseFloat(prompt("Nota de rec: "))
    if(notaRecuperacao>=6){
        console.log("Aprovado")
    }else{
        console.log("reprovado")
    }
    
}