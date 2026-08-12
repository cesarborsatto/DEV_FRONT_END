// FUNCOES SEM ARGUMENTO E SEM RETORNO
function dizBomDia() {
    alert('Bom Dia!!!')
}

// dizBomDia()


//  ---   CALCULAR QUADRADO ---  //

function calculaRQuadrado() {
    const numero = parseInt(prompt('Digite um Valor'))

    const quadrado = numero * numero

    alert(`O quadrado do numero é: ${quadrado}`)
}

// calculaRQuadrado()

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//   --- Exercicios em Sala ---   //                                                                    //
//
// Crie uma função chamada mostraIdade, onde é solicitado ao usuario seu nome e sua idade.              //
// Mostre esses dois valores numa mesma mensagem dentro de um alert.                                    //
//
//
//
// --> Função e Entrada de Dados                                                                        //
function mostraIdade() {                                                                                //
    let nome = prompt('Digite seu nome:')                                                               //
    let idade = parseInt(prompt('Digite sua idade:'))                                                   //
    //
    alert(`Seja bem vindo: ${nome}\n Sua idade é ${idade}`)                                             //
}                                                                                                       //
//
//
// mostraIdade()                                                                                        //
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////
//                                               //
//                                               //
//    R E S P I R A Ç Ã O   D A   C O D I G O    //
//                                               //
//            E X E R C Í C I O S  1             //
//                                               //
//               Postura de Ataque               //
//                                               //
//                                               //
///////////////////////////////////////////////////

// --> VARIAVEIS
let valorAtaqueAtual = 20
let valorDefesaAtual = 20
let postura = 'descanso'

// --> FUNÇÃO
function posturaDeAtaque() {
    postura = 'ataque'
    valorAtaqueAtual = valorAtaqueAtual + 10
    valorDefesaAtual = 0

    // --> SAIDA DE DADOS
    alert(`Postura atual do caçador ${postura}`)
    alert(`Ataque atual do caçador ${valorAtaqueAtual}`)
    alert(`Defesa atual do caçador ${valorDefesaAtual}`)
}

// --> CHAMAR FUNÇÃO
// posturaDeAtaque()




///////////////////////////////////////////////////
//                                               //
//                                               //
//    R E S P I R A Ç Ã O   D A   C O D I G O    //
//                                               //
//            E X E R C Í C I O S  2             //
//                                               //
//            Ativar Marca do Caçador            //
//                                               //
//                                               //
///////////////////////////////////////////////////

let tanjiro = {
    marcaAtiva: false,
    danoBase: 20,
    resistencia: 50,
    duracaoMarca: 0
}

let marcaativada

function ativarMarca() {
    tanjiro.marcaAtiva = true
    tanjiro.danoBase = tanjiro.danoBase + 15
    tanjiro.resistencia = tanjiro.resistencia - 5
    tanjiro.duracaoMarca = 30

    if (tanjiro.marcaAtiva = true) {
        marcaativada = 'Sim'
    }
    else {
        marcaativada = 'Não'

    }


    alert(` 
        Marca ativa: ${marcaativada}
        Dano base: ${tanjiro.dano}
        Resistencia: ${tanjiro.resistencia}
        Duração marca: ${tanjiro.duracaoMarca}
        `)
}

//ativarMarca()


//--------------FUNCOES SEM ARGUMENTO COM RETORNO -------------

// Exemplos____________________________________
// function bomDia() {
//     return 'Bom dia!'
// }

// const resultado = bomDia()

//alert(resultado)


// function dividirValores() {
//     const numero1 = parseFloat(prompt('Digite o 1º numero:'))
//     const numero2 = parseFloat(prompt('Digite o 2º numero:'))

//     if (numero2 === 0) {
//         return 'Não é possivel dividir o numero por zero'
//     }

//     else {
//         return numero1 / numero2
//     }
// }

// let result = dividirValores()

//alert(result)
//____________________________________________


// ---   FOCO TOTAL   --- //

// function nivelFoco() {
//     const respiracaoAtiva = parseInt(prompt('Digite o fôlego: 1-Sim 2-Não'))
//     const folego = parseInt(prompt('Digite o valor do folego. 0 - 100'))

//     if (respiracaoAtiva === 2) {
//         return 'Respiração Inativa'
//     }

//     else if (folego >= 70) {
//         return 'Folego forte'
//     }

//     else if (folego >= 30 && folego < 69) {
//         return 'Folego estavel'
//     }

//     else {
//         return 'Folego critico'
//     }
// }

// let foco = nivelFoco

// alert(foco)




// ---   Alerta de Emboscada   --- //

// function alertaEmboscada() {
//     const leituras = []
//     let alertaConsecutivo
//     let okConsecutivo
//     let fiqueAlerta = false
//     const qtde = parseInt(prompt('Digite a quantidade de leituras'))

//     if (qtde <= 0) {
//         return ' Não ha leituras nesse local'
//     }

//     for (let i = 0; i < qtde; i++) {
//         const leitura = prompt('Digite o valor da leitura ("OK"/"ALERTA")'.toUpperCase().trim())

//         leituras.push(leitura)
//     }

//     leituras.forEach((element) => { // --> element nesta linha é apenas uma variavel, ou seja, podeira ser qualquer coisa

//         if (element === 'ALERTA') {
//             alertaConsecutivo++
//         }

//         else {
//             alertaConsecutivo = 0
//         }


//         if (alertaConsecutivo === 2) {
//             fiqueAlerta = true
//         }

//     })

//     if (fiqueAlerta) {
//         return 'Fique alerta'
//     }

//     return 'Não há Onis por perto'
// }


// let alerta = alertaEmboscada()

// alert(alerta)



//--------------FUNCOES COM ARGUMENTO SEM RETORNO -------------


// EXEMPLOS___________________________________________________________________

// function dizBoaTarde(mensagemDoUsuario){
//     alert(mensagemDoUsuario)
// }


// const mensagem = prompt('Digite uma mensagem')

// dizBoaTarde(mensagem)

// -----------------------------------------------------------------

// const numero1 = parseFloat(prompt('Digite o 1º numero:'))
// const numero2 = parseFloat(prompt('Digite o 2º numero:'))

// function multpNumeros(variavel1, variavel2){
// const resultadoMult = variavel1 * variavel2



// alert(resultadoMult)
// }

// multpNumeros(numero1, numero2)

// ------------------------------------------------------------------

// Crie uma função chamada divideValores. essa função possui dois argumentos
// numericos e verifique se o segundo é igual a zero, Caso positivo, mostre 
// que a divisão não é possivel, caso contrario mostre o valor da divisão.

// let number1 = parseFloat(prompt('Digite o 1º valor:'))
// let number2 = parseFloat(prompt('Digite o 2º valor:'))


// function divideValores(variavel01, variavel02) {

//     if (variavel02 === 0) {
//         alert('Não é possivel faler a divisão por zero')
//     }

//     else{
//         let resultadoDiv = variavel01 / variavel02

//         alert(resultadoDiv)
//     }
// }

// divideValores(number1, number2)

//____________________________________________________________________________


// ---    ACALMAR FURIA   --- //

// let furia = 100
// let controleConsciente = false

// function acalmarNezuko(cansao) {

//     if (cansao === 'lullaby') {
//         controleConsciente = true
//     }

//     while (furia > 0) {
//         furia = furia - 10
//     }

//     controleConsciente = true
// }
// const cansaoUsuario = prompt('Digite o nome da canção')
// acalmarNezuko(cansaoUsuario)



//--------------FUNCOES COM ARGUMENTO COM RETORNO -------------

//  Exemplos____________________________________________________________________
// function boaTarde(mensagem) {
//     return 'Sua mensagem é:' + mensagem
// }


// const mensagemDoUsuario = prompt('Digite sua mensagem')
// alert(boaTarde(mensagemDoUsuario))
// -----------------------------------------------------

// function soma2valores(valor01, valor02) {

//     const soma = valor1 + valor02

//     return soma
// }

// const somaDividida = soma2valores(4, 10) / 2

// alert(somaDividida)

// ---------------------------------------------------------

let numeroUsuario1 = parseFloat(prompt('Digite um valor:'))
let numeroUsuario2 = parseFloat(prompt('Digite outro valor:'))

function maiorNumero(valorM01, valorM02) {

    if (valorM01 === valorM02) {
        return `O valor ${valorM01} é igual ${valorM02}`
    }

    else if (valorM01 > valorM02) {
        return `O valor ${valorM01} é maior que ${valorM02}`
    }

    else {
        return `O valor ${valorM02} é maior que ${valorM01}`
    }
}

alert(maiorNumero(numeroUsuario1, numeroUsuario2))

//  ____________________________________________________________________________

