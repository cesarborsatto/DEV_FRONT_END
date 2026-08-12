// let numero = 10
// let numeros = [12, 10, 14, 4 ,6 , 7, 16]

// alert(numeros[4])

// let contador = 0

// while(contador < numeros.length){
//     alert(numeros[contador])
//     contador++
// }

//  ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘

// let nomes = []
// let contador = 0

// while( contador < 5){
// let nome = prompt('Digite um nome')
//     nomes.push(nome)
//     contador++
// }
//  alert(nomes)
//  ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘

//   --   Fila Rápida da Esteira
//      Dada a fila portas=["A12","B07"], adicione "C03" no fim e retire
//      o primeiro item processado. Retorne a fila final. (use push e
//      shift)

// let portas = ["A12", "B07"]

// portas.push("C03") // --> adiciona ao final
// portas.shift()  //--> Remove o primeiro valor

// alert(portas)
// ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘

//  --      Troca de Ganchos

// Em portas=["A","B","C","D"], remova "C" e insira "X","Y" no
// mesmo lugar. Retorne a lista. (use splice)

// let ids = ['A','B','C','D']

// ids.splice(2, 1, 'X', 'Y')

// alert(ids)

//  ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘

// --       Recorte de Lote

// Dadas as portas=["P01","P02","P03","P04","P05"], crie um sub-
// lote com as 3 portas do meio sem alterar o original. (use slice)

// let portasEx3 = ["P01","P02","P03","P04","P05"]
// let subLote = portasEx3.slice(1, 4)

// alert(subLote)

//  ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘

//  --  Relatório da Fábrica

// Dado um array de eventos com objetos no formato { portaId: string
// (Ex: P01), setor: 'N'|'S'|'L'|'O', agente: 'Mike'|'Sullivan', energia: number,
// okEvento: boolean, codigo: string (Ex: CDA-123)} com quatro
// posições, e um array bloqueadas=[“P01”, “P03”, “P11”] com portaId
// proibidos, gere outro array que possua somente os eventos válidos
// usando apenas métodos de Array

// Objetivos:

// Filtre eventos inválidos: descarte se portaId for bloqueada.
// Considere somente eventos com ok === true.
// Agrupe por portaId somando energia da porta.
// Produza:
// eventosValidos (portaId não é bloqueada e okEvento === true)
// totalEnergia (soma geral),
// portasAtivas (lista única de portaId).


let eventos = Array(4)
let bloqueadas = ['P01', 'P03', 'P11']
let contador = 0

while (contador < eventos.length) {
    let idPorta = prompt("Digite o id da porta do evento")
    let setorEvento = prompt("Digite o setor do evento (N, S, L, O").toUpperCase()
    let agenteEvnto = prompt("Digite o agente do evento (Mike'|'Sullivan)")
    let energiaEvento = parseInt(prompt("Digite o valor da energida do evento"))
    let eventoValido = parseInt(prompt("Digite se o evento está válido (1 - Sim, 2- Não)"))
    let statusEvento = eventoValido === 1 ? true : false  //  --> ifTernario
    let codigoEvento = prompt("Digite o codigo de evento (Ex: CDA-123)").toUpperCase()

    eventos[contador] =
    {
        portaId:idPorta,
        setor:setorEvento,
        agente:agenteEvnto,
        energia:energiaEvento,
        okEvento:statusEvento,
        codigo:codigoEvento
    }
    contador++
}

contador = 0

let eventosValidos = []
let portasAtivas = []
let energiaTotalPortas = 0

while(contador < eventos.length){
    if(bloqueadas.includes(eventos[contador].portaId)){
        contador++
        continue
    }
    
    if(eventos[contador].okEvento === false){
        contador++
        continue
    }

    eventosValidos.push(eventos[contador])
    portasAtivas.push(eventos[contador].portaId)
    energiaTotalPortas += eventos[contador].energia 
    contador++
    
}

alert(`Evento Validos${eventosValidos}`)
alert(`Total Energia${energiaTotalPortas}`)
alert(`Portas Validas${portasAtivas}`)


