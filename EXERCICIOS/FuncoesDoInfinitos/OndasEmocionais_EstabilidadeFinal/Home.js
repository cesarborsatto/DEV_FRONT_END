
let ondas = []

    let qtdDados = parseInt(prompt('Digite a quantidade de dados a ser processados. (Minimo "5".'))

while (isNaN(qtdDados) || qtdDados < 5) {    
        qtdDados = parseInt(prompt('Digite novamente a quantidade de dados a ser processados.(Minimo "5".'))
    }
    
for (let i = 0; i < qtdDados; i++) {

    let entradaDados = prompt(`Digite o valor da ${i + 1}ª entradas de dados. (Raiva, Tristeza, Alegria, Prazer)`).trim().toUpperCase()

    while (!(entradaDados === 'RAIVA' || entradaDados === 'TRISTEZA' || entradaDados === 'ALEGRIA' || entradaDados === 'PRAZER')) {
        entradaDados = prompt("Valor Incorreto. Digite novamente (Raiva, Tristeza, Alegria, Prazer)").trim().toUpperCase()
    }
    ondas.push(entradaDados)

}


function estabilidadeFinalCacador(ondas, estabilidadeInicial, limitesRodadas) {

    let controleRodadas = 0
    let alegriaConscutivas = 0
    let raivaConsecutiva = 0
    let comboRaiva = 0
    let comboAlegria = 0
    let estabiledadeFinal = 0

    for (let i = 0; (i < ondas.length && i < limitesRodadas && estabilidadeInicial > 0); i++) {

        if (ondas[i] === 'RAIVA') {
            estabilidadeInicial -= 10
            alegriaConscutivas = 0
            raivaConsecutiva++
        }

        else if (ondas[i] === 'TRISTEZA') {
            estabilidadeInicial -= 5
            alegriaConscutivas = 0
            raivaConsecutiva = 0
        }

        else if (ondas[i] === 'ALEGRIA') {
            estabilidadeInicial += 5
            alegriaConscutivas++
            raivaConsecutiva = 0
        }

        else {
            estabilidadeInicial += 3
            alegriaConscutivas = 0
            raivaConsecutiva = 0
        }

        // -----------------------------
        if (alegriaConscutivas === 2) {
            estabilidadeInicial += 4
            comboAlegria++
            alegriaConscutivas = 0

        }

        if (raivaConsecutiva === 2) {
            estabilidadeInicial -= 8
            comboRaiva++
            raivaConsecutiva = 0

        }

        controleRodadas++

    }

    if (estabilidadeInicial <= 0) {
        estabiledadeFinal = 0
    }

    else {
        estabiledadeFinal = estabilidadeInicial
    }

    if (estabiledadeFinal > 0) {
        return (`Caçador estavel com ${estabiledadeFinal} de estabilidade.
            Foram ${controleRodadas} rodadas de onde.
            Foram ${comboAlegria} combos de alegria.
            Foram ${comboRaiva} combos de raiva`)
    }

    else {
        return (`Caçador em COLAPSO, ${estabiledadeFinal} de estabilidade.
            Foram ${controleRodadas} rodadas de onde.
            Foram ${comboAlegria} combos de alegria.
            Foram ${comboRaiva} combos de raiva`)
    }
}


const resultado = estabilidadeFinalCacador(ondas, 90, 20);


alert(resultado);