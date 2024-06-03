// const pokemons = [' '];
// let limit = 16;
// let offset = 0;
// const maxPokemons = 10277;

// async function loadInitalPokemons(){
//     renderPokemonListItem()
// }






// /**render */
// async function renderPokemonListItem() {
//     const container = document.getElementById('pokedex-grid');
//     const response = await fetch('https://cdn.jsdelivr.net/gh/MegaChoi/Pokemon-dex/pokemon_data.json');
//     const data = await response.json();
    
//     for (let i = 0; i < data.length; i++) {
//         const type1 = data[i].types[0];
//         const type2 = data[i].types[1] ? data[i].types[1] : null;

//         container.insertAdjacentHTML('beforeend', 
//         `<div class="pokemon-card border-${type1}">
//             <div class="pokemon-image-wrapper"> 
//                 <img class="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data[i].id}.gif" alt="${data[i].name}">
//             </div>
//             <div class="pokemon-name"> 
//                 <span class="pokemon-id">N°${i+1} </span>
//                 <div>${data[i].name.toUpperCase()}</div>
//             </div>
//             <div class="icon"> 
//                 <img src="src/icons/${type1}.png" width="20" height="20">
//                 ${type2 ? `<img src="src/icons/${type2}.png" width="20" height="20">` : ''}
//             </div>
//         </div>`);
//     }
    
// };



// // move function to generate api to a different file
// function generatePokeApiUrl(offset, limit) {
//     return `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
// }



// // get pokemon info
// async function getPokemonTypesAndImages() {
//     try {
        
//     } catch (error) {
        
//     }
// };


// // get pokemon info
// async function getPokemonInfo() {
//     try {
        
//     } catch (error) {
        
//     }
// };


