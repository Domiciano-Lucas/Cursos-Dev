"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var somaPares = 0;
var somaImpares = 0;
for (var contador = 1; contador <= 10; contador++) {
    var numero = parseInt(prompt("Digite um número: "));
    if (numero % 2 == 0) { //se for par
        somaPares = somaPares + numero;
    }
    else { //se for impar
        somaImpares = somaImpares + numero;
    }
}
console.log("Soma dos pares: ", somaPares);
console.log("Soma dos ímpares: ", somaImpares);
var soma = somaImpares + somaPares;
var media = soma / 10;
console.log("Média: ", media);
