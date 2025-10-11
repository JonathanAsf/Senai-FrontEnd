let input_search = document.getElementById("input_search")
let pokemon_image = document.getElementById("pokemon_image")
let pokemon_number = document.getElementById("pokemon_number")
let pokemon_name = document.getElementById("pokemon_name")

let btn_search = document.getElementById("btn-search")
let btn_next = document.getElementById("btn-next")
let btn_prev = document.getElementById("btn-prev")

let search_pokemon = 1

function renderPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data)=>{
        console.log()
        pokemon_name.innerText = data.name
        pokemon_number.innerText = data.id
        pokemon_image.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
        input_search.value = ""
        search_pokemon = data.id
    })
}

btn_search.addEventListener("click",(e) => {
    e.preventDefault()
    renderPokemon(input_search.value)
})

btn_next.addEventListener("click", () => {
    search_pokemon ++
    renderPokemon(search_pokemon)
})

btn_prev.addEventListener("click", () => {
    if(search_pokemon > 1){
    search_pokemon --
    renderPokemon(search_pokemon)    
    }
})

renderPokemon(1)