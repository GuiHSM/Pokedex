let yellow = false;
let red = false;

export let activeBlueLight = () => {
    document.getElementById("blueLight").className = "blueLightBrilho";
    setTimeout((() => { document.getElementById("blueLight").className = "" }), 300);
}

export let activeGreenLight = () => {
    document.getElementById("greenLight").className = "smallLight greenLightBrilho";
    setTimeout((() => { document.getElementById("greenLight").className = "smallLight" }), 300);
}
export let setYellowLight=()=>{
    yellow = !yellow;
    if (yellow) {
        document.getElementById("yellowLight").className = "smallLight yellowLightBrilho";
    } else {
        document.getElementById("yellowLight").className = "smallLight";
    }
}

export let setRedLight=()=>{
    red = !red;
    if (red) {
        document.getElementById("redLight").className = "smallLight redLightBrilho";
    } else {
        document.getElementById("redLight").className = "smallLight";
    }
}

export let activeYellowLight = () => {
    document.getElementById("rightYellowLight").className = "rightYellowLightBrilho";
    setTimeout((() => { document.getElementById("rightYellowLight").className = "" }), 300);
}
