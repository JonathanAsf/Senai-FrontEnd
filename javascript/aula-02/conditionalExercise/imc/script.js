// Escreva um programa em JavaScript que calcule o IMC (Índice de Massa Corporal) de uma pessoa a partir de seu peso e altura, e informe a classificação de acordo com os seguintes critérios:

//     IMC < 18.5: Abaixo do peso
//     18.5 <= IMC < 24.9: Peso normal
//     25 <= IMC < 29.9: Sobrepeso Obesidade
//     30 <= IMC < 34.9: Obesidade moderada (grau I)
//     35 <= IMC < 39.9: Obesidade severa (grau II)
//     IMC >= 40: Obesidade grave

// A fórmula do IMC é:

// IMC = peso (kg) / altura (m)2

// Implemente a solução para que o programa receba o peso e a altura do usuário, calcule o IMC e informe a classificação correspondente.

peso = Number(prompt("Digite o peso (kg)"));
altura = Number(prompt("Digite a altura em metros (m)"));
imc = peso / (altura * altura);

if (imc <= 18.5) {
  alert(`Peso normal. IMC = ${imc}`);
} else if (imc > 18.5 && imc <= 24.9) {
  alert(`Sobrepeso Obesidade. IMC = ${imc}`);
} else if (imc > 24.9 && imc <= 30) {
  alert(`Sobrepeso Obesidade. IMC = ${imc}`);
} else if (imc >= 30 && imc <= 34.9) {
  alert(`Obesidade severa (grau I). IMC = ${imc}`);
} else if (imc > 35 && imc <= 39.9) {
  alert(`Obesidade severa (grau II). IMC = ${imc}`);
} else {
  alert(`Obesidade grave. IMC = ${imc}`);
}
