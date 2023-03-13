import { characterData } from "./data.js";
import { Character } from "./character.js"; 
let monstersArray = ["orc", "demon", "goblin"];

const getNewMonster = () => {
    const nextMonsterData =  characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}
let isWaiting = false

// this contains all we expect when the attack button is clicked
const attack = () => {
   if(!isWaiting){
    wizard.getRandomArr()
    monster.getRandomArr()
    wizard.takeDamage(monster.currentDiceScore)
    monster.takeDamage(wizard.currentDiceScore)
    renderHtml()
    if (wizard.dead){
        endGame()
    }else if( monster.dead){
        isWaiting = true
        if(monstersArray.length > 0){
           setTimeout(()=>{
            monster = getNewMonster()
            renderHtml()
            isWaiting = false
           }, 2000)
        }else {
            setTimeout( endGame() , 3000)
        }
    }
   }
}

const endGame = () =>{
    const endMessage = wizard.health ===0 && monster.health === 0 ? 
    "No victors - all creatures are dead" : 
    wizard.health > 0 ? "The Wizard Wins" : 
    `The ${monster.name} is Victorious` 
    const endEmoji =  wizard.health > 0 ? "🔮" : "☠️"
    document.body.innerHTML = `
    <div class="end-game">
    <h2>Game Over</h2>
    <h3>${endMessage}</h3>
    <p class="end-emoji">${endEmoji}</p>
    </div>` 
}

document.getElementById('attack-button').addEventListener('click', attack)

const renderHtml = () => {
    document.getElementById('hero').innerHTML = wizard.getPlayerHtml()
    document.getElementById('monster').innerHTML = monster.getPlayerHtml()
}

const wizard = new Character(characterData.hero)
let  monster = getNewMonster()


renderHtml()



