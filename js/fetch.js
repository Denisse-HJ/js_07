const BASE_URL = 'https://pokeapi.co/api/v2';

// fetch async
async function fetchPokemon (pokemon)  { 
//const fetchPokemon = async (pokemon) => {
    try {
        const respuesta = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await respuesta.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}
//}
//que se cree la tarjeta obtenida del documento
function createPokemonCard (pokemon) {
    const card = document.createElement ('div');
    card.classList.add('card-container');

    const name = document.createElement('h2');
    name.textContent = pokemon;
    
    const id =document.createElement('p');
    id.textContent = `ID: ${pokemon.id}`;

    const image = document.createElement('img');
    image.src = pokemon.sprites.front_default;
    image.alt = `Image of ${pokemon.name}`;

    card.appendChild(name);
    card.appendChild(id);
    card.appendChild(image);

    return card;
}

// Obtener pokemon
document.getElementById('get-btn').addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        //convertir el Id a cadena antes de llamarlo a localStorage
        localStorage.setItem('currentPokeId', String(pokemon.id));
        const card = createPokemonCard(pokemon);
        document.body.appendChild(card);

        console.log(pokemon.name);
    })

//Recupera un id de pokemon almacenado y creamos una tarjeta del pokemon

    document.addEventListener('DOMContentLoaded', async () => {
        const storedId = localStorage.getItem('currentPokeId');
        const initialId = storedId ? parseInt(storedId) : 1;
        const pokemon = await fetchPokemon(initialId);
        //crear la tarjeta y que se agrege a document
        const card = createPokemonCard (pokemon);
        document.body.appendChild(card);

        console.log(pokemon.name);
    })


// obtener el anterior
document.getElementById('previous-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = Math.max(1, currentPokeId -1);
        const pokemon = await fetchPokemon(newId);
        console.log(pokemon.name);
    })

// obtener el siguiente
document.getElementById('next-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = currentPokeId + 1;
        const pokemon = await fetchPokemon(newId);
        console.log(pokemon);
    })



/*fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'title1',
        body: 'Lorem ipsum dolor sit amet',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(res => res.json())
    .then(json => console.log(json))

*/
/////////////////// EJERCICIOS
//- Arreglar el pokemon en localStorage
// - Manipular el DOM y agregar una tarjeta del pokemon.
// - El tamaño e info de la tarjeta es a consideración personal.
// - La tarjeta debe mantenerse en la pantalla.
// - La info -> LocalStorage -> Fetch
