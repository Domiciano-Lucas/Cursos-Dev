import  * as promptsync from 'prompt-sync';

const prompt = promptsync();

const calculo: string = prompt('Digite a operação que deseja realizar(com espaços): ');
//9 * 3
var posicaoOperador: number
var numero1: number
var numero2: number
var resultado: number | undefined = undefined

if (calculo.indexOf("*")>=0) {
    posicaoOperador = calculo.indexOf("*");
    numero1 = parseFloat(calculo.substring(0, posicaoOperador));
    numero2 = parseFloat(calculo.substring(posicaoOperador + 1));
    resultado = numero1 * numero2;
}else if(calculo.indexOf("/")>=0){
    posicaoOperador = calculo.indexOf("/");
    numero1 = parseFloat(calculo.substring(0, posicaoOperador));
    numero2 = parseFloat(calculo.substring(posicaoOperador + 1));
    resultado = numero1 / numero2;
}else if(calculo.indexOf("+")>=0){
    posicaoOperador = calculo.indexOf("+");
    numero1 = parseFloat(calculo.substring(0, posicaoOperador));
    numero2 = parseFloat(calculo.substring(posicaoOperador + 1));
    resultado = numero1 + numero2;
}else if(calculo.indexOf("-")>=0){
    posicaoOperador = calculo.indexOf("-");
    numero1 = parseFloat(calculo.substring(0, posicaoOperador));
    numero2 = parseFloat(calculo.substring(posicaoOperador + 1));
    resultado = numero1 - numero2;
}
console.log(resultado);