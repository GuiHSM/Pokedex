import { pokemons } from "./busca.js";

let sound =0.3;
let audioP = new Audio("soundFX/pokemonShinySound.mp3");
const audioButton = new Audio("soundFX/pokemonButtonASound.mp3")
audioButton.volume = sound

const audioShiny = new Audio("soundFX/pokemonShinySound.mp3")
audioShiny.volume = sound

export let muteDesmute=()=>{
    if (sound > 0) {
        sound = 0;
    } else {
        sound = 0.3;
    }
    audioButton.volume = sound
    audioShiny.volume = sound
}

export let playAudioShiny = ()=>{
    playAudio(audioShiny)
}

export let playAudioButton = ()=>{
    playAudio(audioButton);
}

export let getCry = (index) => {
    console.log(index,pokemons[index-1])
    if(index>0){
        audioP.pause();
        audioP.currentTime = 0;
        audioP = new Audio(`https://play.pokemonshowdown.com/audio/cries/${pokemons[index-1].name.replace(" ", "")}.mp3`)

        audioP.volume = sound / 2
        audioP.play();
    }
}

let playAudio = (audio) => {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}