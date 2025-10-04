//Crie uma função chamada dobro(numero) que receba um número como parâmetro e exiba o dobro desse número no console.
numero = Number(prompt("Digite o numero: "))

function dobro (numero){
    return (numero*2)
}

alert(`O dobro do número ${numero} é: ${dobro(numero)}`)