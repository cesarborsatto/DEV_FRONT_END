// let idades = [10, 20, 30, 40, 50]

const { doesNotReject } = require('node:assert')
const { prototype } = require('node:events')
const { promises } = require('node:fs')

// for (let i = 0; i < idades.length; i++) {
//   alert(idades[i])
// }

// ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘  EXERCICIO 1  ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘

// let numerosPares = []
// let selagem = []

// for (let i = 1; i < 20; i++) {
//   if (i % 2 === 0) {
//     numerosPares.push(i)
//     soma += 1
//   }
// }
// alert(numerosPares)
// alert(`A smoa dos niveis pares é: ${soma}`)

// for(let i=0; i<numerosPares.length; i++){
//   alert(numerosPares[i])
// }

// ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘  EXERCICIO 2  ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘

// let qtde = parseInt(prompt('Digite a quantidade que deseja cadastrar.'))

// let regexIdPorta = /^P\d{2}$/
// let IdPortas = []

// for (let i = 0; i < qtde; i++) {
//   let idPorta = prompt('Digite o id da porta: ').trim().toUpperCase()

//   while (!regexIdPorta.test(idPorta)) {
//     idPorta = prompt('Padrão incorreto. Digite novamente').toUpperCase().trim()
//   }

//   idPortas.push(idPorta)
// }

// alert(idPortas)

// ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘  EXERCICIO 3  ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘

/**@type {{portaId: string, setor: 'N'|'S'|'L'|'O', energia: number}[]}*/
let eventos = []

let portasBloqueadas = []
let portasUnicas = []
let energiaTotal = 0
let regexId = /^P\d{2}$/
let regexSetor = /^N|L|O|S$/
let energiaTop = 0
let portaTop = ''

let energiaPorSetor = {
  N: 0,
  S: 0,
  L: 0,
  O: 0
}

for (let i = 0; i < 3; i++) {
  let id = prompt('Digite o id da porta:')
  let setorEvento = prompt('Digite o setor do evento:')
  let energiaEvento = prompt('Digite a energia do evento:')

  eventos.push({
    portaId: id,
    setor: setorEvento,
    energia: energiaEvento
  })
}

for (let i = 0; i < 4; i++) {
  let portaBloqueada = prompt('Digite o id da porta bloqueada')

  portasBloqueadas.push(portaBloqueada)
}

eventos.forEach(evento => {
  if (!portasBloqueadas.includes(evento.portaId)) {
    if (!portasUnicas.includes(evento.portaId)) {
      portasUnicas.push(evento.portaId)
    }

    energiaTotal += evento.energia

    if (energiaTop < evento.energia) {
      energiaTop = evento.energia
      portaTop = evento.portaId
    }

    energiaPorSetor[evento.setor] += evento.energia

  }
})

alert(portasUnicas)
alert(energiaTotal)
alert(energiaPorSetor)
alert(portaTop)
alert(energiaTop)