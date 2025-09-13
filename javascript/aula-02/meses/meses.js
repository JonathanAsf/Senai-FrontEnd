// Crie um programa em JavaScript que utilize a estrutura switch para exibir o nome do mês com base no número informado pelo usuário (de 1 a 5). O programa deve funcionar da seguinte forma:

//     1: Janeiro
//     2: Fevereiro
//     3: Março
//     4: Abril
//     5: Maio
//     Qualquer outro número: "Mês inválido"

// Exemplo de uso:

// Se o usuário digitar 3, o programa deve exibir:
// "Março"

// Implemente a solução utilizando apenas a estrutura switch.

mes = 6

switch(mes){
    case 1:
        console.log("Janeiro")
        break
    case 2:
        console.log("Fevereiro")
        break
    case 3:
        console.log("Março")
        break
    case 4:
        console.log("Abril")
        break
    case 5:
        console.log("Maio")
        break
    default:
        console.log("Mês inválido")
        break
}