import {getDicePlaceholderHtml, getDiceScoreArr} from "./utils.js"

// constructor function
function Character (data) {
    Object.assign(this, data)
    this.diceArray = getDicePlaceholderHtml(this.diceRollCount)

    this.getRandomArr = () => {
        this.currentDiceScore = getDiceScoreArr(this.diceRollCount)
        this.diceArray = this.currentDiceScore.map((box)=>{
            return `<div class="dice">${box}</div>`
        }).join('')
    }

    this.takeDamage = (attackScoreArray) => {
         const TotalAttackScore = attackScoreArray.reduce((x, y)=>{
            return x + y
        })
        this.health -= TotalAttackScore
        if (this.health <= 0){
            this.health = 0
            this.dead = true
        }
    }

    this.getPlayerHtml = () => {
        const {id, name, avatar, health, diceRollCount, diceArray} = this
        const diceHtml = this.getRandomArr(diceRollCount)
        return  `<div class="character-card">
         <h4 class="name"> ${name}</h4>
         <img class="avatar" src="${avatar}"/>
         <p class="health">health: <b> ${health} </b></p>
         <div class="dice-container">${diceArray}</div>
         </div>  `;
    }
}

export {Character}
