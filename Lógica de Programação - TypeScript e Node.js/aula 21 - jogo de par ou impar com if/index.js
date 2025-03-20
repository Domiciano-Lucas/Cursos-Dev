"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var escolhaPrimeiroJogador = prompt("Par ou impar? ");
var numeroPrimeiroJogador = parseInt(prompt("Primeiro jogador: "));
var numeroSegundoJogador = parseInt(prompt("Segundo jogador: "));
var soma = numeroPrimeiroJogador + numeroSegundoJogador;
if (soma % 2 === 0) {
    if (escolhaPrimeiroJogador === "par") {
        console.log("Primeiro jogador ganhou");
    }
    else {
        console.log("Segundo jogador ganhou");
    }
}
else {
    if (escolhaPrimeiroJogador === "par") {
        console.log("Segundo jogador ganhou");
    }
    else {
        console.log("Primeiro jogador ganhou");
    }
}
