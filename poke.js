let bt = document.getElementById('bt');
let poke = document.getElementById('poke');
let poke_img = document.getElementById('poke_img');
function searchPokemon(){
    let input = poke.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
    .then(response => response.json())
    .then(data =>{  
        console.log(data)
        poke_img.src = data.sprites.front_default;
    })
    .catch(error => console.log(error));
}
bt.addEventListener('click', searchPokemon);