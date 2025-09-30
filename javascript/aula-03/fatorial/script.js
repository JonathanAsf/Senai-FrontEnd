// Crie um programa que calcule o fatorial de um número. O fatorial de um número é o resultado de multiplicar todos os números inteiros de 1 até esse número.  
let numero = Number(prompt("Digite um número para calcular o fatorial"));

function fatorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

alert(`O fatorial de ${numero} é: ${fatorial(numero)}`);