document.addEventListener('DOMContentLoaded', () => {
    carregarCompanhias()

    const formulario = document.querySelector('#register-expedition')

    formulario.addEventListener('submit', cadastrarExpedicao)

    async function carregarCompanhias() {
        try {
            const resposta = await fetch('http://localhost:3000/companhias')

            if (!resposta.ok) {
                throw new Error(`Erro HTTP: ${resposta.status}`)
            }

            const companhias = await resposta.json()

            const select = document.querySelector('#company-name')

            select.innerHTML = ''

            const opcaoSelecione = document.createElement('option')
            opcaoSelecione.value = ''
            opcaoSelecione.textContent = 'Selecione...'

            select.appendChild(opcaoSelecione)

            companhias.forEach((companhia) => {
                const opcao = document.createElement('option')

                opcao.value = companhia.id
                opcao.textContent = companhia.nomeCompanhia
                select.appendChild(opcao)
            })
        } catch (erro) {
            alert(erro)
        }
    }

    async function cadastrarExpedicao(evento) {
        evento.preventDefault()

        const formularioAlvo = evento.target

        const camposObrigatorios = [
            { nome: 'expeditionName', rotulo: 'Nome da expedição' },
            { nome: 'originRegion', rotulo: 'Região de origem' },
            { nome: 'destinationRegion', rotulo: 'Região de destino' },
            { nome: 'companyName', rotulo: 'Nome da companhia' },
            { nome: 'missionObjective', rotulo: 'Objetivo da missão' },
            { nome: 'riskLevel', rotulo: 'Nível de risco' },
            { nome: 'initialStatus', rotulo: 'Status inicial' },
            { nome: 'departureDate', rotulo: 'Data de partida' }
        ]

        const erros = []
        let temErro = false

        camposObrigatorios.forEach((campo) => {
            const valor = formularioAlvo[campo.nome].value

            if (valor === '') {
                erros.push(campo.rotulo)
                temErro = true
            }
        })

        if (temErro) {
            throw new Error(
                `Os seguintes campos precisam ser preenchidos: \n` +
                erros
                    .map((rotulo) => `-${rotulo}`)
                    .join('\n')
            )
        }

        if (formularioAlvo.originRegion.value === formularioAlvo.destinationRegion.value) {
            throw new Error('A origem e o destino da expedição não podem ser iguais')
        }

        const idCompanhia = formularioAlvo.companyName.value
        const respostaCompanhias = await fetch('http://localhost:3000/companhias')

        if (!respostaCompanhias.ok) {
            throw new Error(`Erro HTTP ${respostaCompanhias.status}`)
        }

        const companhias = await respostaCompanhias.json()

        const companhiaEncontrada = companhias.find((companhia) => companhia.id === idCompanhia)

        const novaExpedicao = {
            nomeExpedicao: formularioAlvo.expeditionName.value,
            regiaoOrigem: formularioAlvo.originRegion.value,
            regiaoDestino: formularioAlvo.destinationRegion.value,
            objetivoMissao: formularioAlvo.missionObjective.value,
            nivelRisco: formularioAlvo.riskLevel.value,
            statusInicial: formularioAlvo.initialStatus.value,
            dataPartida: formularioAlvo.departureDate.value,
            observacoesExpedicao: formularioAlvo.expeditionNotes.value,
            companhia: companhiaEncontrada
        };

        const respostaCadastro = await fetch('http://localhost:3000/expedicoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaExpedicao)
        })

        if (!respostaCadastro.ok) {
            throw new Error(`Erro HTTP: ${respostaCadastro.status}`)
        }

        alert('Expedição cadastrada com sucesso!')

    }


})