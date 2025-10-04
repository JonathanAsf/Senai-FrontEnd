// Crie uma função chamada `somar` que receba dois números como parâmetro e exiba a soma no console.
numero1 = Number(prompt("Digite o primeiro numero: "))
numero2 = Number(prompt("Digite o segundo numero: "))

function soma (numero1,numero2){
    return (numero1+numero2)
}

alert(`A soma dos dois números é: ${soma(numero1, numero2)}`)