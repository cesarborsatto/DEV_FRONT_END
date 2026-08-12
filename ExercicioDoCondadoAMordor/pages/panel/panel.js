document.addEventListener('DOMContentLoaded', () => {


    async function carregarCartoes() {
        try {
            const respostaApi = await fetch('http://localhost:3000/expedicoes')

            if (!respostaApi.ok) {
                throw new Error(`Erro HTTP: ${respostaAPI.status}`)
            }


            const expedicoes = await respostaApi.json()

            const containerCards = document.querySelector('.section-cards')

            containerCards.innerHTML = ''

            expedicoes.forEach((expedicao) => {
                const article = document.createElement('article')

                article.classList.add('section-cards__card')

                article.innerHTML = `
                <figure class="section-cards__figure">
                    <img src="${escolheImagem(expedicao.regiaoDestino)}" alt="">
                </figure>

                <h3>Companhia: ${expedicao.companhia.nomeCompanhia} &ndash;</h3>
                <h3>${expedicao.companhia.tamanhoGrupo}</h3>
                <h4>Expedição: ${expedicao.nomeExpedicao}</h4>

                <ul class="section-cards__ul">
                    <li><span>Risco:</span> ${expedicao.nivelRisco}</li>
                    <li><span>Líder:</span> ${expedicao.companhia.nomeLider}</li>
                    <li><span>Origem:</span>  ${expedicao.regiaoOrigem}</li>
                    <li><span>Destino:</span>  ${expedicao.regiaoDestino}</li>
                    <li><span>Objetivo:</span>  ${expedicao.objetivoMissao}</li>
                    <li><span>Data de partida:</span>  ${expedicao.dataPartida}</li>
                </ul>

                <div class="section-cards__buttons">
                  <button class="button-edit" type="button">Editar Expedição</button>
                  <button class="button-delete" type="button">Excluir Expedição</button>
                </div>
            `
                const bataoExcluir = article.querySelector('.button-delete')
                bataoExcluir.addEventListener('click', () => {
                    deletaCartao(expedicao.id)
                })

                const botaoEditar = article.querySelector('.button-edit')
                botaoEditar.addEventListener('click', () => {
                    abrirCartao(expedicao.id)
                })

                containerCards.appendChild(article)
            })


            // console.log(containerCards)

        } catch (erro) {

        }

    }
    function escolheImagem(regiaoDestino) {
        const mapa = {
            'Condado': '/assets/img/img_panel/img_condado.png',
            'Eriador': '/assets/img/img_panel/img_eriador.png',
            'Floresta das Trevas': '/assets/img/img_panel/img_floresta_das_trevas.png',
            'Gondor': '/assets/img/img_panel/img_gondor.png',
            'Mordor': '/assets/img/img_panel/img_mordor.png',
            'Rohan': '/assets/img/img_panel/img_rohan.png',
            'Valfenda': '/assets/img/img_panel/img_valfenda.png'
        }

        return mapa[regiaoDestino]
    }

    carregarCartoes()

    async function deletaCartao(expedicaoId) {
        const confirmarExcluir = confirm('Deseja realmente excluir estas informações?')

        if (!confirmarExcluir) {
            return
        }

        try {
            const respostaDelete = await fetch(`http://localhost:3000/expedicoes/${expedicaoId}`, {
                method: 'DELETE'
            })
        } catch (error) {

        }

    }

    let expedicaoIdEditar = null

    async function abrirCartao(expedicaoId) {
        const modal = document.querySelector('.section-edit-card')

        modal.classList.add('section-edit-card--show')

        try {

            const respostaCompanhia = await fetch('http://localhost:3000/companhias')

            if (!respostaCompanhia) {
                throw new Error(`Erro HTTP: ${respostaCompanhia.status}`)
            }

            const companhias = await respostaCompanhia.json()

            const select = document.querySelector('#company-name')

            select.innerHTML = ''

            const primeiraOpcao = document.createElement('option')

            primeiraOpcao.value = ''
            primeiraOpcao.textContent = 'Selecione...'

            select.appendChild(primeiraOpcao)

            companhias.forEach((companhia) => {
                const option = document.createElement('option')

                option.value = companhia.id
                option.textContent = companhia.nomeCompanhia

                select.appendChild(option)

            })

            const respostaExpedicao = await fetch('http://localhost:3000/expedicoes')

            if (!respostaExpedicao.ok) {
                throw new Error(`Erro HTTP: ${respostaExpedicao.status}`)
            }

            const expedicoes = await respostaExpedicao.json()

            const expedicaoEditar = expedicoes.find((expedicao) => expedicao.id === expedicaoId)

            const formEdicao = document.querySelector('.section-edit-card__form')

            formEdicao.companyName.value = expedicaoEditar.companhia.id
            formEdicao.leaderName.value = expedicaoEditar.companhia.nomeLider
            formEdicao.groupSize.value = expedicaoEditar.companhia.tamanhoGrupo
            formEdicao.expeditionName.value = expedicaoEditar.nomeExpedicao
            formEdicao.originRegion.value = expedicaoEditar.regiaoOrigem
            formEdicao.destinationRegion.value = expedicaoEditar.regiaoDestino
            formEdicao.missionObjective.value = expedicaoEditar.objetivoMissao
            formEdicao.riskLevel.value = expedicaoEditar.nivelRisco
            formEdicao.initialStatus.value = expedicaoEditar.statusInicial
            formEdicao.departureDate.value = expedicaoEditar.dataPartida

            // console.log(companhias)

        } catch (error) {

        }
    }

    const botaoAtualizar = document.querySelector('.section-edit-card__button-update')
    botaoAtualizar.addEventListener('click', editarExpedicoes)

    async function editarExpedicoes() {

        const formEdicao = document.querySelector('.section-edit-card__form')

        try {
            const retornoCompanhia = await fetch('http://localhost:3000/companhias')

            if (!retornoCompanhia) {
                throw new Error(`Erro HTTP: ${retornoCompanhia.status}`)
            }

            const companhias = await retornoCompanhia.json()
            const companhiaId = formEdicao.companyName.value

            const companhiaAtualizar = companhias.find((companhia) => companhia.id === companhiaId)

            const expedicaoAtualizada = {
                nameExpedicao: formEdicao.expeditionName.value,
                regiaoOrigem: formEdicao.originRegion.value,
                regiaoDestino: formEdicao.destinationRegion.value,
                objetivoMissao: formEdicao.missionObjective.value,
                nivelRisco: formEdicao.riskLevel.value,
                statusInicial: formEdicao.initialStatus.value,
                dataPartida: formEdicao.departureDate.value,


                companhia: {
                    id: formEdicao.id.value,
                    nomeCompanhia: formEdicao.companyName.value,
                    nomeLider: formEdicao.leaderName.value,
                    tamanhoGrupo: formEdicao.groupSize.value,
                    especialidade: companhiaAtualizar.especialidade,
                    statusCompanhia: companhiaAtualizar.statusCompanhia,
                    observacoesCompanhia: companhiaAtualizar.observacoesCompanhia
                }

            }
                const respostaAtualizacao = await fetch(`http://localhost:3000/expedicoes/${expedicaoIdEditar}`, {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(expedicaoAtualizada)
                })


        } catch (error) {

        }
    }




})