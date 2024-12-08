alert('Boas vindas ao jogo do Número Secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log (numeroSecreto);
let chute;
let tentativas = 0;


while (chute != numeroSecreto) {
 chute = prompt (`Escolha um número entre 1 e ${numeroMaximo}`);
 tentativas++;

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert (`O número secreto é menor do que ${chute}`);
        } else {
            alert (`O número secreto é maior do que ${chute}`);
        }
    }
}


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert (`Isso ai! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/*
if (tentativas > 1) {
    alert (`Isso ai! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert (`Isso ai! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
*/
