const pokemons = [];
let searchAttributes = [];

async function init(){
    await loadInitalPokemons();
    await render(pokemons);
}


async function fetchPokemonById(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    // console.log(data);
    return data;
}

async function loadInitalPokemons() {
    const response = await fetch('https://cdn.jsdelivr.net/gh/MegaChoi/Pokemon-dex/pokemon_data.json');
    const data = await response.json();
    pokemons.push(...data); // Update the global pokemons array
}

// function to store pokemon types for searching
function addType (type){
    if (searchAttributes.length == 2){
        searchAttributes.splice(0,1);
        searchAttributes.push(type);
        search();
    }else{
        if (searchAttributes[0] != type)
            searchAttributes.push(type);
            search();
    }
    console.log(searchAttributes);
    renderSearchAttributes(searchAttributes)
}

function removeType (type){
    searchAttributes = searchAttributes.filter(item => item !== type);
    console.log(searchAttributes);
    renderSearchAttributes(searchAttributes)
    search();
}

// main search function
async function search() {
    setTimeout(function () {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        let searchResults = filterPokemonByNames(searchInput);
        if (searchAttributes.length !== 0)
            searchResults = filterPokemonByTypes(searchResults, searchAttributes[0], searchAttributes[1]);
        render(searchResults);
    }, 1);
};


function filterPokemonByNames(searchInput){
    // filter by name
    const searchResults = pokemons.filter(pokemon => 
            pokemon.name.replaceAll('-', ' ').toLowerCase().includes(searchInput)
    );
    return searchResults;
}

function filterPokemonByTypes(pokemonList, type1, type2 = null) {
    try {
        if (type2) {
            // Two types provided
            return pokemonList.filter(pokemon => 
                pokemon.types.includes(type1) && pokemon.types.includes(type2)
            );
        } else {
            // One type provided
            return pokemonList.filter(pokemon => pokemon.types.includes(type1));
        }
    } catch (error) {
       console.log('types') 
    }

}

async function getEvolutionChain(pokeId){
    try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}`);
        const data = await response.json();
        const evolutionChainUrl = data.evolution_chain.url;

        let chain = [];
        const response2 = await fetch(evolutionChainUrl);    
        const evolutionData = await response2.json();

        let evolutionChain= evolutionData.chain;
        let poke = {}
        while (evolutionChain) {
            let poke = {
              name: evolutionChain.species.name,
              url: evolutionChain.species.url,
              min_level: evolutionChain.evolution_details.length > 0 ? evolutionChain.evolution_details[0].min_level : null
            };
          
            chain.push(poke);
          
            // Move to the next evolution if available
            evolutionChain = evolutionChain.evolves_to.length > 0 ? evolutionChain.evolves_to[0] : null;
          }
        return evolutionChain;

    } catch (error) {
        
    }
}

