// Escreva um programa em JavaScript que receba um número N e calcule a soma de todos os números pares entre 1 e N.  
// O programa deve seguir a seguinte lógica:
// O programa vai somar todos os números pares a partir de 2 até N.
// O valor da soma deve ser mostrado no final.

let N = Number(prompt("Digite um número N"));

function somarPares(N) {
    let soma = 0;
    for (let i = 2; i <= N; i += 2) {
        soma += i;
    }

    return soma;
}

alert(`A soma dos números pares entre 1 e ${N} é: ${somarPares(N)}`);