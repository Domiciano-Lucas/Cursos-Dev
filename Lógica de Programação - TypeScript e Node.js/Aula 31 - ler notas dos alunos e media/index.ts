import * as promptSync from 'prompt-sync';
const prompt = promptSync();

var soma: number = 0
var qtealunos: number = 0;
while(true){
    
    var nome: string = prompt("Digite nome do aluno(a) - digite 'sair' para finalizar: ");
    if(nome.toLowerCase() == "sair"){
        break;
    }
    var nota1: number = parseFloat(prompt("Digite a primeira nota: "));
    var nota2: number = parseFloat(prompt("Digite a segunda nota: "));
    var nota3: number = parseFloat(prompt("Digite a terceira nota: "));
    var nota4: number = parseFloat(prompt("Digite a quarta nota: "));
    var media: number = (nota1 + nota2 + nota3 + nota4) / 4;

    qtealunos++;
    soma = soma + media;

    console.log("A média do aluno(a)", nome, " é: ", media);
}
console.log("Total de alunos: ", qtealunos);

var mediaTurma: number = soma / qtealunos;
console.log("A média da turma é: ", mediaTurma);