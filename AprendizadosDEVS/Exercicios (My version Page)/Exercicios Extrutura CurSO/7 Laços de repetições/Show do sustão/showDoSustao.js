///////////////////////////////////////////////////
//                                               //
//                                               //
//         S H O W    D O    S U S T Ã O         //
//                                               //
//             E X E R C Í C I O S  1            //
//                                               //
//                                               //
///////////////////////////////////////////////////


// let cilindro = 0
// let qtdKJcap = 0
// let contador = 0

// while (cilindro < 100) {

//     qtdKJcap = parseInt(prompt("Digite o valor capturado."))

//     cilindro += qtdKJcap
//     contador++
// }

// alert(`Foram realizadas ${contador} iterações`)

//_________________________________________________________________________________________________//



///////////////////////////////////////////////////
//                                               //
//                                               //
//         S H O W    D O    S U S T Ã O         //
//                                               //
//             E X E R C Í C I O S  2            //
//                                               //
//                                               //
///////////////////////////////////////////////////



// let estacoes = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10]

// for (let i = 1; i < estacoes.length; i++){
//   if (i % 5 == 0) {
//     console.log(` Estação_${estacoes[i]} - Manutenção Rapida`)
//   }
// }
//_________________________________________________________________________________________________//



///////////////////////////////////////////////////
//                                               //
//                                               //
//         S H O W    D O    S U S T Ã O         //
//                                               //
//             E X E R C Í C I O S  3            //
//                                               //
//                                               //
///////////////////////////////////////////////////



// /**@type {{id: string, status: string}[]}*/
// let portas = []

// let idBloqueados = []
// let totalDefeituosas = 0

// let regexIdPorta = /^IDPORTA\d{2}$/
// let regexStatus = /^OK|DEFEITO$/

// let qtdValorArray = parseInt(prompt('Digite a quantidade de vaalores a serem insiridos.'))

// for (let i = 0; i < qtdValorArray; i++) {

//     let idPorta = prompt('Digite o id da porta (Ex.IdPOrta01)').trim().toUpperCase()
//     while (!regexIdPorta.test(idPorta)) {
//         idPorta = prompt('Digite o id da porta novamente (Ex.IdPOrta01)').trim().toUpperCase()
//     }

//     let statusPorta = prompt('Digite o status da porta (Ok, Defeito.').trim().toUpperCase()
//     while (!regexStatus.test(statusPorta)) {
//         statusPorta = prompt('Digite o status da porta novamente (Ok, Defeito.').trim().toUpperCase()
//     }

//     portas.push({
//         id: idPorta,
//         status: statusPorta
//     })
// }

// portas.forEach((porta) => {

//     if (porta.status === 'DEFEITO') {
//         idBloqueados.push(porta.id)
//         totalDefeituosas++
//     }
// })

// alert(`POrtas bloqueadas --> ${idBloqueados}`)
// alert(`temos ${totalDefeituosas} portas defeituosas`)

//_________________________________________________________________________________________________//



///////////////////////////////////////////////////
//                                               //
//                                               //
//         S H O W    D O    S U S T Ã O         //
//                                               //
//             E X E R C Í C I O S  4            //
//                                               //
//                                               //
///////////////////////////////////////////////////



// let qdtMonstros = parseInt(prompt('Digite a quantidade de monstros.'))
// let qtdPortas = parseInt(prompt('Digite a quantidade de portas'))

// let portas = []
// let nomesMonstros = []
// let lista1 = []
// let lista2 = []

// for (let i = 0; i < qdtMonstros; i++) {

//    nomeMonstros = prompt('Digite o nome dos monstros')

//    nomesMonstros.push(nomeMonstros)
// }

// for (let i = 0; i < qdtMonstros; i++) {

//      if (qtdPortas < qdtMonstros) {
//         nomesMonstros.push(`${i}`);
//     }

//     else {
//         nomesMonstros.push(undefined);
//     }
// }

// for (let i = 0; i < qtdPortas; i++) {

//    if (qtdPortas > qdtMonstros) {
//         portas.push(`Porta ${i + 1}`);
//     }

//     else {
//         portas.push(undefined);
//     }
// }

// if  (qtdPortas > qdtMonstros) {
//     for (let i = 0; i < portas.length; i++) {

//         if (portas[i] === undefined || portas[i] === null || portas[i] === "") {
//             lista1.push(`Porta ${i + 1} - em espera`);
//         }

//         else {
//             lista1.push(`Porta ${i + 1} -> ${nomesMonstros[i]}`);
//         }
//     }
//     alert(`${lista1}`)
// }

// else {
//     for (let i = 0; i < nomesMonstros.length; i++) {

//         if (nomesMonstros[i] === undefined || nomesMonstros[i] === null || nomesMonstros[i] === "") {
//             lista2.push(`${nomesMonstros[i]} - Sem Porta`);
//         }

//         else {
//             lista2.push(`${nomesMonstros[i]} - Porta ${i + 1}`);
//         }
//     }
//     alert(`${lista2}`)
// }
//     portas.forEach((porta) => {
//         if (porta === undefined || porta === null || porta === "") {
//             portasEmEspera.push(`Porta ${i + 1} -> ${nomesMonstros[i]}||| `);


//         }
//     })

// alert(`Portas em espera --> ${portasEmEspera}`)

// ------------------------------------------------------------ //

// let qtdMonstros = Number(prompt("Quantos monstros existem?"));
// let qtdPortas = Number(prompt("Quantas portas existem?"));
// let monstros = [];
// let resultado = "";

// for (let i = 0; i < qtdMonstros; i++) {
//     monstros.push(prompt(`Digite o nome do monstro ${i + 1}:`));
// }

// if (qtdPortas >= qtdMonstros) {

//     for (let i = 0; i < qtdPortas; i++) {

//         if (i < monstros.length) {
//             resultado += `Porta ${i + 1} -> ${monstros[i]}\n`;
//         }
//         else {
//             resultado += `Porta ${i + 1} -> em espera\n`;
//         }

//     }

// } else {

//     for (let i = 0; i < qtdMonstros; i++) {

//         if (i < qtdPortas) {
//             resultado += `${monstros[i]} -> Porta ${i + 1}\n`;
//         }
//         else {
//             resultado += `${monstros[i]} -> Sem Porta\n`;
//         }

//     }

// }

// alert(resultado);

//_________________________________________________________________________________________________//




///////////////////////////////////////////////////
//                                               //
//                                               //
//         S H O W    D O    S U S T Ã O         //
//                                               //
//             E X E R C Í C I O S  5            //
//                                               //
//                                               //
///////////////////////////////////////////////////



// let valor = 0
// let contadorMenorVinte = 0
// let contadorTotal = 0
// let soma = 0
// let entrada = ''


// do {
//     entrada = prompt("Digite o valor de energia do cilindro ou \"fim\" para sair:");

//     // entrada = prompt("Digite um número para somar ou 'fim' para sair:");

//     if (entrada.toLowerCase() === "fim") {
//         continuar = false;

//     }

//     else {
//         valor = parseFloat(entrada);
//     }


//     if (valor < 20) {
//         contadorMenorVinte++
//     }

//     soma += valor
//     contadorTotal++

// } while (continuar);

// let media = soma / contadorTotal

// alert(`Foram digitados ${contadorTotal} valores, sendo ${contadorMenorVinte} cilindros menores que 20%. A media é de ${media}.`)

//  -------------------------------------------------------------  //

// let soma = 0;
// let contadorTotal = 0;
// let contadorMenorVinte = 0;
// let continuar = true;
// let entrada = "";

// do {
//     entrada = prompt("Digite o valor de energia do cilindro ou \"Fim\" para sair:").toLocaleLowerCase();

//     if (entrada === "fim") {
//         continuar = false;
//     } else {
//         let valor = parseFloat(entrada);

//         if (!isNaN(valor)) {

//             if (valor < 20) {
//                 contadorMenorVinte++;
//             }

//             soma += valor;
//             contadorTotal++;

//         } else {
//             alert("valor incorreto digite um número válido ou 'fim' para encerrar.");
//         }
//     }

// } while (continuar);

// let media = contadorTotal > 0 ? (soma / contadorTotal) : 0;

// alert(`Foram digitados ${contadorTotal} valores, sendo ${contadorMenorVinte} cilindros menores que 20%. A média é de ${media}%.`);

//_________________________________________________________________________________________________//



///////////////////////////////////////////////////
//                                               //
//                                               //
//         S H O W    D O    S U S T Ã O         //
//                                               //
//             E X E R C Í C I O S  6            //
//                                               //
//                                               //
///////////////////////////////////////////////////


// // -- Variaveis --

// /**@type {{portaId: string, status: string, energia: number}[]}*/
// let eventos = []
// let energiaTotal = 0
// let contadorOk = 0
// let contadorFalha = 0
// let regexIdPorta = /^IDPORTA\d{2}$/
// let regexStatus = /^OK|FALHA$/

// // -- Logica e entrada de dados --

// let qtdEventos = parseInt(prompt("Quantos eventos deseja registrar?"));

// for (let i = 0; i < qtdEventos; i++) {

//     let IdPorta = prompt(`Digite o ID da porta para o evento ${i + 1}:`).trim().toUpperCase();

//     while (!regexIdPorta.test(IdPorta)) {
//         alert("ID da porta inválido. Deve ser no formato 'IDPORTAxx' (ex: IDPORTA01).");
//         IdPorta = prompt(`Digite o ID da porta para o evento ${i + 1}:`).trim().toUpperCase();
//     }

//     let statusEvento = prompt(`Digite o status do evento ${i + 1} (OK ou FALHA):`).trim().toUpperCase();


//     while (!regexStatus.test(statusEvento)) {
//         alert("Status do evento inválido. Deve ser 'OK' ou 'FALHA'.");
//         statusEvento = prompt(`Digite o status do evento ${i + 1} (OK ou FALHA):`).trim().toUpperCase();
//     }

//     let energiaEvento = parseFloat(prompt(`Digite a energia do cilindro para o evento ${i + 1}:`));

//     while (isNaN(energiaEvento) || energiaEvento < 0) {
//         alert("Energia do cilindro inválida. Deve ser um número positivo.");
//         energiaEvento = parseFloat(prompt(`Digite a energia do cilindro para o evento ${i + 1}:`));

//     }

//     eventos.push({
//         portaId: IdPorta,
//         status: statusEvento,
//         energia: energiaEvento
//     });
// }

// eventos.forEach((evento) => {
//     energiaTotal += evento.energia
//     if (evento.status === "OK") {
//         contadorOk++
//     }
//     else if (evento.status === "FALHA") {
//         contadorFalha++
//     }
// })

// // -- Saida de dados --

// let mediaEnergia = energiaTotal / eventos.length
// alert(`Energia total dos cilindros: ${energiaTotal} KJ\n
//     Média de energia dos evento: ${mediaEnergia} KJ\n
//     Número de eventos OK: ${contadorOk}\n
//     Número de eventos FALHA: ${contadorFalha}`);

//_________________________________________________________________________________________________//



///////////////////////////////////////////////////
//                                               //
//                                               //
//         S H O W    D O    S U S T Ã O         //
//                                               //
//             E X E R C Í C I O S  7            //
//                                               //
//                                               //
///////////////////////////////////////////////////


// -- VARIÁVEIS

// let regexIdPorta = /^[A-Z]\-\d{3}\-[A-Z]$/
// let conferirIdPorta = ""
// let repetir = true

// // -- LÓGICA

// do {
//     conferirIdPorta = prompt("Digite o ID da porta. (Ex: A-123-B):").trim().toUpperCase()

//     if (regexIdPorta.test(conferirIdPorta)) {
//         alert("Codigo válido.");
//         repetir = false;
//     }

//     else {
//         alert("Codigo inválido.");
//         repetir = true;
//     }
// } while (repetir)

//_________________________________________________________________________________________________//



///////////////////////////////////////////////////
//                                               //
//                                               //
//         S H O W    D O    S U S T Ã O         //
//                                               //
//             E X E R C Í C I O S  8            //
//                                               //
//                                               //
///////////////////////////////////////////////////



// ---------- VARIÁVEIS ---------- //

/**@type {{id: string, riscoBoo: 's' | 'n', tentativasMaximasPorPorta: number, statusPorta:'concluida'|'falha',}[]}*/
let portas = []
let energiaTotal = 0
let kjGerados = 0
let qtdPortas = 0
let portasConcluidas = 0
let tentativasConsecutivasZero = 0
let tentativasFeitas = 0
let portasMike = 0
let portasSulley = 0
let zerosConsecutivos = 0

// ---------- ENTRADA DE DADOS ---------- //

qtdPortas = parseInt(prompt("Digite a quantidade de portas a serem registradas:"))

for (let i = 0; i < qtdPortas; i++) {
    let idPorta = prompt(`Digite o ID da porta ${i + 1}:`).trim().toUpperCase()
    let riscoBoo = prompt(`A porta ${idPorta} apresenta risco? (s/n):`).trim().toLowerCase()
    let tentativasMaximasPorPorta = parseInt(prompt(`Digite o número máximo de tentativas para a porta ${idPorta}:`))

    portas.push({
        id: idPorta,
        riscoBoo: riscoBoo,
        tentativasMaximasPorPorta: tentativasMaximasPorPorta,
        statusPorta: ''
    });
}

// ---------- LÓGICA ---------- //

let i = 0
while (energiaTotal < 100 && i < portas.length) {

    zerosConsecutivos = 0
    tentativasFeitas = 0

    do {
        if (portas[i].riscoBoo === 's') {
            kjGerados = parseInt(prompt('Somente Mike pode entrar.Digite a quantidade de KJ gerados:'))
            portasMike++
        }
        else {
            kjGerados = parseInt(prompt(`Somenete Sulley pode entrar. Digite a quantidade de KJ gerados:`))
            portasSulley++
        }

        energiaTotal = energiaTotal + kjGerados

        if (kjGerados === 0) {
            zerosConsecutivos++
        } else {
            zerosConsecutivos = 0
        }

        tentativasFeitas++

    } while (tentativasFeitas < portas[i].tentativasMaximasPorPorta && zerosConsecutivos < 2 && energiaTotal < 100)

    if (zerosConsecutivos === 2) {
        portas[i].statusPorta = 'falha'
    } else {
        portas[i].statusPorta = 'concluida'
    }

    if (portas[i].statusPorta === 'concluida') {
        portasConcluidas++
        if (portasConcluidas % 3 === 0) {
            energiaTotal = energiaTotal + 5
        }
    }

    i++
}

// ---------- SAIDA DE DADOS ---------- //

alert(`Energia total gerada: ${energiaTotal} KJ\n
       Qtd portas concluídas: ${portasConcluidas}\n
       Qtd portas com falha: ${qtdPortas - portasConcluidas}\n
       Mike agiu: ${portasMike} Vezes\n
       Sulley agiu: ${portasSulley} Vezes\n`);