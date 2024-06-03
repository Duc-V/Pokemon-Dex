async function render(pokemons) {
    try {
        const container = document.getElementById('pokedex-grid');
        container.innerHTML = '';
        for (let i = 0; i < pokemons.length; i++) {
            const type1 = pokemons[i].types[0];
            const type2 = pokemons[i].types[1]? pokemons[i].types[1] : null;
    
            container.insertAdjacentHTML('beforeend', 
            `<div class="pokemon-card border-${type1}">
                <div class="pokemon-image-wrapper"> 
                    <img class="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemons[i].id}.gif" alt="${pokemons[i].name}">
                </div>
                <div class="pokemon-name"> 
                    <span class="pokemon-id">N°${i+1} </span>
                    <div>${pokemons[i].name.toUpperCase()}</div>
                </div>
                <div class="icon"> 
                    <img src="src/icons/${type1}.png" width="20" height="20">
                    ${type2 ? `<img src="src/icons/${type2}.png" width="20" height="20">` : ''}
                </div>
            </div>`);
        }  
    } catch (error) {
        console.log(error);
    }
};

async function renderSearchAttributes(searchAttributes) {
    try {
        const container = document.getElementById('search-attributes');
        container.innerHTML = '';
        let htmlString = '';
        for (const type in searchAttributes) {
            const t = searchAttributes[type];
            htmlString += `<div class="poke-types-icon" onclick="removeType('${t}')">
                <div class="remove-type" >X</div>
                <img src="src/icons/${t}.png" width="20" height="20">
            </div>`;
        }
        
        
        container.insertAdjacentHTML('beforeend', htmlString);
    } catch (error) {
        console.log(error);
    }
};
