// === Dueto 6 - Alternância Letal

function alternanciaLetal() {

    // - Variaveis
    /**@type {('D'|'G')[]}*/
    const ordem = []
    let hpCacador = 150
    const ataqueD = 12
    const ataqueG = 8
    const venenoG = 3
    let ataqueConsecutivoD = 0
    let ataqueConsecutivoG = 0
    let j = 0
    let ataqueAtual
    let comboG = 0
    let comboD = 0
    let acumuloVeneno = 0

    // - Entrada de Dados
    const qtdeOrdem = parseInt(prompt('Digite a quantidade de ordem a ser executada:'))
    for (let i = 0; i < qtdeOrdem; i++) {

        let ordens = prompt('Digite "D" para ataque da daki ou "G" para ataque do Gyutaro').toUpperCase().trim()
        ordem.push(ordens)
    }


    // - Processamento de Dados
    do {

        ataqueAtual = 0

        if (ordem[j] === 'D') {
            ataqueConsecutivoD++
            ataqueConsecutivoG = 0
        }

        else {
            ataqueConsecutivoG++
            ataqueConsecutivoD = 0
            acumuloVeneno = acumuloVeneno + 3
        }

        // ------------------------------------------- //

        if (ordem[j] === 'D' && ataqueConsecutivoD === 2) {
            ataqueAtual = ataqueD * 2
            ataqueConsecutivoD = 0
            comboD++
        }

        else if (ordem[j] === 'D' && ataqueConsecutivoD < 2) {
            ataqueAtual = ataqueD
        }

        else if (ordem[j] === 'G' && ataqueConsecutivoG === 2) {
            ataqueAtual = ataqueG * 2
            ataqueConsecutivoG = 0
            comboG++
        }

        else if (ordem[j] === 'G' && ataqueConsecutivoG < 2) {
            ataqueAtual = ataqueG
        }

        hpCacador = hpCacador - ataqueAtual

        j++

    } while (hpCacador > 0 && j < ordem.length);

    hpCacador = hpCacador - acumuloVeneno

    // - Saída de Dados
    if (hpCacador <= 0) {
        alert('O Cacador foi derrotado!')
    }

    else {
        alert(`O Cacador sobreviveu com ${hpCacador} de HP!`)
    }

    alert(`    Foram realizadas ${j} rodadas.
    O caçador recebeu ${acumuloVeneno} de dano por veneno!
    A Daki realizou ${comboD} combos e o Gyutaro realizou ${comboG} combos!
    Com um total de ${comboD + comboG} combos!`)
}

alternanciaLetal()

//______________________________________________________________________