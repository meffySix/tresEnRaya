const assert = require("assert");
const {hayGanador, hayHueco} = require("../tablero");

describe("Determina el ganador", function() {

    it ("Tablero vacío", function() {
        assert.equal(hayGanador([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]), 0)
    })

    it ("Diagonal de O", function () {
        assert.equal(hayGanador([
            [1, 0, 0],
            [2, 1, 0],
            [2, 0, 1]
        ]), 1)
    })

    it ("Vertical de X", function () {
        assert.equal(hayGanador([
            [2, 1, 0],
            [2, 0, 1],
            [2, 1, 0]
        ]), 2)
    })

    it ("Horizontal de O", function () {
        assert.equal(hayGanador([
            [0, 0, 2],
            [1, 1, 1],
            [2, 0, 0]
        ]), 1)
    })

    it ("Diagonal inversa de X", function () {
        assert.equal(hayGanador([
            [1, 0, 2],
            [0, 2, 0],
            [2, 1, 1]
        ]), 2)
    })

    it ("Tablero lleno sin ganador", function () {
        assert.equal(hayGanador([
            [1, 2, 1],
            [2, 1, 1],
            [2, 1, 2]
        ]), 0)
    })

    it ("Horizontal de X", function () {
        assert.equal(hayGanador([
            [0, 1, 0],
            [2, 2, 2],
            [1, 1, 0]
        ]), 2)
    })

    it ("Vertical de O", function () {
        assert.equal(hayGanador([
            [0, 1, 0],
            [2, 1, 2],
            [0, 1, 0]
        ]), 1)
    })

    it ("Vertical de X con tablero cubierto", function () {
        assert.equal(hayGanador([
            [1, 1, 2],
            [2, 1, 2],
            [1, 2, 2]
        ]), 2)
    })

    it ("Horizontal de O con tablero cubierto", function () {
        assert.equal(hayGanador([
            [1, 1, 1],
            [2, 2, 1],
            [1, 2, 2]
        ]), 1)
    })

    it ("Horizontal de X con tablero cubierto", function () {
        assert.equal(hayGanador([
            [1, 1, 2],
            [2, 1, 1],
            [2, 2, 2]
        ]), 2)
    })

    it ("Diagonal inversa de O", function () {
        assert.equal(hayGanador([
            [1, 2, 1],
            [2, 1, 1],
            [1, 2, 2]
        ]), 1)
    })

    it ("Victoria de O sin cubrir una fila", function () {
        assert.equal(hayGanador([
            [0, 0, 0],
            [1, 1, 1],
            [2, 2, 0]
        ]), 1)
    })

    it ("Victoria de X sin cubrir dos columnas", function () {
        assert.equal(hayGanador([
            [0, 1, 2],
            [1, 0, 2],
            [0, 1, 2]
        ]), 2)
    })

    it ("Victoria de O con cuatro huecos iniciales", function () {
        assert.equal(hayGanador([
            [0, 0, 2],
            [0, 0, 2],
            [1, 1, 1]
        ]), 1)
    })
})

describe("Hay hueco", function () {
    it ("Colocar ficha en 0, 0 tablero vacío", function() {
        assert.equal(hayHueco([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ], 0, 0), true)
    })
})