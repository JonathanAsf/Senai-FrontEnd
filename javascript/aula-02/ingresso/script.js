// Escreva um programa em JavaScript que receba a idade de uma pessoa e informe o valor do //ingresso de acordo com a seguinte tabela:

//     Menores de 12 anos: R$ 10
//     Entre 12 e 17 anos: R$ 15
//     Entre 18 e 59 anos: R$ 30
//     A partir de 60 anos: R$ 20

// Implemente a solução utilizando estruturas condicionais (if e else) para verificar a faixa etária e retornar o valor correto do ingresso.

idade = prompt("Digite a idade");

if (idade < 12) {
  alert("R$10");
} else if (idade >= 12 && idade <= 17) {
  alert("R$15");
} else if (idade >= 18 && idade <= 59) {
  alert("R$30");
} else {
  alert("R$20");
}
