// alert("Hello, World")
// =========================================================================
// const idade = 20
// alert ("A sua idade é de " + idade + " anos")
// alert(`A sua iadade é de ${idade} anos`)
// =========================================================================

// =========================================================================
// const numero1 = 10
// const nuemro2 = 30

// const total = numero1 + nuemro2
// =========================================================================

// =========================================================================
// const nuemro1 = parseFloat(prompt(`Digite um numero: `))
// const numero2 = parseFloat(prompt(`Digite outro numero: `))

// const total = numero2 + nuemro1

// alert(total)
// =========================================================================

        // Ceus a fora

const velocidadeMedia = parseInt(prompt(`Didite a Velocidade média: `))
const tempoVoo = parseInt(prompt(`Didite o tempo de voo: `))

const distancia = velocidadeMedia * tempoVoo

alert(`distancia media percorrida é de ${distancia}Km`)



                     // Jornada Z
        
        // Exercicio 1

// Precisamos calcular o consumo total que o Radar do Dragão (dispositivo que localiza as esferas)
// utilizou para encontrar todas as esferas do dragão.
// Peça ao usuário que insira o consumo por hora e o tempo de procura em horas e retorne o consumo
// total.

const consumoPorHora = parseFloat(prompt(`Digite o consumo: `))
const tempoDeProcura = parseFloat(prompt(`Digite tempo de procura: `))

consumoTotal = consumoPorHora*tempoDeProcura
alert (`O Consumo total é de ${consumoTotal}`)


        // Excercico 2 

// Precisamos calcular o tempo total para terminar
// de reunir as 7 esferas e fazer a invocação do
// dragão.

// Peça ao usuário que insira quantas esferas já tem,
// o tempo (em minutos) para encontrar cada esfera
// restante e o tempo (em minutos) para invocar
// Shenlong, e retorne o tempo total em minutos.

const qtdeEsfera = parseInt(prompt(`Quantas esferas já possui: `))
const tempoProcura = parseFloat(prompt(`Quanto tempo de procura: `))
const tempoInvocacao = parseFloat(prompt(`Quanto tempo para invocar: `))

const esferas = parseInt(7)

tempoTotal = ((esfera - qtdeEsfera) * tempoProcura) + tempoInvocacao
alert (`Tempo total é de: ${tempoTotal} minutos`)




        // Exercicio 3

// Precisamos saber quanto tempo se passou dentro
// da Sala do Tempo.

// Peça ao usuário que insira as horas de treino e a
// equivalência de minutos fora da Sala do Tempo, e
// retorne o total de minutos no “mundo real”.

const horasTreino = parseFloat(prompt(`Quanto tempo de treino (em horas): `))
const equivalencia = parseFloat(prompt(`Digite a equivalência de minutos fora da Sala do Tempo: `))

const tempoTotalForaDaSala = horasTreino * equivalencia

alert(`${horasTreino} equivale a ${tempoTotalForaDaSala} fora da sala de treino.`)




         // Exercicio 4

// Precisamos calcular o peso aparente de um
// lutador treinando em gravidade multiplicada.

// Peça ao usuário que insira o peso na Terra (kg) e o
// multiplicador de gravidade, e retorne o peso
// aparente (kg)

const pesoLutador = parseFloat(prompt(`Qual o peso do lutador: `))
const multiplicadorGravidade = parseFloat(prompt(`digite qual o multplicaor de gravidade: `))

const pesoMultiplicado = pesoLutador * multiplicadorGravidade

 alert(`O Peso do lutador treinando na sala de gravidade é de: ${pesoMultiplicado}`)




        // Exercicio 5

// Precisamos estimar o Ki combinado de dois lutadores 
// após a Fusão Potara.

// Peça ao usuário que insira o Ki do lutador 1, Ki do 
// lutador 2 e o bônus percentual da fusão, e retorne o Ki final.

const kiLutador1 = parseFloat(prompt(`Qual o ki do lutador 1: `))
const Kilutador2 = parseFloat(prompt(`Qual o ki do lutador 2: `))
const bonusDefusao = parseFloat(prompt(`Qual a porcentagem do bonus de fusão: `))

kiFinal = (kiLutador1 + Kilutador2) * ((bonusDefusao/100) + 1)

alert(`O ki final do lutar apos a fusao potara é: ${kiFinal}`)


