var matrizAdjacencia =
    [[0, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, -1],
    [1, 0, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 1, 1],
    [1, -1, 0, -1, 1, -1, -1, 0, -1, 1, -1, -1, -1, -1, -1, 1, 1],
    [1, 1, 1, 0, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1],
    [0, -1, -1, -1, 0, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, -1],
    [1, -1, 1, 1, 1, 0, 1, 1, 1, 1, 1, -1, 1, -1, 1, 1, -1],
    [1, -1, 1, -1, 1, -1, 0, -1, 1, 1, 1, -1, -1, -1, -1, 0, 0],
    [1, -1, 0, -1, 1, -1, 1, 0, -1, 1, -1, -1, -1, -1, 1, 1, 0],
    [1, -1, 1, -1, 1, -1, -1, 1, 0, 1, -1, -1, -1, -1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1],
    [1, -1, 1, -1, 1, -1, -1, 1, 1, 1, 0, -1, -1, -1, 0, 1, 0],
    [1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 0, 1, -1, 1, 1, 1],
    [1, 1, 1, -1, 1, -1, 1, 1, 1, 1, 1, -1, 0, -1, -1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, -1, 1, -1, 1, -1, -1, 1, 0, -1, 1, -1, 0, 0, 1],
    [1, -1, -1, -1, 1, -1, 0, -1, -1, 1, -1, -1, -1, -1, 0, 0, -1],
    [1, -1, -1, -1, 1, 1, 0, 0, -1, 1, 0, -1, -1, -1, -1, 1, 0]]

var mapaType = new Map();
mapaType.set("normal", 0);
mapaType.set("fire", 1);
mapaType.set("fighting", 2);
mapaType.set("water", 3);
mapaType.set("flying", 4);
mapaType.set("grass", 5);
mapaType.set("poison", 6);
mapaType.set("electric", 7);
mapaType.set("ground", 8);
mapaType.set("psychic", 9);
mapaType.set("rock", 10);
mapaType.set("ice", 11);
mapaType.set("bug", 12);
mapaType.set("dragon", 13);
mapaType.set("ghost", 14);
mapaType.set("dark", 15);
mapaType.set("steel", 16);

//fundos repetidos:
var sameType = {
    "electric": "steel",
    "dark": "ghost",
    "flying": "normal",
    "poison": "bug",
    "grass": "normal",
    "psychic": "normal"
};

var isExtraordinary = (index) => {
    let request = new XMLHttpRequest()
    var eh = false;
    request.open('GET', `https://pokeapi.co/api/v2/pokemon-species/${index}`, false)
    request.onload = function () {
        let species = JSON.parse(this.response);
        eh = species.is_legendary || species.is_mythical;
    }
    request.send();
    return eh;
}

var getType = (primario, secundario) => {
    let valorRetornavel = primario;
    if (matrizAdjacencia[mapaType.get(primario)][mapaType.get(secundario)] < 0) {

        valorRetornavel = secundario;
    }
    if (sameType[valorRetornavel]) {
        return sameType[valorRetornavel];
    }
    return valorRetornavel;
}

var setBackground = (primario,secundario)=>{
    document.getElementById("backgroundDex").src = `images/fundos/${getType(primario, secundario)}.jpg`
}

var retireFairy=(types)=>{
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
    return types;
}

export let utilizeTypes=(dataTypes)=>{
    let types = [];
    dataTypes.forEach(type => {
        types.push(type.type.name);
    })
    types=retireFairy(types);
    console.log(types)
    document.getElementById("typeTela").innerHTML = "";
    types.forEach((type) => {
        console.log(type)
        document.getElementById("typeTela").innerHTML += ` <img id="types" src="images/spriteTypes/${type}.png"> `
    })
    if (types.length == 1) {
        types.push("psychic");
    }
    setBackground(types[0], types[1]);
}