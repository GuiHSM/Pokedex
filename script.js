var shiny = false;
var index=3;
var pokemons=[];

var findAllPokemons = ()=>{
    let request = new XMLHttpRequest()
    request.open('GET', `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`, true)
    request.onload = function () {
        let data = JSON.parse(this.response);
        let val=0;
        if (request.status >= 200 && request.status < 400) {
            data.results.forEach(pokemon=>{
                val++;
                pokemons.push({name:pokemon.name,id:val});
            })
        }else{
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
            document.getElementById("name").innerText=`${data.name}`  
            //types
            let types=[];
            data.types.forEach(type=>{
                types.push(type.type.name);
            })
            if(types.length==1&&types[0]=="fairy"){
                types[0]="normal";
            }
            if(types.length==2){
                if(types[0]=="fairy"){
                    let aux=types[0];
                    types[0]=types[1];
                    types[1]=aux;
                }
                if(types[1]=="fairy"){
                    types.pop();
                }
            }
            document.getElementById("typeTela").innerHTML="";
            types.forEach((type)=>{
                document.getElementById("typeTela").innerHTML+=` <img id="types" src="images/spriteTypes/${type}.png"> `
            })
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
                html+=`<tr><td>${movimento.nome}</td>`
                html+=movimento.nivel==0?`<td>${formatMethod(movimento.metodo)}</td>`: ` <td>${movimento.nivel}</td>`;
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

var formatMethod=(method)=>{
    if(method=="machine"){
        return "TM"
    }
    return method.charAt(0).toUpperCase() + method.slice(1);
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

var searchByName = ()=>{
    let text = document.getElementById("teste").value.toLowerCase();
    console.log(text)
    let id=0;
    let achado=0;
    pokemons.forEach(pokemon=>{
        if(pokemon.name.includes(text)){
            if(pokemon.name===text){
                index=pokemon.id;
                alterarPokemon(index);
                achado=-152;
            }
            id=pokemon.id;
            achado++;
        }
    })
    if(achado<0){
        return;
    }
    if(achado==1){
        index=id;
        alterarPokemon(id);
        document.getElementById("teste").value="";
    }
    let lista=[], posicao=[];
    let mini=50;
    pokemons.forEach(pokemon=>{
        if(pokemon.name.includes(text)){
            lista.push(pokemon.name)
            posicao.push(pokemon.name.search(text))
        }
    })

}


alterarPokemon(index);
findAllPokemons();
console.log('pokemons')
console.log(pokemons)