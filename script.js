var shiny = false;
var index = 1;
var pokemons = [];
var moves = [];
var stats = [];
var maxStats = 250;
var porcentagemTelaPokemon=0.08;//0.08%
var img= new Image();
var nPokemon = 649;
var sprites = ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/'];
const tabelaEnum = {
    moves: 0,
    stats: 1
}
var page = 1;

var findAllPokemons = () => {
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

var alterarPokemon = (index) => {
    let request = new XMLHttpRequest()

    request.open('GET', `https://pokeapi.co/api/v2/pokemon/${index}`, true)

    request.onload = function () {
        let data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            
            definirImagem();
            document.getElementById("altura").innerText = `Altura: ${data.height * 10} cm`
            document.getElementById("peso").innerText = `Peso: ${data.weight / 10} kg`
            document.getElementById("name").innerText = `${stringToShow(data.name)}`
            //types
            let types = [];
            data.types.forEach(type => {
                types.push(type.type.name);
            })
            if (types.length == 1 && types[0] == "fairy") {
                types[0] = "normal";
            }
            if (types.length == 2) {
                if (types[0] == "fairy") {
                    let aux = types[0];
                    types[0] = types[1];
                    types[1] = aux;
                }
                if (types[1] == "fairy") {
                    types.pop();
                }
            }
            document.getElementById("typeTela").innerHTML = "";
            types.forEach((type) => {
                document.getElementById("typeTela").innerHTML += ` <img id="types" src="images/spriteTypes/${type}.png"> `
            })
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
                        nome: move.move.name,
                        nivel: nivel,
                        metodo: metodo
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
            updateTable();
        } else {
            console.log('error')
        }
    }
    request.send()
}

var getCry=(pokeName)=>{
    audioP.pause();
    audioP.currentTime=0;
    audioP = new Audio (`https://play.pokemonshowdown.com/audio/cries/${pokeName.replace(" ","")}.mp3`)
    
    audioP.volume = sound/2
    audioP.play();
}

var reajustarImagem = ()=>{
    document.getElementById("sprite").style.width=`${Math.floor(img.naturalWidth*window.innerWidth*porcentagemTelaPokemon/100)}px`;

     if (img.naturalHeight>100){
        document.getElementById("pokemonTela").style.marginTop = "14%"
     }else

     if (img.naturalHeight>79){
        
        document.getElementById("pokemonTela").style.marginTop = "15.5%"
        
     }else{

        document.getElementById("pokemonTela").style.marginTop = "18%"

     } 

}
  
window.onresize = reajustarImagem;

var definirImagem = () => {
    
    img = new Image();
    img.onload = function() {
        reajustarImagem();
    }
    img.src = sprites[shiny + 0] + `${index}.gif`;
    
    document.getElementById("sprite").src = sprites[shiny + 0] + `${index}.gif`;
     
     

}

var updateTable = () => {
    if (page) {
        moves = moves.sort((mov1, mov2) => {
            return methodPriority(mov1) - methodPriority(mov2);
        })
        let html = "";
        moves.forEach(movimento => {
            html += `<tr><td>${movimento.nome}</td>`
            html += movimento.nivel == 0 ? `<td>${formatMethod(movimento.metodo)}</td>` : ` <td>${movimento.nivel}</td>`;
            html += "</tr>"
        })
        document.getElementById("tabela").innerHTML = html;
    } else {
        let html = "<tr class='tabelaStats'><th>Nome:</th><th>Valor:</th></tr>";
        stats.forEach(stat => {
            html += `<tr class="tabelaStats"><td>${stat.nome}</td>`
            html += `<td class="direita"><progress style="accent-color:${getColor(stat.valor)}" value = ${stat.valor} max = ${maxStats}></progress>${stat.valor}</td>`
            html += "</tr>"
        })
        document.getElementById("tabela").innerHTML = html;
    }
}

var getColor = (statColor) => {

    let r = 0
    let g = 0
    let b = 0


    g = (statColor - 5) * 2.55
    g = Math.max(0, Math.min(g, 255))

    r = - (statColor - 105) * 5.1
    r = Math.max(0, Math.min(r, 255))

    b = (statColor - 155) * 2.55
    b = Math.max(0, Math.min(b, 255))

    return `rgb(${r},${g},${b});`

}

var methodPriority = (movimento) => {
    if (movimento.metodo == "level-up") {
        return 0 + movimento.nivel;
    } if (movimento.metodo == "machine") {
        return 101;
    } if (movimento.metodo == "tutor") {
        return 102;
    }
    return 103;
}

var nextPokemon = () => {
    activeLight();
    playAudio(audioA);
    index++;
    if (index >= nPokemon+1) {
        index = 1;
    }
    alterarPokemon(index);
    getCry(pokemons[index-1].name);
}

var previousPokmon = () => {
    activeLight();
    playAudio(audioA);
    index--;
    if (index <= 0) {
        index = nPokemon;
    }
    alterarPokemon(index);
    getCry(pokemons[index-1].name);
}
var activeLight = () => {
    document.getElementById("blueLight").className="blueLightBrilho";
    setTimeout((()=>{document.getElementById("blueLight").className=""}), 300);
}

var activeLightYellow = () => {
    document.getElementById("rightYellowLight").className="rightYellowLightBrilho";
    setTimeout((()=>{document.getElementById("rightYellowLight").className=""}), 300);
}

var changeToShiny = () => {
    activeLight();
    playAudio(audioShiny);
    shiny = !shiny;
    if(shiny){
        document.getElementById("yellowLight").className="smallLight yellowLightBrilho";
    }else{
        document.getElementById("yellowLight").className="smallLight";
    }
    definirImagem();
}

var formatMethod = (method) => {
    if (method == "machine") {
        return "TM"
    }
    return method.charAt(0).toUpperCase() + method.slice(1);
}

var playAudio=(audio)=>{
    audio.pause();
    audio.currentTime=0;
    audio.play();
}

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

var setPage = () => {
    activeLightYellow();
    playAudio(audioA);
    page = (page + 1) % 2;
    updateTable();
}

var searchByName = () => {
    let text = document.getElementById("teste").value.toLowerCase();
    
    let id = 0;
    let achado = 0;
    pokemons.forEach(pokemon => {
        if (pokemon.name.includes(text)) {
            if (pokemon.name === text) {
                index = pokemon.id;
                alterarPokemon(index);
                achado = -nPokemon-1;
                document.getElementById("greenLight").className="smallLight greenLightBrilho";
                setTimeout((()=>{document.getElementById("greenLight").className="smallLight"}), 300);
                getCry(pokemons[index-1].name);
            }
            id = pokemon.id;
            achado++;
        }
    })
    if (achado < 0) {
        return;
    }
    if (achado == 1) {
        index = id;
        alterarPokemon(id);
        document.getElementById("teste").value = "";
        document.getElementById("greenLight").className="smallLight greenLightBrilho";
        setTimeout((()=>{document.getElementById("greenLight").className="smallLight"}), 300);
        getCry(pokemons[index-1].name);
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

var stringToShow=(texto)=>{
    return texto.replace("-"," ");
}

var mute=()=>{
    if(sound>0){
        sound=0;
    }else{
        sound=0.3;
    }
    audioA.volume = sound
    audioShiny.volume = sound
}


var pokemonDiferentes = [6, 17, 22, 40, 42, 49, 73, 142, 146]

// sound effects 
var sound = 0.3;

const audioA = new Audio ("soundFX/pokemonButtonASound.mp3")
audioA.volume = sound

const audioShiny = new Audio ("soundFX/pokemonShinySound.mp3")
audioShiny.volume = sound

var audioP = new Audio ("soundFX/pokemonShinySound.mp3");

alterarPokemon(index);
findAllPokemons();
