// fetch("https://jsonplaceholder.typicode.com/users")
//      .then ((res) => res.json())
//      .then((res) => console.log(res[7].name))

let nome = document.getElementById("nome")
let username = document.getElementById("username")

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) =>{
        console.log(data[0])
            nome.innerText = data[0].name
            username.innerText = data[0].username
    } )