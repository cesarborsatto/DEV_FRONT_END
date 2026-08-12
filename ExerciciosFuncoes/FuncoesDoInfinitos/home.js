// === Dueto 6 - Alternância Letal

// - Variaveis
/**@type {'D'|'G'[]}*/
const ordem = []
let hpCacador = 150
const ataqueD = 12
const ataqueG = 8
const venenoG = 3
let ataqueConsecutivoD = 0
let ataqueConsecutivoG = 0
let i = 0
let ataqueAtual
let comboG
let comboD

// - Entrada de Dados
const qtdeOrdem = parseInt(prompt('Digite a quantidade de ordem a ser executada:'))
for (let i = 0; i < qtdeOrdem; i++) {

    let ordens = prompt('Digite "D" para ataque da daki ou "G" para ataque do Gyutaro').toUpperCasee().trim()
    ordem.push(ordens)
}

do {

    ataqueAtual = 0

    if (ordem[i] === D) {
        ataqueConsecutivoD++
        ataqueConsecutivoG = 0
    }

    else {
        ataqueConsecutivoG++
        ataqueConsecutivoD = 0
    }

    if (ataqueConsecutivoD === 2) {
        ataqueAtual = ataqueD * 2
        ataqueConsecutivoD = 0
    }

    else if (ataqueConsecutivoD < 2) {
        ataqueAtual = ataqueD
    }

    else if (ataqueConsecutivoG === 2 ) {
        ataqueAtual = ataqueG * 2
        ataqueConsecutivoG = 0
    }

    else if (taqueConsecutivoG < 2) {
        ataqueAtual = ataqueG
    }
   

    hpCacador = hpCacador - ataqueAtual

    i++
} while (hpCacador > 0 && ordem.length > 0);