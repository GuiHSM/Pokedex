import { getCry, muteDesmute, playAudioButton, playAudioShiny } from "./js/audio.js";
import { activeBlueLight, activeGreenLight, activeYellowLight, setYellowLight } from "./js/light.js";
import { definirImagem, reajustarImagem, setShiny } from "./js/imagem.js";
import { findAllPokemons, search } from "./js/busca.js";
import { utilizeTypes } from "./js/typePokemon.js";
import { setPage } from "./js/table.js";
import { stringToShow } from "./js/utils/stringToShow.js";
window.onresize = reajustarImagem;
var index = 1;
var pokemons = [];
var moves = [];
var stats = [];
var name = "";
var nPokemon=649

const tabelaEnum = {
    moves: 0,
    stats: 1
}

var alterarPokemon = (index) => {
    let request = new XMLHttpRequest()

    request.open('GET', `https://pokeapi.co/api/v2/pokemon/${index}`, true)

    request.onload = function () {
        let data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            //console.log(isExtraordinary());
            definirImagem(index);
            if (data.height > 100) {
                document.getElementById("altura").innerText = `Altura: ${data.height / 10} m`
            } else {
                document.getElementById("altura").innerText = `Altura: ${data.height * 10} cm`
            }
            name = stringToShow(data.name)
            document.getElementById("peso").innerText = `Peso: ${data.weight / 10} kg`
            document.getElementById("name").innerText = `${stringToShow(data.name)}`
            //types
            utilizeTypes(data.types);
            //moves
            moves = [];
            data.moves.forEach(move => {
                let metodo = "";
                let nivel = 0;
                for (let i = 0; i < move.version_group_details.length; i++) {
                    let version = move.version_group_details[i]
                    if (version.version_group.name == "black-white") {
                        metodo = version.move_learn_method.name
                        if (version.move_learn_method.name == "level-up") {
                            nivel = version.level_learned_at;
                        }
                        break;
                    }
                }
                if (metodo != "") {
                    moves.push({
                        id: Number(move.move.url.split("/")[6]),
                        nome: move.move.name,
                        nivel: nivel,
                        metodo: metodo,
                        /*
                        tipo:info.tipo,
                        tipoPoder:info.tipoPoder,
                        pp:info.pp,
                        poder:info.poder,
                        acuracia:info.acuracia,
                        */
                    })
                }
            })

            //stats
            stats = []
            data.stats.forEach(stat => {
                stats.push({
                    nome: stat.stat.name,
                    valor: stat.base_stat
                })
            })
            setPage(0,[moves,stats]);
        } else {
            console.log('error')
        }
    }
    request.send()
}

var nextPokemon = () => {
    activeBlueLight();
    playAudioButton();
    index++;
    if (index >= nPokemon + 1) {
        index = 1;
    }
    alterarPokemon(index);
    getCry(name);
}

var previousPokemon = () => {
    activeBlueLight();
    playAudioButton();
    index--;
    if (index <= 0) {
        index = nPokemon;
    }
    alterarPokemon(index);
    getCry(name);
}

var changeToShiny = () => {
    activeBlueLight();
    playAudioShiny();
    setShiny();
    setYellowLight();
    definirImagem(index);
}

var nextPage = () => {
    activeYellowLight();
    playAudioButton();
    setPage(1,[moves,stats]);
}

var previousPage = () => {
    activeYellowLight();
    playAudioButton();
    setPage(-11,[moves,stats]);
}

var searchByName = () => {
    let text = document.getElementById("teste").value.toLowerCase();
    let pokemon;
    pokemon = search(text);
    if(pokemon){
        index = pokemon.id;
        getCry(pokemon.name);
        alterarPokemon(index);
        activeGreenLight();
    }

}

var mute = () => {
    muteDesmute()
}

alterarPokemon(index);
pokemons = findAllPokemons();

document.getElementById("rightButton").onclick=nextPokemon;
document.getElementById("leftButton").onclick=previousPokemon;
document.getElementById("shinyButton").onclick=changeToShiny;
document.getElementById("muteButton").onclick=mute;
document.getElementById("leftWhiteButton").onclick=nextPage;
document.getElementById("rightWhiteButton").onclick=previousPage;
document.getElementById("teste").oninput=searchByName
//document.getElementById("rightWhiteButton").onclick

//document.getElementById("upButton");