/*----- constants -----*/
class Pokemon {
    constructor(name, silhouette, img) {
        this.name = name
        this.name = silhouette,
        this.img = img
    }
}

/*----- app's state (variables) -----*/
const scoreCounter = document.querySelector('h3')
let pokeImg = document.querySelector('.pokemon')
const pokeName = document.querySelector('pName')

let charmander = new Pokemon('Charmander', '.images/silhouette_charmander.png', '.images/charmander.png')
let sandshrew = new Pokemon('Sandshrew', '.images/silhouette_sandshrew.png', '.images/sandshrew.png')

const allPokemon = [charmander, sandshrew]
/*----- cached element references -----*/
document.getElementById('pokemon')

/*----- event listeners -----*/


/*----- functions -----*/
function startGame() {
    let random = Math.ceil(Math.random() * 2)
    i = random
    pokeImg.src = allPokemon[i].img
    pokeName.innerText = allPokemon[i].name
}
window.onload = startGame;