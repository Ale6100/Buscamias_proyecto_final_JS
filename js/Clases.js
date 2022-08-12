class Casillero { // Clase que crea casilleros
    constructor() {
        this.estado = "oculto" // "oculto" o "visible"
        this.gato = false   // sin gato o con gato (false o true)
        this.gatosVecinos = null // "" o un número (por defecto no es ninguno)
        this.bandera = false // sin bandera o con bandera (false o true)
    }

    visibleTexto(tablero, i, j, casillero) { // Hace que un casillero pase a estar descubierto
        tablero[i][j].noVisibleBandera(tablero, i, j, casillero)
        casillero.classList.remove("casilleroOculto")
        casillero.children[0].classList.remove("textoOculto")
        casillero.classList.add("visibleTexto")
        tablero[i][j].estado = "visible"
    }

    visibleBandera(tablero, i, j, casillero) { // Agrega una bandera
        casillero.children[1].innerText = `🚩`
        tablero[i][j].bandera = true
    }

    noVisibleBandera(tablero, i, j, casillero) { // Quita una bandera
        casillero.children[1].innerText = ``
        tablero[i][j].bandera = false
    }
}

class InputsPasados { // Clase que luego uso para crear un objeto con los valores de los inputs y guardarlo en localstorage
    constructor(cantidadDeFilas, cantidadDeColumnas, porcentajeDeGatos) {
        this.filas = cantidadDeFilas
        this.columnas = cantidadDeColumnas
        this.porcentGatos = porcentajeDeGatos
    }
}