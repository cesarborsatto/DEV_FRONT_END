// -- Linha de Potes - Quebra Sequencial

function processarPotes(resistencias, golpes) {

    resistencias = []
    golpes = []
    /** @type {{resistenciaFinal: number, status: ("QUEBRADO"|"INTEIRO")}[]} */
    const restos = []
    let indicePotes = 0
    let indiceGolpes = 0
    let poteQuebrado = 0
    let qtdeEstilhacos = 0

    let qtdeGolpes = parseInt(prompt('Ditite a quantidade de golpes (minimo 4 golpes).'))

    while (qtdeGolpes < 4) {
        qtdeGolpes = parseInt(prompt('Ditite pelo menos 4 de golpes.'))
    }

    let qtdePotes_resistencia = parseInt(prompt('Digite a quantidade de potes (minimo 3), e em seguida as resistencias.'))

    while (qtdePotes_resistencia < 3) {
        qtdePotes_resistencia = parseInt(prompt('Digite a quantidade de potes novamente (minimo de 3), e em seguida as resistencias.'))
    }

    for (let i = 0; i < qtdePotes_resistencia; i++) {
        resistencias.push(parseInt(prompt(`Digite a resistência do pote ${i + 1}:`)))
    }

    for (let i = 0; i < qtdeGolpes; i++) {
        golpes.push(parseInt(prompt(`Digite o valor do golpe${i + 1} a ser aplicado:`)))
    }

    for (let i = 0; (indicePotes < resistencias.length && indiceGolpes < golpes.length); i++) {

        resistencias[indicePotes] = resistencias[indicePotes] - golpes[indiceGolpes]

        if (golpes[indiceGolpes] >= 25 && indicePotes + 1 < resistencias.length) {
            resistencias[indicePotes + 1] -= 5
            qtdeEstilhacos++
        }

        if (resistencias[indicePotes] <= 0) {
            indicePotes++
            poteQuebrado++
        }

        indiceGolpes++

    }

    for (let i = 0; i < resistencias.length; i++) {
        if (resistencias[i] <= 0) {

            restos.push({
                resistenciaFinal: resistencias[i],
                status: "QUEBRADO"
            })
        }

        else {
            restos.push({
                resistenciaFinal: resistencias[i],
                status: "INTEIRO"
            })
        }
    }

    return({
    qtdePotesQuebrados: poteQuebrado,
    qtdeGolpesUsados: indiceGolpes,
    qtdeEstilhacosAplicados: qtdeEstilhacos,
    restos
})
}

const resultado = processarPotes();

console.log(resultado);