// Crie uma função chamada multiplicar que receba dois número como parâmetro e exiba o resultado dessa multiplicação no console.

numero1 = Number(prompt("Digite o primeiro numero: "))
numero2 = Number(prompt("Digite o segundo numero: "))

function multiplica (numero1,numero2){
    return (numero1*numero2)
}

alert(`A multiplicação dos dois números é: ${multiplica(numero1, numero2)}`)
