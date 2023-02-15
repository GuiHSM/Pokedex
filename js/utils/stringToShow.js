var ahRetirar = ["Ordinary","land", "normal", "plant", "default", "standard", "altered"]

export let stringToShow = (texto) => {
    return texto.replace(" ", "").replace("-", " ").replace(ahRetirar, "");
}