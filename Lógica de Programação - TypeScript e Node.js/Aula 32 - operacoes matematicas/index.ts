import * as promptSync from "prompt-sync";
const prompt = promptSync();

var somaPares: number = 0;
var somaImpares: number = 0;
for (var contador: number =1; contador <= 10; contador++){
    var numero:number = parseInt(prompt("Digite um número: "));
    if(numero %2 == 0){//se for par
        somaPares = somaPares + numero;
    }else{//se for impar
        somaImpares = somaImpares + numero
    }
}
console.log("Soma dos pares: ", somaPares);
console.log("Soma dos ímpares: ", somaImpares);

var soma: number = somaImpares + somaPares;
var media:number = soma/10;

console.log("Média: ", media);