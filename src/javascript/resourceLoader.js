const pokemons = [' '];
let limit = 16;
let offset = 0;
const maxPokemons = 10277;

async function loadInitalPokemons(){
    renderPokemonListItem()
}


/**render */
async function renderPokemonListItem() {

    const response = await fetch('../../pokemon_results.json','utf-8');
    const data = await response.json();
    
    for(i = 0; i < data.length(); i++) {
        document.getElementById('pokedex-grid').insertAdjacentHTML('beforeend', `<div onclick="openInfo(${data[i].id})" class="pokemon-render-result-container container center column">
                                                                                                    <img class="search-pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentList[index].id}.png">
                                                                                                    <span class="bold font-size-12">N° ${data[i].name}</span>
                                                                                            
                                                                                                </div>`);
    }
};



// move function to generate api to a different file
function generatePokeApiUrl(offset, limit) {
    return `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
}



// get pokemon info
async function getPokemonTypesAndImages() {
    try {
        
    } catch (error) {
        
    }
};


// get pokemon info
async function getPokemonInfo() {
    try {
        
    } catch (error) {
        
    }
};


