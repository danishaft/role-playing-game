import { characterData } from "./data.js";
import { Character } from "./character.js"; 


const attack = () => {
    wizard.getRandomArr()
    orc.getRandomArr()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
    if(wizard.dead || orc.dead){
        endGame()
    }
    renderHtml()
}

const endGame = () =>{
    console.log('game over')
}

const renderHtml = () => {
    document.getElementById('hero').innerHTML = wizard.getPlayerHtml()
    document.getElementById('monster').innerHTML = orc.getPlayerHtml()
}
const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

document.getElementById('attack-button').addEventListener('click', attack)

renderHtml()



