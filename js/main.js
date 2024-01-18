const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
const SPACE_URL = 'https://pokeapi.co/docs/v2#pokemon-species';



document.getElementById('get-btn').addEventListener('click', async () => {
    const text = document.getElementById('poke-name').value.toLowerCase();
    const pokemon = await fetchPokemon(text);
    //convertir el Id a cadena antes de llamarlo a localStorage
    localStorage.setItem('currentPokeId', String(pokemon.id));
    //const card = createPokemonCard(pokemon);
    //document.body.appendChild(card);

    //console.log(pokemon.name);
})


//Recupera un id de pokemon almacenado y creamos una tarjeta del pokemon

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('currentPokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    //const pokemon = await fetchPokemon(initialId);
    await fetchPokemon(initialId);
    //crear la tarjeta y que se agrege a document
    //const card = createPokemonCard (pokemon);
    //document.body.appendChild(card);

    //console.log(pokemon.name);
})


// obtener el anterior
document.getElementById('previous-btn')
.addEventListener('click', async () => {
    const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
    const newId = Math.max(1, currentPokeId -1);
    const pokemon = await fetchPokemon(newId);
    localStorage.setItem('currentPokeId', String(pokemon.id));
    //console.log(pokemon.name);
})

// obtener el siguiente
document.getElementById('next-btn')
.addEventListener('click', async () => {
    const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
    const newId = currentPokeId + 1;
    const pokemon = await fetchPokemon(newId);
    localStorage.setItem('currentPokeId', String(pokemon.id));
    //console.log(pokemon);
})