document.addEventListener('DOMContentLoaded', ()=>{
    //card options
    const cardArray = [
        {
        name: 'beaker',
        img: 'img/beaker.png'
        },
        {
        name: 'beaker',
        img: 'img/beaker.png'
        },
        {
        name: 'beaker2',
        img: 'img/beaker2.png'
        },
        {
        name: 'beaker2',
        img: 'img/beaker2.png'
        },
        {
        name: 'beaker3',
        img: 'img/beaker3.png'
    },
        {
        name: 'beaker3',
        img: 'img/beaker3.png'
        },
        { 
        name: 'knife',
        img: 'img/knife.png'
        },
        { 
        name: 'knife',
        img: 'img/knife.png'
        },
        { 
        name: 'labCoat',
        img: 'img/labCoat.png'
        },
        { 
        name: 'labCoat',
        img: 'img/labCoat.png'
        },
        {
        name: 'gun',
        img: 'img/gun.png'
        },
        {
        name: 'gun',
        img: 'img/gun.png'
        }

    ]

    cardArray.sort(()=> 0.5 -Math.random())

    const grid = document.querySelector('.grid')

    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []

    //the board
    function createBoard(){
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'img/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    //look for match
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'img/white.png')
            cards[optionTwoId].setAttribute('src', 'img/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations Heisenberg! You found them all!'
        }
        
    }
    //flip the card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)

        }
    }
    createBoard()
})

//refresh page
function refreshPage(){
    window.location.reload();
}
