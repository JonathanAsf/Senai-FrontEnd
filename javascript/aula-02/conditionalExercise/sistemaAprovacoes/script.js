// Crie um programa em JavaScript que receba uma nota de um aluno e informe a classificação de acordo com a seguinte escala:

//     Nota >= 9:  "Excelente"
//     Nota entre 7 e 9:  "Bom"
//     Nota entre 5 e 7: "Regular"
//     Nota < 5: "Insuficiente"

// Implemente a solução utilizando estruturas condicionais (if e else), garantindo que o programa retorne a classificação correspondente à nota informada.

nota = prompt("Digite a nota");

if (nota >= 9) {
  alert("Excelente");
} else if (nota > 7 && nota < 9) {
  alert("Bom");
} else if (nota >= 5 && nota <= 7) {
  alert("Regular");
} else {
  alert("Insuficiente");
}
