/*----- constants -----*/

class Pokemon {
    constructor(name, silhouette, imgfull) {
        this.name = name
        this.silhouette = silhouette
        this.imgfull = imgfull
    }
}

/*----- app's state (variables) -----*/
let i = 0
let counter = 0
const charmander = new Pokemon('Charmander', './images/silhouette_charmander.png', './images/charmander.png')
const sandshrew = new Pokemon('Sandshrew', './images/silhouette_sandshrew.png', './images/sandshrew.png')
const vulpix = new Pokemon('Vulpix', './images/silhouette_vulpix.png', './images/vulpix.png')

const allPokemon = [charmander, sandshrew, vulpix]

/*----- cached element references -----*/

let startButton = document.querySelector(".start")
const scoreCounter = document.querySelector('h3')
let pokeImg = document.querySelector('.pokemon')
const pokeName = document.querySelector('.monName')
const enterButton = document.querySelector('.enter')
let rightMon = document.querySelector('.image')

/*----- event listeners -----*/

startButton.addEventListener('click', startGame)
enterButton.addEventListener('click', checkAnswer)

/*----- functions -----*/

function startGame() {
    let random = Math.ceil(Math.random() * 3) -1
    i = random
    pokeImg.src = allPokemon[i].silhouette
    pokeName.innerText = allPokemon[i].name
    playSound()
}

function playSound() {
    let audio = document.createElement('audio')
    audio.src='whosthatpokemon.wav'
    audio.play()
}

function checkAnswer() {
    let answer = document.getElementById("input").value;
    if(answer.toLowerCase() === pokeName.innerText.toLowerCase()) {
        counter += 1
        scoreCounter.innerText = ('Score: ' + counter)
        rightMon.classList.add('imageFade')
        pokeImg.src = allPokemon[i].imgfull
        pokeName.style.display = 'block'

    } else {
        rightMon.classList.add('imageFade')
        pokeImg.src = allPokemon[i].imgfull
        pokeName.style.display = 'block'
    }
    setTimeout(nextMon, 2000);
}

function nextMon() {
    let random = Math.ceil(Math.random() * 3) -1
    i = random
    pokeImg.src = allPokemon[i].silhouette
    pokeName.innerText = allPokemon[i].name
    pokeName.style.display = 'none'
    playSound()
}
