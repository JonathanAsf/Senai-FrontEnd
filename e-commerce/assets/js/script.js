let input_cep = document.getElementById("input_cep")

input_cep.addEventListener("click", (event) =>{
    buscarCep(input_cep.value)
})

constBuscarCep = (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json`)
}

let nome = document.getElementById("nome")
let username = document.getElementById("username")

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) =>{
        console.log(data[0])
            nome.innerText = data[0].name
            username.innerText = data[0].username
    } )