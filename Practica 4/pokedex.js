const searchBtn = document.getElementById('search-btn'); // search button
const inputField = document.getElementById('name-input'); // search field input
const nameScreen = document.getElementById('name-screen'); // pokemon name
const imageScreen = document.getElementById('pokemon-screen'); // image screen
const aboutScreen = document.getElementById('info-screen'); // about-text screen


const getPokemonData = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .then((data) => {
            let id = ('00' + data.id).slice(-3);
            imageScreen.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png')`;
            nameScreen.innerHTML = data.name;
            aboutScreen.innerHTML =
                `Altura: ${data.height * 10}cm` + "<br>" + `Peso: ${data.weight / 10
                }kg` + "<br>" + " Tipo:" + data.types[0].type.name + "<br>" + "No. " + `#${data.id}` +
                "<br>" + "hp: " + data.stats[0].base_stat +
                "<br>" + "ataque: " + data.stats[1].base_stat +
                "<br>" + "defensa: " + data.stats[2].base_stat +
                "<br>" + "ataques: " + 
                data.moves.map(move => move.move.name).slice(0, 10).join(', ');
            inputField.value = '';
        });
};

inputField.addEventListener(
    'keydown',
    (event) => event.key === 'Enter' && searchBtn.click()
);
searchBtn.addEventListener('click', () => getPokemonData(inputField.value));
