"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptsync = require("prompt-sync");
var prompt = promptsync();
var numero1 = parseFloat(prompt("Digite o primeiro numero: "));
var operador = prompt("Digite um operador: ");
var numero2 = parseFloat(prompt("Digite o segundo numero: "));
var resultado = undefined;
if (operador == "*") {
    resultado = numero1 * numero2;
}
else if (operador == "-") {
    resultado = numero1 - numero2;
}
else if (operador == "+") {
    resultado = numero1 + numero2;
}
else if (operador == "/") {
    resultado = numero1 / numero2;
}
if (resultado == undefined) {
    console.log("operador não reconhecido");
}
else {
    console.log(resultado);
}
