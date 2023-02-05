
var alterarSrcPokemon = (id, nome)=>{
    let request = new XMLHttpRequest()

    request.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+nome, true)

    request.onload = function () {
        let data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            let imagem = document.getElementById(id);
            imagem.src = data.sprites.front_default;
        } else {
            console.log('error')
        }
    }
    request.send()
}

var criarCardMoves = (id,nome)=>{
    let request = new XMLHttpRequest()

    request.open('GET', `https://pokeapi.co/api/v2/pokemon/${nome}`, true)

    request.onload = function () {
        let data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            let div = document.getElementById(id);
            let html = `<img src="${data.sprites.front_default}">`;
            /*for(let i=0;i<data.moves;i++){
                let move = data.moves[i];
            }*/
            html+=`<div id=${nome}>`
            data.moves.forEach(move=>{
                let auxiliar="";
                for(let i=0;i<move.version_group_details.length;i++){
                    let version=move.version_group_details[i]
                    if(version.version_group.name=="firered-leafgreen"){
                        auxiliar=`<p>Método: ${version.move_learn_method.name}`
                        if(version.move_learn_method.name=="level-up"){
                            auxiliar+=` Nível: ${version.level_learned_at}`
                        }
                        auxiliar+="<p>"
                        break;
                    }
                }
                if(auxiliar!=""){
                    html+=`<p>Nome: ${move.move.name}</p>`
                    html+=auxiliar;
                }
            })
            html+=`</div>`
            div.innerHTML=html;
        } else {
            console.log('error')
        }
    }
    request.send()
}


criarCardMoves("teste","pikachu");

