"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptsync = require("prompt-sync");
var prompt = promptsync();
var numero = parseFloat(prompt("Digite um numero para ganhar pontos: "));
var pontos;
if (isNaN(numero)) {
    console.log("erro");
}
else {
    var pontos;
    if (numero >= 8) {
        //direita do 8
        if (numero >= 15) {
            //direita do 15
            if (numero >= 20) {
                //direita do 20
                pontos = 5;
            }
            else {
                //esquerda do 20
                pontos = 30;
            }
        }
        else {
            //esquerda do 15
            if (numero >= 12) {
                //direita do 12
                pontos = 80;
            }
            else {
                //esquerda do 12
                pontos = 100;
            }
        }
    }
    else {
        if (numero >= 5) {
            // direita do 5
            if (numero >= 6) {
                //direita do 6
                pontos = 25;
            }
            else {
                //esquerda do 6
                pontos = 10;
            }
        }
        else {
            //esquerda do 5
            if (numero >= 1) {
                //direita do 1
                pontos = 50;
            }
            else {
                //esquerda do 1
                pontos = 20;
            }
        }
    }
}
console.log("Voce ganhou", pontos, "pointos");
