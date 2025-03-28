"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var soma = 0;
var qtealunos = 0;
while (true) {
    var nome = prompt("Digite nome do aluno(a) - digite 'sair' para finalizar: ");
    if (nome.toLowerCase() == "sair") {
        break;
    }
    var nota1 = parseFloat(prompt("Digite a primeira nota: "));
    var nota2 = parseFloat(prompt("Digite a segunda nota: "));
    var nota3 = parseFloat(prompt("Digite a terceira nota: "));
    var nota4 = parseFloat(prompt("Digite a quarta nota: "));
    var media = (nota1 + nota2 + nota3 + nota4) / 4;
    qtealunos++;
    soma = soma + media;
    console.log("A média do aluno(a)", nome, " é: ", media);
}
console.log("Total de alunos: ", qtealunos);
var mediaTurma = soma / qtealunos;
console.log("A média da turma é: ", mediaTurma);
