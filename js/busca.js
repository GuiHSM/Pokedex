import { stringToShow } from "./utils/stringToShow.js";

var pokemons = [];
var nPokemon=649

/*var comparePokemons = (a,b)=>{
    a=a.name;
    b=b.name;
    let id=0;
    console.log(a,b);
    while(id<Math.min(a.length,b.length)&&a[id]===b[id]){
        id++;
    }
    if(id<Math.min(a.length,b.length)){
        if(a[id]>b[id]){
            return 1;
        }else{
            return -1;
        }
    }
    return a.length-b.length;
}*/

export let search=(text)=>{
    
    let id = 0;
    let achado = 0;
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        if (pokemon.name.includes(text)) {
            id = pokemon.id;
            achado++;
            if (pokemon.name === text) {
                return {name:pokemons[id].name,id:id}
            }
        }
    }
    if (achado < 0) {
        return null;
    }
    if (achado == 1) {
        document.getElementById("teste").value = "";
        return {name:pokemons[id-1].name,id:id}
    }
    let lista = [], posicao = [];
    let mini = 50;
    pokemons.forEach(pokemon => {
        if (pokemon.name.includes(text)) {
            lista.push(pokemon.name)
            posicao.push(pokemon.name.search(text))
        }
    })
}

export let findAllPokemons = () => {
    let request = new XMLHttpRequest()
    request.open('GET', `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${nPokemon}`, true)
    request.onload = function () {
        let data = JSON.parse(this.response);
        let val = 0;
        if (request.status >= 200 && request.status < 400) {
            data.results.forEach(pokemon => {
                val++;
                pokemons.push({ name: stringToShow(pokemon.name), id: val });
            })
        } else {
            console.log("a")
        }
        /*pokemons=pokemons.sort((a,b)=>{
            res = comparePokemons(a,b);
            console.log(a,b,pokemons);
            return res;
        })*/
    }
    request.send()
}