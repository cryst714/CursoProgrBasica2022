function aleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo)
}

function eleccion(juagada) {
    let resultado = " "

    if (juagada == 1) {
        resultado = "elegiste : 🪨🪨"
    } else if (juagada == 2) {
        resultado = "elegiste : 📄📄"
    } else
        if (juagada == 3) {
            resultado = "elegiste : ✂️✂️"
        }
        else {
            resultado = "elegiste mal 😵‍💫"
        }
    return resultado
}

let jugador = 0
let pc = 0
let triunfo = 0
let perdidas = 0
let empate = 0
while (triunfo < 3 && perdidas < 3) {
    pc = aleatorio(1, 3)
    jugador = prompt("EL JUGADOR debe escoger: 1 piedra, 2 papel, 3 tiejera")

    alert("tu eliges : " + eleccion(jugador))
    alert("pc elegi : " + eleccion(pc))
    //combate
    if (pc == jugador) {
        alert("empate");
        empate++;
    } else
        if
            ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
            alert("ganaste");
            triunfo++;
        }
        else {
            alert("perdiste");
            perdidas++;
        }

}
alert("ganaste : " + triunfo + " veces, perdiste : " + perdidas + " veces , empataste : " + empate + " veces")