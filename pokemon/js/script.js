let input_search = document.getElementById("input_search")
let pokemon_image = document.getElementById("pokemon_image")
let pokemon_number = document.getElementById("pokemon_number")
let pokemon_name = document.getElementById("pokemon_name")

let btn_search = document.getElementById("btn-search")

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
    })
}

btn_search.addEventListener("click",(e) => {
    e.preventDefault()
    renderPokemon(input_search.value)
})