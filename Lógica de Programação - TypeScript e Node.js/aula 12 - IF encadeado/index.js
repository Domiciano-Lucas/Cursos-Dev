"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptsync = require("prompt-sync");
var prompt = promptsync();
var nota1 = parseFloat(prompt("nota 1: "));
var nota2 = parseFloat(prompt("nota 2: "));
var nota3 = parseFloat(prompt("nota 3: "));
var nota4 = parseFloat(prompt("nota 4: "));
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if (media >= 6) {
    console.log("Aprovado");
}
else {
    var notaRecuperacao = parseFloat(prompt("Nota de rec: "));
    if (notaRecuperacao >= 6) {
        console.log("Aprovado");
    }
    else {
        console.log("reprovado");
    }
}
