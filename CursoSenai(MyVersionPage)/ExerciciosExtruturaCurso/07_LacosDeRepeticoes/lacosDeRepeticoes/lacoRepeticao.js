// let contador = 0

// while (contador < 20){
//     alert('Oi')
//     contador ++
// }


//  =============  ==  =============  //

// let contador = 0 

// while (contador <= 200){
//     if (contador % 2 == 0 ){
//         alert(contador)
//     }
//     contador++
// }

//   ----------------------------------------------------------------------------------------------

//  =============  Protocolo Randall  =============  //

//  1 - Vigilância CDA

// let qtdeLeituraConsecutivaOk = 0
// let qtdeLeituraConsecutivaAlerta = 0
// let MaiorSequenciaAlerta = 0
// let totalLeitura = 0

// while (qtdeLeituraConsecutivaOk < 5) {
//     const valorLeitura = prompt('Digite o valor da leitura (ok, alerta)').toLowerCase().trim()
    // while(!(valorLeitura === 'ok' || valorLeitura ==='alerta'))
    // {
    //     prompt('Digite corretamente o valor da leitura')
    //      valorLeitura = prompt('Digite o valor da leitura (ok, alerta)').toLowerCase()
    // }

//     if (valorLeitura === 'ok') {
//         qtdeLeituraConsecutivaOk++
        
//         if (MaiorSequenciaAlerta < qtdeLeituraConsecutivaAlerta){
//             MaiorSequenciaAlerta = qtdeLeituraConsecutivaAlerta
//         }

//         qtdeLeituraConsecutivaAlerta = 0
//     }

//     else {
//         qtdeLeituraConsecutivaOk = 0
//         qtdeLeituraConsecutivaAlerta++
//     }
//     totalLeitura++
// }

// alert(`Total leituras: ${totalLeitura}`)
// alert(`Maior sequencia de alerta: ${MaiorSequenciaAlerta}`)




//  2 - Rastreamento do Randall

// let pegadaConsectivas = 0
// let leiturasFeitas = 0
// let quaseFoiPego = false


// while(pegadaConsectivas < 2){
//     const valorEntrada = prompt('Digite o valor da leitura (PEGADA, GEL ou NADA)').toUpperCase().trim()
   
//     leiturasFeitas++

//     if(valorEntrada === 'PEGADA'){

//        pegadaConsectivas++
//     }
//     else{
//         if (pegadaConsectivas > 0){
//             quaseFoiPego = true
//         }
//         pegadaConsectivas = 0
//     }      
// }



// alert(`Quantidade de Leituras: ${leiturasFeitas}`)

// if(quaseFoiPego == true){
//     alert('Foi quase Pego')
// }


//----------------------------------------------------------------------

//  =============  Porta do Sussurro  =============  //

// - Validação CDA – Formato de Código

// let contador = 0
// let entrada
// let regexCDA = /^CDA-\d{3}$/
// let teste = regexCDA.test(entrada)

// do{
//     entrada = prompt('Digite o codigo: (ex.: CDA-204).').toUpperCase()
//     contador++
// }while(!regexCDA.test(entrada))

// alert('Liberado')
// alert(`Teve ${contador} tentativas`)

// -  Porta Silenciosa — 3 OK Seguidos

let valorMedicao = 0
let contador = 0
let leiturasConsecutivasMenorVinte = 0
let maiorMedicao = 0


do{
valorMedicao = parseInt(prompt('Digite o valor da Medição (0-100)'))

if(valorMedicao < 20){
    leiturasConsecutivasMenorVinte++
}
else{
    leiturasConsecutivasMenorVinte = 0
}

if(maiorMedicao < valorMedicao){
        maiorMedicao = valorMedicao

}
contador++
}while(contador < 12 && (leiturasConsecutivasMenorVinte < 3))

    if(leiturasConsecutivasMenorVinte === 3){
        alert('Silêncio aprovado')
    }
    else{
        alert('Silêncio reprovado')
    }
alert(`Quantidade de Leituras ${contador}`)
alert(`Maior medição foi de ${maiorMedicao}`)
    






