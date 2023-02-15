import { allMoves } from "./dadosMove.js";

var maxStats = 255;
var page=0;


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

var formatMethod = (method) => {
    if (method == "machine") {
        return "TM"
    }
    return method.charAt(0).toUpperCase() + method.slice(1);
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

let setMoves = (moves) =>{
    moves = moves.sort((mov1, mov2) => {
        return methodPriority(mov1) - methodPriority(mov2);
    })
    let html = "";
    moves.forEach(movimento => {
        html += `<tr><td>${movimento.nome}</td>`
        html += movimento.nivel == 0 ? `<td>${formatMethod(movimento.metodo)}</td>` : ` <td>${movimento.nivel}</td>`;
        html += `<td> <img src=images/spriteTypes/${allMoves[movimento.id].tipo}.png> </td>`
        html += "</tr>"
    })
    document.getElementById("tabela").innerHTML = html;
}

let setStats = (stats) => {
    let html = "<tr class='tabelaStats'><th>Nome:</th><th>Valor:</th></tr>";
    stats.forEach(stat => {
        html += `<tr class="tabelaStats"><td>${stat.nome}</td>`
        html += `<td class="direita"><progress style="accent-color:${getColor(stat.valor)}" value = ${stat.valor} max = ${maxStats}></progress>${stat.valor}</td>`
        html += "</tr>"
    })
    document.getElementById("tabela").innerHTML = html;
}

var table=[setMoves,setStats]

export let setPage=(val,lista)=>{
    page+=val;
    page = page %(table.length)
    page = page<0? table.length+page:page
    table[page](lista[page]); 
}