import * as promptSync from "prompt-sync";
const prompt = promptSync();

console.log("Este é o jogo do 2 ou 1")
const jogador1: number = parseInt(prompt("Numero do jogador 1: "));
const jogador2: number = parseInt(prompt("Numero do jogador 2: "));
const jogador3: number = parseInt(prompt("Numero do jogador 3: "));

if((jogador1 == 1 || jogador1 ==2) && (jogador2 == 1 || jogador2 == 2) && (jogador3 == 1 || jogador3 == 2)){
    
    if (jogador1 != jogador2 && jogador1 != jogador3) {
        console.log("Jogador 1 ganha!");
    }else if (jogador2 != jogador1 && jogador2 != jogador3) {
        console.log("Jogador 2 ganha!");
    }else if(jogador3 != jogador1 && jogador3 != jogador2){
        console.log("Jogador 3 ganha!");
    }else{
        console.log("Ninguém ganhou!");
    }
}else{
    console.log("Amigos escolha 2 ou 1")
}