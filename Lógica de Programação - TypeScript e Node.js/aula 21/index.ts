import * as promptSync from "prompt-sync";

const prompt = promptSync();

const escolhaPrimeiroJogador = prompt("Par ou impar? ")

const numeroPrimeiroJogador = parseInt(prompt("Primeiro jogador: "))

const numeroSegundoJogador = parseInt(prompt("Segundo jogador: "))

const soma = numeroPrimeiroJogador + numeroSegundoJogador

if (soma % 2 === 0) {
    if (escolhaPrimeiroJogador === "par") {
        console.log("Primeiro jogador ganhou")
    } else {
        console.log("Segundo jogador ganhou")
    }
} else {
    if (escolhaPrimeiroJogador === "par") {
        console.log("Segundo jogador ganhou")
    } else {
        console.log("Primeiro jogador ganhou")
    }
}