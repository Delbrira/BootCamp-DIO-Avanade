const operacao = prompt('Escolha uma operação:\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão real(/)\n 5 - Divisão inteira(%)\n 6 - Potenciação(**)');

if(!operacao || operacao>7){
    alert('ERROR');
    operacao();
}

let n1 = Number(prompt('Primeiro valor'));
let n2 = Number(prompt('Segundo valor'));
let resultado;

function soma(){
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
}
function subtracao(){
    resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
}
function multiplicacao(){
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`);
}
function divisaoreal(){
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
}
function divisaointeira(){
    resultado = n1 % n2;
    alert(`O restante da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
}
function potenciacao(){
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
}

    

if(operacao == 1){
    soma();
} else if (operacao == 2){
    subtracao();
} else if (operacao == 3){
    multiplicacao();
} else if (operacao == 4){
    divisaoreal();
} else if (operacao == 5){
    divisaointeira();
} else if (operacao == 6){
    potenciacao();
}
    
// Comentando essa parte porque não funcionou, não sei o porque e a function não funcionou com o prompt.
// Posteriormente encontrando uma solução(da qual não encontrei no momento), estarei estarei compartilhando no GitHub.
//let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
// if (opcao == 1) {
//     operacao();
// } else if (opcao == 2) {
//     alert('Até mais!');
// } else {
//     alert('Digite uma opção válida!');
//     novaOperacao();
// }