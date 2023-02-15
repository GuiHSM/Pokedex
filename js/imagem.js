var porcentagemTelaPokemon = 0.08;//0.08%

var shiny = false;


var sprites = ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/'];

export let setShiny=()=>{
    shiny = !shiny
}

export let definirImagem = (index) => {
    let imgPokemon = new Image();
    imgPokemon.onload = function () {
        reajustarImagem();
    }
    imgPokemon.src = sprites[shiny + 0] + `${index}.gif`;

    document.getElementById("sprite").src = sprites[shiny + 0] + `${index}.gif`;
}

export let reajustarImagem = (naturalWidth, naturalHeight) => {
    document.getElementById("sprite").style.width = `${Math.floor(naturalWidth * window.innerWidth * porcentagemTelaPokemon / 100)}px`;
    if (naturalHeight > 100) {
        document.getElementById("pokemonTela").style.marginTop = "14%"
    } else if (naturalHeight > 79) {
        document.getElementById("pokemonTela").style.marginTop = "15.5%"
    } else {
        document.getElementById("pokemonTela").style.marginTop = "18%"
    }
}