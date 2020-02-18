const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const imgId = card.getAttribute('id')
        const cardTitle = card.querySelector('.content-title').innerHTML
        const cardAuthor = card.querySelector('.content-author').innerHTML
        
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `/assets/${imgId}`
        modalOverlay.querySelector('.modal-title').innerHTML = cardTitle
        modalOverlay.querySelector('.modal-author').innerHTML = cardAuthor
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})
