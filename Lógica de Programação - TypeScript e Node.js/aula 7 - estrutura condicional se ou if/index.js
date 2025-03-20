"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptsync = require("prompt-sync");
var prompt = promptsync();
var numero1 = parseInt(prompt("Digite um numero: "));
var numero2 = parseInt(prompt("Digite um numero: "));
if (numero1 > numero2) {
    console.log(numero1);
}
else {
    console.log(numero2);
}
