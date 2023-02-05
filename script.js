
var alterarSrc = (id, nome)=>{
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

alterarSrc("imagem","pikachu");


