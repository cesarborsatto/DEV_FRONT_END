//  =================== Peso das Correntes =================

//  1 - UpGrade Com Orbs

let qtdeOrbs = parseInt(prompt('Digite a quantidade de Orbs '))
let custoUpGrade = parseInt(prompt('Digite o custo do Upgrade'))
let nivelLaminas = parseInt(prompt('Digite o nivel das laminas'))

if (qtdeOrbs < 0 || custoUpGrade < 0 || nivelLaminas < 0) {
    alert('Somente numeros maiores que 0 são aceitos')
}
else if (qtdeOrbs >= custoUpGrade && nivelLaminas < 5) {
    alert('Level Up')
}

else {
    alert('UpGrade Indisponivel')
}

//  2 - Hidra - Hora do Golpe Final

let vidaHidra = parseInt(prompt('Digite a Vida de Hidra em %'))
let atordoamente = parseInt(prompt('Digite o atordoamento em %'))

if (atordoamente < 0 || atordoamente > 100 || vidaHidra < 0 || vidaHidra > 100) {
    alert('Somente valores entre 0 e 100 são aceitos')
}

else if (atordoamente === 100 || vidaHidra <= 10) {
    alert('Executar')
}

else {
    alert('Continuar golpenado')
}


//  3 - Fúria Espartana

let barraFuria = parseInt(prompt('Digite o valor da barra de Furia em % (0 - 100)'))

if (barraFuria >= 0 && barraFuria <= 0) {
    if (barraFuria >= 5 && barraFuria <= 100) {
        alert('Furia Ativada')
    }
    else {
        alert('Furia Insuficiente')
    }
}
else {
    alert('Valor digitado fora do padrão')
}


//  4 - Forja de Hefesto - Risco Térmico

let tempForja = parseInt(prompt('Digite a temperatura da forja: '))

if (tempForja < 600) {
    alert('Seguro')
}

else if (tempForja <= 900) {
    alert('Perigo')
}
else {
    alert('Letal')
}


//  5 - Estrutura do Olimpo Atravessar ou Ceder

let pesoKratos = parseFloat(prompt('Digite o Peso de Kratos'))
let pesoCarga = parseFloat(prompt('Digite o Peso de carga'))
let limiteEstrutura = parseFloat(prompt('Digite o limite da estrutura'))
let correndo = prompt('Kratos está correndo (Sim  Não').toLowerCase()

if (pesoKratos < 100) {
    alert('Peso de Kratos deve ser maior que 100 ')
}

else if (pesoestrutura >= 0) {
    if (((pesoCarga + pesoKratos) > limiteEstrutura) || correndo === 'sim') {
        alert('Cai')
    }
    else {
        alert('Atravesa')
    }
}

else {
    alert('Peso não pode ser Negativo')
}


//  6 - Cofre Rúnico

let qtdRunasCorretas = parseInt(prompt('Digite a quantidade de Runas correta'))


if (qtdRunasCorretas > 0 && qtdRunas <= 3)
    if (qtdRunasCorretas === 3) {
        alert('Abrir')
    }

    else if (qtdRunasCorretas === 2) {
        alert('Quase')
    }

    else {
        alert('Fechado')
    }

else {
    alert('Quantidade deve estar entre 0 e 3')
}


//  7 - Ponte de Luz de Alfheim

let cristalPosicionado = prompt('O cristal de Alfhein está posicionado: (Sim, Não):').toLowerCase()
let qdtFlechaLuz = parseInt(prompt('Digite a quantidade de flecha de luz:'))
let custoAtivar = parseInt(prompt('Digite custo para ativar a ponte de luz:'))

if (qdtFlechaLuz >= 0 && custoAtivar >= 0) {
    if (cristalPosicionado === 'sim' && qdtFlechaLuz >= custoAtivar) {
        alert('Ativar')
    }
    else {
        alert('Não Ativa')
    }
}

else {
    alert('Valores devem ser maiores que 0.')
}


//  8 -Pedra de Reviver - Usar Agora?

let vidaKratos = parseInt(prompt('Digite o valor da vida de Kratos (0 - 100)'))
let pedraReviver = prompt('Tem pedra de Reviver? (Sim, Não)').toLowerCase()
let lutaContraChefe = prompt('Luta contra chefe? (Sim, Não)').toLowerCase()

if (vidaKratos >= 0) {
    if (vidaKratos === 0 && pedraReviver === 'sim') {
        alert('Reviver')
    }

    else if (vidaKratos < 30 && pedraReviver === 'sim' && lutaContraChefe === 'sim') {
        alert('Usar agora')
    }

    else {
        alert('Guardar')
    }
}

else {
    alert('Vida de Katros deve ser maior que 0')
}


//  9 - Portal de Yggdrasil

let runasAlinhadas = parseInt(prompt('Digite o numero de Runas alinhadas:'))
let energiaPortal = parseInt(prompt('Digite o valor da energia do Portal. (0 - 100)'))

if ((runasAlinhadas >= 0 || runasAlinhadas <= 3) && (energiaPortal >= 0 || energiaPortal <= 100)) {

    if (runasAlinhadas === 3 && energiaPortal >= 50) {
        alert('Abrir')
    }

    else if (runasAlinhadas === 2 && energiaPortal < 50) {
        alert('Instavel')
    }

    else {
        alert('Fechado')
    }
}

else {
    alert('Valores de entrada incorreto.')
}


//  10 - Decisão Tática na Investida Final

let lifeKratos = parseInt(prompt('Digite vida de Kratos (%)'))
let valorBarraFuria = parseInt(prompt('Digite barra de Fúria (0 – 100)'))
let marcasDraupnir = parseInt(prompt('Digite o nº de marcas da Lança Draupnir'))
let inimigoVoador = prompt('se o inimigo é voador (Sim, Não)').toLowerCase()
let inimigoBlindado = prompt('se o inimigo é blindado (Sim, Não)').toLowerCase()
let flechaSonica = prompt('se há flechas sônicas (Sim, Não)').toLowerCase()
let machadoCarregado = prompt('se o Machado Leviatã está carregado (Sim, Não)').toLowerCase()
let alvoGigante = prompt('e se o alvo é gigante (Sim, Não)').toLowerCase()

if (lifeKratos > 0 && valorBarraFuria >= 0 && marcasDraupnir >= 0){
    if ((lifeKratos <= 20) || (valorBarraFuria === 100)){
        alert('Ativar Fúria e avançar')
    }
    
    else if (inimigoVoador && flechasSonicas) {
        alert('Freya lidera o ataque aéreo')
    }
    
    else if (inimigoBlindado && machadoCarregado) {
        alert('Kratos lidera com Machado carregado')
    }
    
    else if ((marcasDraupnir >= 3) || (alvoGigante)) {
        alert('Detonar Lança Draupnir')
    }
    
    else {
        alert('Recuar e reposicionar')
    }
}

else{
    alert('Valores digitados fora do aceitavel.')
}