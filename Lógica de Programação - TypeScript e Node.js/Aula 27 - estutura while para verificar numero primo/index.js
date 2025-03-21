"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
console.log("Este programa verifica se o numero e primo");
var numero = prompt("Digite um numero inteiro: ");
var contador = numero - 1;
var primo = true;
while (contador >= 2) {
    // verifica se o número digitado pelo usário é divisível por cada antes dele
    if (numero % contador == 0) {
        primo = false;
        break;
    }
    contador = contador - 1;
}
if (primo == true) {
    console.log("Número: ", numero, "é primo");
}
else {
    console.log("Número ", numero, "não é primo");
}
