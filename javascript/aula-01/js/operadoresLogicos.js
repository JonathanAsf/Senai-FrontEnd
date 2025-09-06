// && = And
// || = Or
//    = Not

// dia_util = false
// dia_atual = true
// logado = true

// console.log(dia_atual == true || dia_util == true)
// console.log(dia_atual  == true && dia_util == true)
// console.log(logado)
// console.log(!logado)

// Exercicio 1 -> A pessoa pode votar apenas se tiver idade >= a 18 e titulo de eleitor
let idade = 18
let temTitulo = true

console.log(`A pessoa pode votar? ${idade >= 18 && temTitulo === true}`)

//Exercício 2 -> Crie duas variáveis, valorCompra(numero) e clienteFrequente(booleano)
//A promoção só é válida se o valor da compra for maior que 100 reais e o cliente for frequente

valorCompra = 110
clienteFrequente = true

console.log(`Desconto aplicado: ${valorCompra > 100 && clienteFrequente == true}`)


//Exercício 3 -> Acesso Liberado?
//crie variáveis:
//idade(numero)
//senha(texto)
//senhaCorreta(comparação)
//Acesso ao sistema só é liberado se a idade for maior ou igual a 18 e a senha for igual a "admin1"

// senha = admin1

// console.log(`Acesso ao sistema: ${senha} == "admin1" && ${idade >= 18}`)
