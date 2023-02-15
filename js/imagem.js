var porcentagemTelaPokemon = 0.08;//0.08%

var shiny = false;
var imgPokemon;
var naturalHeight=0;
var naturalWidth=0;
var sprites = ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/'];

export let setShiny=()=>{
    shiny = !shiny
}

export let definirImagem = (index) => {
    imgPokemon = new Image();
    imgPokemon.src = sprites[shiny + 0] + `${index}.gif`;
    imgPokemon.onload=()=>{
        naturalHeight = imgPokemon.naturalHeight
        naturalWidth = imgPokemon.naturalWidth
        reajustarImagem();
    }
    document.getElementById("sprite").src = imgPokemon.src;
}

export let reajustarImagem = () => {
    document.getElementById("sprite").style.width = `${Math.floor(naturalWidth * window.innerWidth * porcentagemTelaPokemon / 100)}px`;
    if (naturalHeight > 100) {
        document.getElementById("pokemonTela").style.marginTop = "14%"
    } else if (naturalHeight > 79) {
        document.getElementById("pokemonTela").style.marginTop = "15.5%"
    } else {
        document.getElementById("pokemonTela").style.marginTop = "18%"
    }
}