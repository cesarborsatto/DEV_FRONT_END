document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('#register_company')

    formulario.addEventListener('submit', cadastrarCompanhia)


    async function cadastrarCompanhia(evento) {
        evento.preventDefault()

        const formularioAlvo = evento.target

        const camposObrigatorios = [
            { nome: 'companyName', rotulo: 'Nome da Companhia' },
            { nome: 'leaderName', rotulo: 'Líder' },
            { nome: 'groupSize', rotulo: 'Tamanho do grupo' },
            { nome: 'specialty', rotulo: 'Especialidade' },
            { nome: 'companyStatus', rotulo: 'Situação' }
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
                `Os seguintes campos precisam ser preenchidos:\n` +
                erros
                    .map((rotulo) => `-${rotulo}`)
                    .join('\n')
            )
        }

        const novaCompanhia = {
            nomeCompanhia: formularioAlvo.companyName.value,
            nomeLider: formularioAlvo.leaderName.value,
            tamanhoGrupo: Number(formularioAlvo.groupSize.value),
            especialidade: formularioAlvo.specialty.value,
            statusCompanhia: formularioAlvo.companyStatus.value,
            observacoesCompanhia: formularioAlvo.companyNotes.value
        }

        try {
            const resposta = await fetch('http://localhost:3000/companhias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novaCompanhia)
            })

            if (!resposta.ok) {
                throw new Error(`Erro HTTP: ${resposta.status}`)
            }

            alert('Companhia criada com sucesso')

            formularioAlvo.reset()

        } catch(erro) {
            alert('Não foi possível fazer o cadastro')
        }

    }
})