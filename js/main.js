/*----- constants -----*/

class Pokemon {
    constructor(name, silhouette, imgfull) {
        this.name = name
        this.silhouette = silhouette
        this.imgfull = imgfull
    }
}

/*----- app's state (variables) -----*/

let startButton = document.querySelector(".start")
const scoreCounter = document.querySelector('h3')
let pokeImg = document.querySelector('.pokemon')
const pokeName = document.querySelector('pName')

const charmander = new Pokemon('Charmander', './images/silhouette_charmander.png', './images/charmander.png')
const sandshrew = new Pokemon('Sandshrew', './images/silhouette_sandshrew.png', './images/sandshrew.png')
const vulpix = new Pokemon('Vulpix', './images/silhouette_vulpix.png', './images/vulpix.png')

const allPokemon = [charmander, sandshrew, vulpix]
/*----- cached element references -----*/

/*----- event listeners -----*/

startButton.addEventListener('click', startGame)

/*----- functions -----*/

function startGame() {
    let random = Math.ceil(Math.random() * 3) -1
    pokeImg.src = allPokemon[random].silhouette
    playSound()
}

function playSound() {
    let audio = document.createElement("audio")
    audio.src="whosthatpokemon.wav"
    audio.play()
}