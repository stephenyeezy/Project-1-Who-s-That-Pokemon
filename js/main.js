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
const articuno = new Pokemon('Articuno', './images/silhouette_articuno.png', './images/articuno.png')
const charizard = new Pokemon('Charizard', './images/silhouette_charizard.png', './images/charizard.png')
const dragonite = new Pokemon('Dragonite', './images/silhouette_dragonite.png', './images/dragonite.png')
const hitmonchan = new Pokemon('Hitmonchan', './images/silhouette_hitmonchan.png', './images/hitmonchan.png')
const mewtwo = new Pokemon('Mewtwo', './images/silhouette_mewtwo.png', './images/mewtwo.png')
const pikachu = new Pokemon('Pikachu', './images/silhouette_pikachu.png', './images/pikachu.png')
const umbreon = new Pokemon('Umbreon', 'images/silhouette_umbreon.png', './images/umbreon.png')

const allPokemon = [charmander, sandshrew, vulpix, articuno, charizard, dragonite, hitmonchan, mewtwo, pikachu, umbreon]

console.log(allPokemon)
/*----- cached element references -----*/

let startButton = document.querySelector(".start")
const scoreCounter = document.querySelector('h3')
let pokeImg = document.querySelector('.pokemon')
const pokeName = document.querySelector('.monName')
const enterButton = document.querySelector('.enter')
let rightMon = document.querySelector('.image')
const messageEl = document.getElementById("message");

/*----- event listeners -----*/

startButton.addEventListener('click', startGame)
enterButton.addEventListener('click', checkAnswer)

/*----- functions -----*/

function startGame() {
    scoreCounter.innerText = 'Score: 0'
    let random = Math.ceil(Math.random() * 10) -1
    i = random
    pokeImg.src = allPokemon[i].silhouette
    pokeName.innerText = allPokemon[i].name
    pokeName.style.display = 'none'
    messageEl.style.display = 'none'
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
        pokeImg.src = allPokemon[i].imgfull
        pokeName.style.display = 'block'

    } else {
        pokeImg.src = allPokemon[i].imgfull
        pokeName.style.display = 'block'
    }
    if(counter < 2) {
    setTimeout(nextMon, 2000);
    }
    winMsg(messageEl.style.display = 'block');
}

function nextMon() {
    let random = Math.ceil(Math.random() * 10) -1
    i = random
    pokeImg.src = allPokemon[i].silhouette
    pokeName.innerText = allPokemon[i].name
    pokeName.style.display = 'none'
    playSound()
}

function winMsg() {
    if (counter === 2) {
    return (messageEl.textContent = "You win!");
    }
}
