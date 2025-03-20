"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var dia = parseInt(prompt("Digite o dia: "));
var mes = parseInt(prompt("Digite o mês: "));
var ano = parseInt(prompt("Digite o ano: "));
var hoje = new Date();
var diaHoje = hoje.getDate();
var mesHoje = hoje.getMonth() + 1;
var anoHoje = hoje.getFullYear();
console.log("A data de hoje é: ", diaHoje, "/", mesHoje, "/", anoHoje);
var idade = anoHoje - ano;
if (mes > mesHoje) {
    idade = idade - 1;
}
else if (mes == mesHoje) {
    if (dia > diaHoje) {
        idade = idade - 1;
    }
}
console.log("Sua idade é: ", idade);
