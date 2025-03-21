import * as promptSync from "prompt-sync";

const prompt = promptSync();

console.log("Este programa verifica se o numero e primo")
const numero: number = prompt("Digite um numero inteiro: ")

var contador: number = numero - 1
var primo:boolean = true
while( contador >= 2){
    // verifica se o número digitado pelo usário é divisível por cada antes dele
    if (numero % contador ==0){
        primo = false
        break
    }
    contador = contador -1
}
if(primo == true){
    console.log("Número: ", numero, "é primo")
}else{
    console.log("Número ", numero, "não é primo")
}
