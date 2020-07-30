// Ctrl+Shift+P -> Git Push(follow tags): Así ahce un push con tags incluidos.

/**
 * Determina cuál es el ganador en un tablero de tres en raya y si hay alguno.
 * Los posibles resultados serán: 
 * 0 -> no hay ganador
 * 1 -> gana O
 * 2 -> gana X
 * @param {array} tablero Matriz de 3x3 números
 */
function hayGanador(tablero) {
    // Comprobar filas (horizontal)
    for (let i = 0; i < tablero.length; i++) {
        if (tablero[i][0]==tablero[i][1] && tablero[i][0]==tablero[i][2] && tablero[i][0] != 0) {
            return tablero[i][0];
        }
    }
    // Comprobar columnas (verticales)
    for (let n = 0; n < tablero.length; n++) { 
        if (tablero[0][n]==tablero[1][n] && tablero[0][n]==tablero[2][n] && tablero[0][n] != 0) {
            return tablero[0][n];
        }
    }
    // Comprobar diagonales
    if (tablero[0][0]==tablero[(1)][1] && tablero[0][0]==tablero[(2)][2]) {
        return tablero[0][0];
    } else if (tablero[0][2]==tablero[1][1] && tablero[0][2]==tablero[2][0]) {
        return tablero[0][2];
    }
    // En caso de no ganar nadie
    return 0;
}
/**
 * Esta función determina si en el tablero hay un hueco en la posición indicada
 * por fila y columna Si es así, devuelve true; si no, false.
 * 
 * @param {array} tablero Array de 3x3 números indicando el estado del tablero
 * @param {number} fila Número de fila (de 0 a 2) 
 * @param {number} columna Número de columna (de 0 a 2)
 */
function hayHueco(tablero, fila, columna) {
    return true; //TODO: falta implementar la lógica
}

module.exports = {
    hayGanador,
    hayHueco
}