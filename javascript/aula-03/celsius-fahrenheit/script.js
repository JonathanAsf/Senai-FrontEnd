//Crie uma função chamada celsiusParaFahrenheit(celsius) que converta e retorne a temperatura em Fahrenheit.
celsius = Number(prompt("Digite uma temperatura em ºC (Graus Celsius): "))

function convert (celsius){
    return (celsius * 9 / 5)
}

alert(`${celsius}ºC em fahrenheit representa: ${convert(celsius)}ºF`)

