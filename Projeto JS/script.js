let jogador_X = "X"
let jogador_O = "O"
let jogadorDaVez = 1;
let jogador = document.getElementById("jogadorDaVez")
let casa1 = document.getElementById("cell1")
let casa2 = document.getElementById("cell2")
let casa3 = document.getElementById("cell3")
let casa4 = document.getElementById("cell4")
let casa5 = document.getElementById("cell5")
let casa6 = document.getElementById("cell6")
let casa7 = document.getElementById("cell7")
let casa8 = document.getElementById("cell8")
let casa9 = document.getElementById("cell9")

function marcaCasa(event, numCasa) {

    let casa = event.target;
    if (casa.innerText != jogador_X && casa.innerText != jogador_O) {
        if (jogadorDaVez == 1) {
            casa.innerHTML = jogador_X
            casa.style.background = "blue";
            jogador.innerHTML = jogador_O
            jogadorDaVez = 0;
            alert(`O número da casa clicada foi ${numCasa}`)
        } else {
            casa.innerHTML = jogador_O
            casa.style.background = "red";
            jogador.innerHTML = jogador_X
            jogadorDaVez = 1;
            alert(`O número da casa clicada foi ${numCasa}`)
        } main()
    } else {
        alert("A casa já foi marcada! Tente outra!")
    } marcaCasa()

}

function vitoriaHorizontalVertical() {
    if (casa1.innerText == jogador_X && casa2.innerText == jogador_X && casa3.innerText == jogador_X) {
        alert("Vitória do jogador X")
    } else if (casa1.innerText == jogador_O && casa2.innerText == jogador_O && casa3.innerText == jogador_O) {
        alert("Vitória do jogador O")
    } else if (casa4.innerText == jogador_X && casa5.innerText == jogador_X && casa6.innerText == jogador_X) {
        alert("Vitória do jogador X")
    } else if (casa4.innerText == jogador_O && casa5.innerText == jogador_O && casa6.innerText == jogador_O) {
        alert("Vitória do jogador O")
    } else if (casa7.innerText == jogador_X && casa8.innerText == jogador_X && casa9.innerText == jogador_X) {
        alert("Vitória do jogador X")
    } else if (casa7.innerText == jogador_O && casa8.innerText == jogador_O && casa9.innerText == jogador_O) {
        alert("Vitória do jogador O")
    } else if (casa1.innerText == jogador_X && casa4.innerText == jogador_X && casa7.innerText == jogador_X) {
        alert("Vitória do jogador X")
    } else if (casa1.innerText == jogador_O && casa4.innerText == jogador_O && casa7.innerText == jogador_O) {
        alert("Vitória do jogador O")
    } else if (casa2.innerText == jogador_X && casa5.innerText == jogador_X && casa8.innerText == jogador_X) {
        alert("Vitória do jogador X")
    } else if (casa2.innerText == jogador_O && casa5.innerText == jogador_O && casa8.innerText == jogador_O) {
        alert("Vitória do jogador O")
    } else if (casa3.innerText == jogador_X && casa6.innerText == jogador_X && casa9.innerText == jogador_X) {
        alert("Vitória do jogador X")
    } else if (casa3.innerText == jogador_O && casa6.innerText == jogador_O && casa9.innerText == jogador_O) {
        alert("Vitória do jogador O")
    } else {
        return false
    }
}
function vitoriaDiagonal() {
    if (casa1.innerText == jogador_X && casa5.innerText == jogador_X && casa9.innerText == jogador_X) {
        alert("Vitória do jogador X")
    } else if (casa1.innerText == jogador_O && casa5.innerText == jogador_O && casa9.innerText == jogador_O) {
        alert("Vitória do jogador O")
    } else if (casa3.innerText == jogador_X && casa5.innerText == jogador_X && casa7.innerText == jogador_X) {
        alert("Vitória do jogador X")
    } else if (casa3.innerText == jogador_O && casa5.innerText == jogador_O && casa7.innerText == jogador_O) {
        alert("Vitória do jogador O")
    } else {
        return false
    }
}

function main() {
    vitoriaHorizontalVertical()
    vitoriaDiagonal()
}




