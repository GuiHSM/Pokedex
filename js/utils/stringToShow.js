var ahRetirar = ["-ordinary","-land", "-normal", "-plant", "-default", "-standard", "-altered","-incarnate", "-red-striped", "-aria"]

export let stringToShow = (texto) => {
    ahRetirar.forEach((valor)=>{
        texto = texto.replace(valor,"");
    })
    return texto.replace("-", " ").replace(" ", "");
}