"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var contador = 1;
while (contador <= 10) {
    var numero = parseInt(prompt("Digite um número inteiro: "));
    console.log(numero);
    contador = contador + 1;
}
console.log("Parou de contar");
