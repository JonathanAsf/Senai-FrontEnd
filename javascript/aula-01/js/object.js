ano_atual = 2025

let aluno = {
    nome: "Jonathan Almeida",
    ano_nascimento: 2003,
    idade: ano_atual-ano_nascimento,  
    curso: "Front-End", 
}

const livro = {
    titulo: "Memórias do Subsolo",
    autor: "Fiodor Dostoievisk",
    paginas: 250,
}


console.table(aluno)

console.log(`O nome do aluno é: ${aluno.nome}`)
console.log(`O livro ${livro.titulo}, escrito pelo ${livro.autor} possui ${livro.paginas}`)

console.table(livro)

