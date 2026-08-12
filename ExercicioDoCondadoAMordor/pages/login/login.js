document.addEventListener('DOMContentLoaded', () => {
    const botaoFormulario = document.querySelector('.section-form__button button');

    botaoFormulario.addEventListener('click', fazerLogin)

    async function fazerLogin(evento) {
        evento.preventDefault()

        try {
            const respostaApi = await fetch ('http://localhost:3000/guardioes')

            if (!respostaApi.ok) {
                throw new Error(`Erro HTTP: ${respostaApi.status}`)
            }

            const guardioes = await respostaApi.json();

            const formulario = document.querySelector('.section-form__fieldset')

            const nome = formulario.elements.guardianName.value
            const senha = formulario.elements.password.value
            
            let temAcesso = false

            guardioes.forEach((guardiao) => {
                if (guardiao.nomeGuardiao === nome && guardiao.senha === senha) {
                    alert('Acesso autorizado')
                    temAcesso = true
                    window.location.href = '/pages/register_company/register_company.html'
                }
            })

            if (!temAcesso) {
                alert('Acesso não autorizado')
            }

        } catch (erro) {
            alert(erro)
        }
    }
})