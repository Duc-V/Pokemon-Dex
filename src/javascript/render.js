async function render(pokemons) {
    try {
        const container = document.getElementById('pokedex-grid');
        container.innerHTML = '';
        for (let i = 0; i < pokemons.length; i++) {
            const type1 = pokemons[i].types[0];
            const type2 = pokemons[i].types[1]? pokemons[i].types[1] : null;
    
            container.insertAdjacentHTML('beforeend', 
            `<div class="pokemon-card border-${type1}" onclick="displayPokemon(${pokemons[i].id})">
                <div class="pokemon-image-wrapper"> 
                    <img class="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemons[i].id}.gif" alt="${pokemons[i].name}">
                </div>
                <div class="pokemon-name"> 
                    <span class="pokemon-id">N°${pokemons[i].id} </span>
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
                <div class="remove-type" ><img src="src/assets/delete_icon.png" width="30" height="30"></div>
                <img src="src/icons/${t}.png" width="30" height="30">
            </div>`;
        }
        container.insertAdjacentHTML('beforeend', htmlString);
    } catch (error) {
        console.log(error);
    }
};

async function displayPokemon(pokeId){
    try {
        evolutionChain = await getEvolutionChain(pokeId);
        const pokemon = await fetchPokemonById(pokeId)
        console.log();

        let image = ''
        // get the gif if id < 650
        if (pokeId <= 650) {
            image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokeId}.gif`
        }else{
            image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`
        }

        // name
        const name = pokemon.forms[0].name;
        // stats
        const hp = pokemon.stats[0].base_stat;
        const atk = pokemon.stats[1].base_stat;
        const def = pokemon.stats[2].base_stat;
        const spec_atk = pokemon.stats[3].base_stat;
        const spec_def = pokemon.stats[4].base_stat;
        const speed = pokemon.stats[5].base_stat;
        
        // ability
        // const ability1 = pokemon.abilities[0].ability.name
        // const ability2 = pokemon.abilities[1].ability.name
        // type
        type1 = pokemon.types[0].type.name;
        type2 = pokemon.types[1] ? pokemon.types[1].type.name : "empty";
        // type2 = pokemon.types[1]? pokemons.types[1].type.name : "";
        const container = document.getElementById('poke-info');




        container.innerHTML = "";
        container.insertAdjacentHTML('beforeend', 
        


        `
        <div>
            <div class="info-name">${name.toUpperCase()}
               <div class="id">N°${pokeId}</div>
            </div>
        </div>

        <div class="info-types">
            <span>
                <img class="" src="src/icons/${type1}.png" alt="">
            </span>
            <span>
                <img class="" src="src/icons/${type2}.png" alt="">
            </span>
        </div>

        <div class="info-image-wrapper"> 
            <span>
                <img class="pokemon-image-big" src="${image}" alt="">
            </span>
        </div>
        
           
        <div class="stats-container">
            <div class="stats-heading">
                    <img width="20" height="20" src="src/icons/stats-icon.png" alt="">
                <h3>Base Stats</h3> 
                    
            </div>
            <div class="stat">
                <span class="stat-name">HP</span>
                <div class="stat-bar-container">
                    <div class="stat-bar hp" style="width: ${(hp/250 *100)}%;"></div>
                </div>
                <span class="stat-value">${hp}</span>
            </div>
            <div class="stat">
                <span class="stat-name">ATK</span>
                <div class="stat-bar-container">
                    <div class="stat-bar atk" style="width: ${(atk/250) * 100}%;"></div>
                </div>
                <span class="stat-value">${atk}</span>
            </div>
            <div class="stat">
                <span class="stat-name">DEF</span>
                <div class="stat-bar-container">
                    <div class="stat-bar def" style="width: ${def/250 * 100}%;"></div>
                </div>
                <span class="stat-value">${def}</span>
            </div>
            <div class="stat">
                <span class="stat-name">S-ATK</span>
                <div class="stat-bar-container">
                    <div class="stat-bar spec-atk" style="width: ${spec_atk/250 * 100}%;"></div>
                </div>
                <span class="stat-value">${spec_atk}</span>
            </div>
            <div class="stat">
                <span class="stat-name">S-DEF</span>
                <div class="stat-bar-container">
                    <div class="stat-bar spec-def" style="width: ${spec_def/250 * 100}%;"></div>
                </div>
                <span class="stat-value">${spec_def}</span>
            </div>
            <div class="stat">
                <span class="stat-name">SPEED</span>
                <div class="stat-bar-container">
                    <div class="stat-bar speed" style="width: ${speed/250 * 100}%;"></div>
                </div>
                <span class="stat-value">${speed}</span>
            </div>
        <div/>
        `);
    }catch(error){
        console.log(error);
    }

}