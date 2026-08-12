document.addEventListener('DOMContentLoaded', () => {
    const details = document.querySelector('.icon-details')
    const cardDetails = document.querySelector('.card-info-details')
    const btnFechar = document.querySelector('.btn-fechar')
    const indexPriority = document.querySelector('.container-card-details')


    details.addEventListener('click',() => {
        cardDetails.classList.toggle('card-info-details--off')
        indexPriority.classList.add('index-priority')
    })

    btnFechar.addEventListener('click', () => {
        cardDetails.classList.remove('card-info-details--off')
        indexPriority.classList.remove('index-priority')
    })


})