var getMoveInformation = (url) => {
    let id = Number(url.split("/")[6])
    let info = {}
    let request = new XMLHttpRequest()

    request.open('GET', url, false)
    let moveInfo = ""
    request.onload = function () {

        moveInfo = JSON.parse(this.response)
        info={
            tipo:moveInfo.type.name,
            poder:moveInfo.power,
            acuracia:moveInfo.accuracy,
            tipoDano: moveInfo.damage_class.name,
            pp:moveInfo.pp
        }       
    }
    request.send()
    if (info.tipo=="fairy") {
        info.tipo="normal"
    }
    if(id>900){
        id-=9100
    }
    allMoves[id]=info;
    return info
}
var getAllMoves = (limitMoves)=>{
    for(let i=1;i<limitMoves;i++){
        getMoveInformation(`https://pokeapi.co/api/v2/move/${i>900?i+9100:i}`);
    }
}
export let allMoves = [
    null,
    {
        "tipo": "normal",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 35
    },
    {
        "tipo": "fighting",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 25
    },
    {
        "tipo": "normal",
        "poder": 15,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 18,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 80,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "fire",
        "poder": 75,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "ice",
        "poder": 75,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "electric",
        "poder": 75,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 35
    },
    {
        "tipo": "normal",
        "poder": 55,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 30
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 30,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 50,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 30
    },
    {
        "tipo": "flying",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 35
    },
    {
        "tipo": "flying",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 35
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "flying",
        "poder": 90,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 15,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 80,
        "acuracia": 75,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "grass",
        "poder": 45,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 25
    },
    {
        "tipo": "normal",
        "poder": 65,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "fighting",
        "poder": 30,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 30
    },
    {
        "tipo": "normal",
        "poder": 120,
        "acuracia": 75,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "fighting",
        "poder": 100,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 60,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "ground",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 65,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 25
    },
    {
        "tipo": "normal",
        "poder": 15,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 30,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 35
    },
    {
        "tipo": "normal",
        "poder": 85,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 15,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 90,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "poison",
        "poder": 15,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 35
    },
    {
        "tipo": "bug",
        "poder": 25,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "bug",
        "poder": 25,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "dark",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 25
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 40
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 55,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 55,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "poison",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 30
    },
    {
        "tipo": "fire",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 25
    },
    {
        "tipo": "fire",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "ice",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "water",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 25
    },
    {
        "tipo": "water",
        "poder": 110,
        "acuracia": 80,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "water",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "ice",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "ice",
        "poder": 110,
        "acuracia": 70,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": 65,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "water",
        "poder": 65,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "ice",
        "poder": 65,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 150,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "flying",
        "poder": 35,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 35
    },
    {
        "tipo": "flying",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "fighting",
        "poder": 80,
        "acuracia": 80,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "fighting",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "fighting",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "fighting",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "grass",
        "poder": 20,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 25
    },
    {
        "tipo": "grass",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": 90,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "grass",
        "poder": 55,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 25
    },
    {
        "tipo": "grass",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "poison",
        "poder": null,
        "acuracia": 75,
        "tipoDano": "status",
        "pp": 35
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": 75,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": 75,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "grass",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "bug",
        "poder": null,
        "acuracia": 95,
        "tipoDano": "status",
        "pp": 40
    },
    {
        "tipo": "dragon",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "fire",
        "poder": 35,
        "acuracia": 85,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "electric",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 30
    },
    {
        "tipo": "electric",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "electric",
        "poder": null,
        "acuracia": 90,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "electric",
        "poder": 110,
        "acuracia": 70,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "rock",
        "poder": 50,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "ground",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ground",
        "poder": null,
        "acuracia": 30,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "ground",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "poison",
        "poder": null,
        "acuracia": 90,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 25
    },
    {
        "tipo": "psychic",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": 60,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 40
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "normal",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 30
    },
    {
        "tipo": "normal",
        "poder": 20,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "ghost",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 85,
        "tipoDano": "status",
        "pp": 40
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "ghost",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "water",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 40
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 40
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "ice",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "flying",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 200,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": 100,
        "acuracia": 75,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ghost",
        "poder": 30,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 30
    },
    {
        "tipo": "poison",
        "poder": 30,
        "acuracia": 70,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "poison",
        "poder": 65,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "ground",
        "poder": 65,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "fire",
        "poder": 110,
        "acuracia": 85,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "water",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "water",
        "poder": 35,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 60,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 130,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 20,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 10,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 35
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": 80,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 130,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "psychic",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "poison",
        "poder": null,
        "acuracia": 90,
        "tipoDano": "status",
        "pp": 40
    },
    {
        "tipo": "normal",
        "poder": 15,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "bug",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 75,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "flying",
        "poder": 140,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "water",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 30
    },
    {
        "tipo": "normal",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 40
    },
    {
        "tipo": "poison",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "water",
        "poder": 100,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 250,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": 18,
        "acuracia": 80,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "ground",
        "poder": 50,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "rock",
        "poder": 75,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 80,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "normal",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 50,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 1
    },
    {
        "tipo": "fighting",
        "poder": 10,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "dark",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 25
    },
    {
        "tipo": "bug",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "ghost",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "fire",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 25
    },
    {
        "tipo": "normal",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "ghost",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "flying",
        "poder": 100,
        "acuracia": 95,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 40
    },
    {
        "tipo": "fighting",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "ghost",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "ice",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 25
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 30
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "dark",
        "poder": 60,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 75,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "poison",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "ground",
        "poder": 20,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "water",
        "poder": 65,
        "acuracia": 85,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "ground",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "electric",
        "poder": 120,
        "acuracia": 50,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 40
    },
    {
        "tipo": "ghost",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "ice",
        "poder": 55,
        "acuracia": 95,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "fighting",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "ground",
        "poder": 25,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "dragon",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "rock",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": 75,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "rock",
        "poder": 30,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 40
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 85,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "electric",
        "poder": 65,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "bug",
        "poder": 40,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "steel",
        "poder": 70,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 25
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 25
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "fire",
        "poder": 100,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "ground",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 30
    },
    {
        "tipo": "fighting",
        "poder": 100,
        "acuracia": 50,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "bug",
        "poder": 120,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "dragon",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 40
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "dark",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 40
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "steel",
        "poder": 100,
        "acuracia": 75,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "steel",
        "poder": 50,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 35
    },
    {
        "tipo": "fighting",
        "poder": 70,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "fighting",
        "poder": 100,
        "acuracia": 80,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "dragon",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "water",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "fire",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "dark",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "rock",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "ghost",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "psychic",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "water",
        "poder": 35,
        "acuracia": 85,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "fire",
        "poder": 95,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "ice",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "fire",
        "poder": null,
        "acuracia": 85,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "fighting",
        "poder": 150,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "electric",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "fighting",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 75,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "dark",
        "poder": 65,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "fire",
        "poder": 150,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "ghost",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "water",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 15,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "bug",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "psychic",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "flying",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "fire",
        "poder": 85,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ground",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "ice",
        "poder": 30,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "grass",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "poison",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 75,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fire",
        "poder": 150,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "water",
        "poder": 150,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "steel",
        "poder": 90,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ghost",
        "poder": 30,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "flying",
        "poder": 60,
        "acuracia": 95,
        "tipoDano": "special",
        "pp": 25
    },
    {
        "tipo": "fire",
        "poder": 130,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 40
    },
    {
        "tipo": "rock",
        "poder": 60,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "bug",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "steel",
        "poder": null,
        "acuracia": 85,
        "tipoDano": "status",
        "pp": 40
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": 55,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "water",
        "poder": 150,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "bug",
        "poder": 75,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "ghost",
        "poder": 60,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "psychic",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "fighting",
        "poder": 85,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "ground",
        "poder": 35,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "ice",
        "poder": null,
        "acuracia": 30,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "water",
        "poder": 90,
        "acuracia": 85,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": 25,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 30
    },
    {
        "tipo": "flying",
        "poder": 60,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "ice",
        "poder": 25,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 30
    },
    {
        "tipo": "steel",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 40
    },
    {
        "tipo": "dragon",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "grass",
        "poder": 150,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "fighting",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "flying",
        "poder": 85,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "ground",
        "poder": 55,
        "acuracia": 95,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "poison",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 25
    },
    {
        "tipo": "normal",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 25
    },
    {
        "tipo": "electric",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "grass",
        "poder": 60,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "water",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "grass",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "dragon",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "rock",
        "poder": 25,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "electric",
        "poder": 60,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "water",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "steel",
        "poder": 140,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": 140,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "flying",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 40
    },
    {
        "tipo": "fighting",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 100,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "steel",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "water",
        "poder": 65,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 30,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "flying",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "flying",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "steel",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "bug",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "fighting",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "dark",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "dark",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "poison",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": 140,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "dark",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "poison",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "water",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "electric",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "fire",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "fighting",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 80,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "rock",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "poison",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "dark",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "dark",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "water",
        "poder": 90,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "flying",
        "poder": 75,
        "acuracia": 95,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "bug",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "bug",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "dragon",
        "poder": 85,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "dragon",
        "poder": 100,
        "acuracia": 75,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "rock",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "fighting",
        "poder": 75,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 30
    },
    {
        "tipo": "fighting",
        "poder": 120,
        "acuracia": 70,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "grass",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "flying",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "ground",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 150,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "steel",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 30
    },
    {
        "tipo": "ice",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ice",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 30
    },
    {
        "tipo": "ghost",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "electric",
        "poder": 65,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "ice",
        "poder": 65,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "fire",
        "poder": 65,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "ghost",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 30
    },
    {
        "tipo": "ground",
        "poder": 65,
        "acuracia": 85,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "psychic",
        "poder": 80,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "steel",
        "poder": 65,
        "acuracia": 85,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "steel",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 90,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "flying",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "dragon",
        "poder": 130,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "electric",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "fire",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "grass",
        "poder": 130,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "grass",
        "poder": 120,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "rock",
        "poder": 150,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "poison",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "poison",
        "poder": 120,
        "acuracia": 80,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "steel",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "steel",
        "poder": 60,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "rock",
        "poder": 100,
        "acuracia": 80,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "rock",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "flying",
        "poder": 65,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "bug",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "electric",
        "poder": 50,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "water",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "bug",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "bug",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "bug",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "rock",
        "poder": 150,
        "acuracia": 80,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": 35,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "dragon",
        "poder": 150,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "dragon",
        "poder": 100,
        "acuracia": 95,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "fire",
        "poder": 100,
        "acuracia": 75,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": 50,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": 120,
        "acuracia": 85,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "ghost",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "ghost",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "rock",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "poison",
        "poder": 65,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "steel",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "bug",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "rock",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "fighting",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fire",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "poison",
        "poder": 95,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "bug",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "steel",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "electric",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "water",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "fire",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "poison",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "fighting",
        "poder": 65,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "poison",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "dark",
        "poder": 95,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "poison",
        "poder": 50,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "psychic",
        "poder": 20,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "water",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "ghost",
        "poder": 65,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "flying",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "steel",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 60,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fire",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "flying",
        "poder": 55,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "fighting",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "fire",
        "poder": 100,
        "acuracia": 50,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "water",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "fire",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "electric",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "bug",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "ground",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "ice",
        "poder": 60,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "dragon",
        "poder": 60,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "electric",
        "poder": 55,
        "acuracia": 95,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "electric",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "ground",
        "poder": 80,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "dragon",
        "poder": 40,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "psychic",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 25
    },
    {
        "tipo": "grass",
        "poder": 75,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "water",
        "poder": 75,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fire",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": 65,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "bug",
        "poder": 65,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "dark",
        "poder": 85,
        "acuracia": 95,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 25,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "flying",
        "poder": 110,
        "acuracia": 70,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "steel",
        "poder": 50,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "fire",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": 75,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 85,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "ice",
        "poder": 65,
        "acuracia": 95,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "electric",
        "poder": 130,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "fire",
        "poder": 130,
        "acuracia": 85,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "fire",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "ice",
        "poder": 140,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "ice",
        "poder": 140,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "dark",
        "poder": 55,
        "acuracia": 95,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "ice",
        "poder": 85,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fire",
        "poder": 180,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "fire",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "electric",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "fighting",
        "poder": 100,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "poison",
        "poder": 120,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "ground",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "bug",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "bug",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 25
    },
    {
        "tipo": "ghost",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ghost",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "electric",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 25
    },
    {
        "tipo": "electric",
        "poder": 65,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "grass",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "ice",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 40,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "electric",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 90,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 30
    },
    {
        "tipo": "normal",
        "poder": 95,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 140,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "steel",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "rock",
        "poder": 100,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "water",
        "poder": 110,
        "acuracia": 95,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": 80,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "water",
        "poder": 15,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "fire",
        "poder": 75,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "electric",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "poison",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "bug",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "electric",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "electric",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 40
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 40
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "electric",
        "poder": 20,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 40
    },
    {
        "tipo": "bug",
        "poder": 20,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "fighting",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "flying",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "ground",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ground",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ground",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 140,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "water",
        "poder": 110,
        "acuracia": 85,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "ground",
        "poder": 120,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "flying",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "dark",
        "poder": 100,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "fighting",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "fighting",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "flying",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "flying",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "poison",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "poison",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "ground",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "ground",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "rock",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "rock",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "bug",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "bug",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "ghost",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "ghost",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "steel",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "steel",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "fire",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "fire",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "water",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "water",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "electric",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "electric",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "ice",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "ice",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "dragon",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "dragon",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "electric",
        "poder": 210,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "ground",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "bug",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "poison",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "ghost",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "dark",
        "poder": 85,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "water",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "ice",
        "poder": 100,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "ground",
        "poder": 95,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": 125,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 40
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "poison",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 30
    },
    {
        "tipo": "steel",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "dark",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "bug",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "steel",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "bug",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "fire",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "dark",
        "poder": 20,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fire",
        "poder": 130,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "steel",
        "poder": 70,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "poison",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "dragon",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "flying",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "dragon",
        "poder": 110,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "dragon",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "dark",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "ice",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "ghost",
        "poder": 180,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "dark",
        "poder": 180,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "water",
        "poder": 195,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "ghost",
        "poder": 195,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "electric",
        "poder": 175,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "normal",
        "poder": 210,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 1
    },
    {
        "tipo": "psychic",
        "poder": 185,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "fire",
        "poder": 150,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": 130,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": 85,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ground",
        "poder": 75,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ghost",
        "poder": 85,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "rock",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "water",
        "poder": 85,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": 160,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "ghost",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "steel",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "ghost",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "electric",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "electric",
        "poder": 195,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "fire",
        "poder": 150,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "electric",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "psychic",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": 200,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "steel",
        "poder": 200,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "ghost",
        "poder": 200,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "normal",
        "poder": 190,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "rock",
        "poder": 190,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 1
    },
    {
        "tipo": "dragon",
        "poder": 185,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 1
    },
    {
        "tipo": "electric",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "water",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "flying",
        "poder": 90,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "electric",
        "poder": null,
        "acuracia": null,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "water",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "electric",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "fire",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "psychic",
        "poder": 80,
        "acuracia": 95,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "dark",
        "poder": 80,
        "acuracia": 95,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "grass",
        "poder": 100,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ice",
        "poder": 100,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 120,
        "acuracia": 85,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "steel",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "dragon",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "water",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "dark",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "rock",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "psychic",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 20
    },
    {
        "tipo": "dragon",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "electric",
        "poder": 85,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "water",
        "poder": 85,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "fire",
        "poder": 100,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "bug",
        "poder": 10,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "electric",
        "poder": 10,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 10,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 10,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ghost",
        "poder": 10,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ice",
        "poder": 10,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "poison",
        "poder": 10,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "water",
        "poder": 10,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "flying",
        "poder": 10,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 10,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "dragon",
        "poder": 10,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": 10,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "rock",
        "poder": 10,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ground",
        "poder": 10,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "dark",
        "poder": 10,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": 10,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "steel",
        "poder": 10,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "dragon",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "fighting",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "grass",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": 35,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "fire",
        "poder": 120,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "steel",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "steel",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "electric",
        "poder": 110,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "dragon",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "grass",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 40
    },
    {
        "tipo": "electric",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 75,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 90,
        "acuracia": 95,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "water",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "dark",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "dark",
        "poder": 80,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 150,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "dragon",
        "poder": 160,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "steel",
        "poder": 140,
        "acuracia": 95,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "steel",
        "poder": 130,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "dragon",
        "poder": 25,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "rock",
        "poder": 120,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "poison",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "grass",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "electric",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "bug",
        "poder": 70,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fire",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "dark",
        "poder": 75,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "ghost",
        "poder": 110,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "poison",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 40
    },
    {
        "tipo": "fighting",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "water",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "ice",
        "poder": 20,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "flying",
        "poder": 40,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ground",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "dark",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "water",
        "poder": 25,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "electric",
        "poder": 80,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "dragon",
        "poder": 150,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "dark",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ice",
        "poder": 130,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "ghost",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "poison",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "psychic",
        "poder": 70,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 0,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "rock",
        "poder": 65,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 100,
        "acuracia": 80,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": 70,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "fire",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "water",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": 150,
        "acuracia": 95,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "ice",
        "poder": 100,
        "acuracia": 85,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 0,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "ground",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "poison",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "ghost",
        "poder": 75,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "steel",
        "poder": 0,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ghost",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 15
    },
    {
        "tipo": "dark",
        "poder": 65,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "flying",
        "poder": 100,
        "acuracia": 80,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "electric",
        "poder": 100,
        "acuracia": 80,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "ground",
        "poder": 100,
        "acuracia": 80,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": 0,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": 0,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "bug",
        "poder": 0,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 120,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ghost",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "psychic",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "dragon",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "water",
        "poder": 60,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "grass",
        "poder": 0,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 15
    },
    {
        "tipo": "steel",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": 20,
        "acuracia": 90,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "ice",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "dragon",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": 0,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 1
    },
    {
        "tipo": "rock",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "water",
        "poder": 30,
        "acuracia": 95,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "poison",
        "poder": 30,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 15
    },
    {
        "tipo": "normal",
        "poder": 0,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 0,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "dark",
        "poder": 85,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "grass",
        "poder": 70,
        "acuracia": null,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fire",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "water",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "steel",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 35
    },
    {
        "tipo": "normal",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 35
    },
    {
        "tipo": "dark",
        "poder": 1,
        "acuracia": 90,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "electric",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "normal",
        "poder": 0,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "ice",
        "poder": 0,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 0,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "ice",
        "poder": 0,
        "acuracia": null,
        "tipoDano": "status",
        "pp": 10
    },
    {
        "tipo": "bug",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "grass",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "water",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 20
    },
    {
        "tipo": "normal",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "psychic",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 10
    },
    {
        "tipo": "ghost",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fire",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": 5
    },
    {
        "tipo": "fire",
        "poder": 90,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "electric",
        "poder": 120,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "steel",
        "poder": 160,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 5
    },
    {
        "tipo": "dark",
        "poder": 1,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "water",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 20
    },
    {
        "tipo": "fire",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "dark",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "poison",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "fighting",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "normal",
        "poder": 100,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": 10
    },
    {
        "tipo": "shadow",
        "poder": 55,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": null
    },
    {
        "tipo": "shadow",
        "poder": 80,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": null
    },
    {
        "tipo": "shadow",
        "poder": 40,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": null
    },
    {
        "tipo": "shadow",
        "poder": 75,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": null
    },
    {
        "tipo": "shadow",
        "poder": 75,
        "acuracia": 100,
        "tipoDano": "physical",
        "pp": null
    },
    {
        "tipo": "shadow",
        "poder": 75,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": null
    },
    {
        "tipo": "shadow",
        "poder": 120,
        "acuracia": 60,
        "tipoDano": "physical",
        "pp": null
    },
    {
        "tipo": "shadow",
        "poder": 75,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": null
    },
    {
        "tipo": "shadow",
        "poder": 70,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": null
    },
    {
        "tipo": "shadow",
        "poder": 95,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": null
    },
    {
        "tipo": "shadow",
        "poder": 50,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": null
    },
    {
        "tipo": "shadow",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": null
    },
    {
        "tipo": "shadow",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "special",
        "pp": null
    },
    {
        "tipo": "shadow",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": null
    },
    {
        "tipo": "shadow",
        "poder": null,
        "acuracia": 100,
        "tipoDano": "status",
        "pp": null
    },
    {
        "tipo": "shadow",
        "poder": null,
        "acuracia": 90,
        "tipoDano": "status",
        "pp": null
    },
    {
        "tipo": "shadow",
        "poder": null,
        "acuracia": null,
        "tipoDano": "status",
        "pp": null
    }
]