// Escreva um programa em JavaScript que receba as notas de um aluno em 5 disciplinas e calcule a média final. Depois, o programa deve classificar a média de acordo com os seguintes critérios:  

//     Média >= 9: "Excelente"  
//     Média entre 7 e 9: "Bom"  
//     Média entre 5 e 7: "Regular"  
//     Média < 5: "Insuficiente"

nota1 = Number(prompt("Digite a primeira nota"))
nota2 = Number(prompt("Digite a segunda nota"))
nota3 = Number(prompt("Digite a terceira nota"))
nota4 = Number(prompt("Digite a quarta nota"))
nota5 = Number(prompt("Digite a quinta nota"))
media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

if (media >= 9){
    alert("Excelente");
}else if(media >= 7 || media < 9){
    alert("Bom");
}else if(media >= 5 || media < 7){
    alert("Regular")
}else{
    alert("Excelente")
    alert("Insuficiente")
}
