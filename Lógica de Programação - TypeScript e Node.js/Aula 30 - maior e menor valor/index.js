"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var ultimoMaior = -1000000;
var ultimoMenor = 1000000;
for (var contador = 1; contador <= 10; contador++) {
    var numero = parseInt(prompt('Digite um número inteiro: '));
    if (numero > ultimoMaior) {
        ultimoMaior = numero;
    }
    if (numero < ultimoMenor) {
        ultimoMenor = numero;
    }
}
console.log('O maior número digitado foi: ', ultimoMaior);
console.log('O menor número digitado foi: ', ultimoMenor);
