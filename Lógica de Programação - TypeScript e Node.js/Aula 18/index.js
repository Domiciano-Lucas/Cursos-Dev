"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptsync = require("prompt-sync");
var prompt = promptsync();
var calculo = prompt('Digite a operação que deseja realizar(com espaços): ');
//9 * 3
var posicaoOperador;
var numero1;
var numero2;
var resultado = undefined;
if (calculo.indexOf("*") >= 0) {
    posicaoOperador = calculo.indexOf("*");
    numero1 = parseFloat(calculo.substring(0, posicaoOperador));
    numero2 = parseFloat(calculo.substring(posicaoOperador + 1));
    resultado = numero1 * numero2;
}
else if (calculo.indexOf("/") >= 0) {
    posicaoOperador = calculo.indexOf("/");
    numero1 = parseFloat(calculo.substring(0, posicaoOperador));
    numero2 = parseFloat(calculo.substring(posicaoOperador + 1));
    resultado = numero1 / numero2;
}
else if (calculo.indexOf("+") >= 0) {
    posicaoOperador = calculo.indexOf("+");
    numero1 = parseFloat(calculo.substring(0, posicaoOperador));
    numero2 = parseFloat(calculo.substring(posicaoOperador + 1));
    resultado = numero1 + numero2;
}
else if (calculo.indexOf("-") >= 0) {
    posicaoOperador = calculo.indexOf("-");
    numero1 = parseFloat(calculo.substring(0, posicaoOperador));
    numero2 = parseFloat(calculo.substring(posicaoOperador + 1));
    resultado = numero1 - numero2;
}
console.log(resultado);
