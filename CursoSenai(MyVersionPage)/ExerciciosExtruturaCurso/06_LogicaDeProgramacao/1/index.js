        //  ==================  Absorção do Escudo =============

let absorcao = parseInt(prompt(`digite o valor da absorsao do escuto`))

if  (absorcao >= 80) {
    alert(`Bloqueio Total`)
}
else if (absorcao >= 40 ){
alert(`Bloqueio parcial`)
}

else {
    alert(`Bloqueio Falhou`)
}


        //  ===============  Acertos Consecutivos  =================

let acertoConsecutivos = parseInt(prompt('Digite a quantidade de acertos consecutivos'))

if (acertoConsecutivos >= 8 ){
    alert('Destruidor')
}

else if (acertoConsecutivos >= 4){
    alert('Bom Ritimo')
}

else {  
    alert('Quebra do combo')
}

        //  ============ Runas Ativas =============

let runasAtivas = parseInt(prompt('Digite a quantidade de runas ativas'))

let pedraViagem = parseInt(prompt('Digite se tem pedra viagem (1-Sim 2-Não)'))

let nivelKratos = parseInt(prompt('Digite o nivel do Kratos'))

if((runasAtivas === 3 || pedraViagem === 1 ) && nivelKratos >= 5) {
    alert('Abrir')
}

 else if (runasAtivas === 2 && nivelKratos < 4) { 
    alert('Instavel')
}

else {
     alert('Fechado')
 }

        //  ===========  Cridtal de Alfhein  ===========

let tipoCristal = prompt('Digite o tipo de cristal (LUZ ou RUNA').toLocaleUpperCase()

let qtdeFlechasLuz = parseInt(prompt('Digite a quantidade de Flechas de Luz'))

let qtdeFlechasRuna = parseInt(prompt('Digite a quantidade de Flechas de Runa'))

if ((tipoCristal === 'LUZ' && qtdeFlechasLuz >= 1) || (tipoCristal === 'RUNA' && qtdeFlechasRuna >= 1))  {
    alert('Disparar')
}

else if (qtdeFlechasLuz >= 1 || qtdeFlechasRuna >= 1) {
    alert('Reposicionar')
}

else{
    alert('Sem Minição')
}



