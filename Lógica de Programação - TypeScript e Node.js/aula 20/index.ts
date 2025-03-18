import * as promptSync from "prompt-sync";
const prompt = promptSync();
const dia: number = parseInt(prompt("Digite o dia: "));
const mes: number = parseInt(prompt("Digite o mês: "));
const ano: number = parseInt(prompt("Digite o ano: "));

const hoje: Date = new Date();
const diaHoje: number =  hoje.getDate();
const mesHoje: number =  hoje.getMonth() +1
const anoHoje: number =  hoje.getFullYear();

console.log("A data de hoje é: ", diaHoje, "/", mesHoje, "/", anoHoje);
var idade: number = anoHoje - ano;
if (mes > mesHoje){
    idade = idade - 1
}else if( mes == mesHoje){
    if(dia > diaHoje){
        idade = idade - 1
    }
}
console.log("Sua idade é: ", idade)