import * as promptsync from'prompt-sync'

var A: number = 35
var B: number = 32
var C: number = 30

// se A>B e B>C, imprima feliz
// se A<B e B>C, imprima confuso
// se A>B e B não é igual a C, imprima triste

if (A>B && B>C){
    console.log("Feliz")
}else{
    if(A<B || B>C){
        console.log("Confuso")  
    }else if (A>B && !(B == C)){
        console.log("Triste")
    }
}
