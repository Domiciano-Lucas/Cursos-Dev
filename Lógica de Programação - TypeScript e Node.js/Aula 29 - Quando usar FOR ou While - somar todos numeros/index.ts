import * as promptSync from "prompt-sync";

const prompt = promptSync();

var contador:number = 1
var soma:number = 0
while(true ){
//for( ; true;) neste caso usa-se o while, porque ficaria estranho a leitura usando a estrutura FOR
    var digitado:string = prompt("Digite um número (tecle s para sair): ")
    if(digitado == "s"){
        break
    }
    var numero:number = parseInt(digitado)
    soma = soma + numero
}
console.log("A soma dos numeros é: ", soma)