var shiny = false;

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

/*
var criarCardMoves = (id,index)=>{
    let request = new XMLHttpRequest()

    request.open('GET', `https://pokeapi.co/api/v2/pokemon/${index}`, true)

    request.onload = function () {
        let data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            let div = document.getElementById(id);
            let html = `<img src="${data.sprites.front_default}">`;
            //for(let i=0;i<data.moves;i++){
            //    let move = data.moves[i];
            //}
            let height =`<p>
            Altura: ${data.height*10} cm
           </p>` 
              html+=height;

              let weight =`<p>
            Peso: ${data.weight/10} kg
           </p>` 
            html+=`<div id="${index}" class="board">`

              html+=weight;
            let movimentos=[];
            data.moves.forEach(move=>{
                let metodo="";
                let nivel=0;
                for(let i=0;i<move.version_group_details.length;i++){
                    let version=move.version_group_details[i]
                    if(version.version_group.name=="firered-leafgreen"){
                        metodo=version.move_learn_method.name
                        if(version.move_learn_method.name=="level-up"){
                            nivel=version.level_learned_at;
                        }
                        break;
                    }
                }
                if(metodo!=""){
                    movimentos.push({
                        nome:move.move.name,
                        nivel:nivel,
                        metodo:metodo
                    })
                }
            })
            movimentos=movimentos.sort((mov1,mov2)=>{
                return methodPriority(mov1)-methodPriority(mov2);
            })
            movimentos.forEach(movimento=>{
                html+=`<div class="card"><p>Nome: ${movimento.nome}(${movimento.metodo})`
                html+=movimento.nivel==0?"": ` Nível: ${movimento.nivel}`;
                html+="</p></div>"
            })
            html+=`</div>`
            div.innerHTML=html;
        } else {
            console.log('error')
        }
    }
    request.send()
}*/

var alterarPokemon = (index)=>{
    let request = new XMLHttpRequest()

    request.open('GET', `https://pokeapi.co/api/v2/pokemon/${index}`, true)

    request.onload = function () {
        let data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            if(shiny){
                document.getElementById("sprite").src=data.sprites.front_shiny;
            }else{
                document.getElementById("sprite").src=data.sprites.front_default;
            }
            document.getElementById("altura").innerText=`Altura: ${data.height*10} cm` 
            document.getElementById("peso").innerText=`Peso: ${data.weight/10} kg` 
            //types
            let types="";
            data.types.forEach(type=>{
                types+=` <img id="types" src="images/spriteTypes/${type.type.name}.png"> `;
            })
            document.getElementById("typeTela").innerHTML=types 
            //moves
            let movimentos=[];
            data.moves.forEach(move=>{
                let metodo="";
                let nivel=0;
                for(let i=0;i<move.version_group_details.length;i++){
                    let version=move.version_group_details[i]
                    if(version.version_group.name=="firered-leafgreen"){
                        metodo=version.move_learn_method.name
                        if(version.move_learn_method.name=="level-up"){
                            nivel=version.level_learned_at;
                        }
                        break;
                    }
                }
                if(metodo!=""){
                    movimentos.push({
                        nome:move.move.name,
                        nivel:nivel,
                        metodo:metodo
                    })
                }
            })
            movimentos=movimentos.sort((mov1,mov2)=>{
                return methodPriority(mov1)-methodPriority(mov2);
            })
            let html="";
            movimentos.forEach(movimento=>{
                html+=`<tr><td>${movimento.nome}(${movimento.metodo})</td>`
                html+=movimento.nivel==0?"": ` <td>${movimento.nivel}</td>`;
                html+="</tr>"
            })
            document.getElementById("movimentos").innerHTML=html;
        } else {
            console.log('error')
        }
    }
    request.send()
}

var methodPriority= (movimento)=>{
    if(movimento.metodo=="level-up"){
        return 0+movimento.nivel;
    }if(movimento.metodo=="machine"){
        return 101;
    }if(movimento.metodo=="tutor"){
        return 102;
    }
    return 103;
}

var nextPokemon=()=>{
    index++;
    if(index>=152){
        index=1;
    }
    alterarPokemon(index);
}

var previousPokmon=()=>{
    index--;
    if(index<=0){
        index=151;
    }
    alterarPokemon(index);
}

var changeToShiny=()=>{
    shiny=!shiny;
    alterarPokemon(index);
}

var index=1;

alterarPokemon(index);

