import {getDicePlaceholderHtml, getDiceScoreArr, getPercentage} from "./utils.js"


// constructor function
/*function Character (data) {
    Object.assign(this, data)
    this.diceArray = getDicePlaceholderHtml(this.diceRollCount)
    this.maxHealth = this.health

    this.getRandomArr = () => {
        this.currentDiceScore = getDiceScoreArr(this.diceRollCount)
        this.diceArray = this.currentDiceScore.map(box=>{
            return `<div class="dice">${box}</div>`
        }).join('')
    }
    this.getHealthBarHtml = () => {
        const percent = getPercentage(this.maxHealth, this.health)
    
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 25 ? "danger" : ""} " style="width: ${percent}%;">
                    </div>
                </div>`
    }

    this.takeDamage = attackScoreArray => {
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
        const healthBar = this.getHealthBarHtml()
        return  `<div class="character-card">
         <h4 class="name"> ${name}</h4>
         <img class="avatar" src="${avatar}"/>
         <p class="health">health: <b> ${health} </b></p>
         ${healthBar}
         <div class="dice-container">${diceArray}</div>
         </div>  `;
    }
}*/

// classes (an alternative to constructor functions) this is a template for creating new objects or instances of objects this helps do a particular task for all objects 
class Character {
    constructor(data){
        //assign all the properties of data to this
        Object.assign(this, data)
        this.diceArray = getDicePlaceholderHtml(this.diceRollCount)
        this.maxHealth = this.health
    }
    // all these are functions which act as method in this case
    getRandomArr(){
        this.currentDiceScore = getDiceScoreArr(this.diceRollCount)
        //.map() maps an array and run a function for each item in that array and returns the results to a new array
        this.diceArray = this.currentDiceScore.map(box=>{
            return `<div class="dice">${box}</div>`
        }).join('')
    }
    getHealthBarHtml(){
        const percent = getPercentage(this.maxHealth, this.health)
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 25 ? "danger" : ""} " style="width: ${percent}%;">
                    </div>
                </div>`
    }
    takeDamage(attackScoreArray){
        //.reduce() takes an array and reduces it to one thing and returns that one thing to the new variable
        const TotalAttackScore = attackScoreArray.reduce((x, y)=>{
            return x + y
        })
        this.health -= TotalAttackScore
        if (this.health <= 0){
            this.health = 0
            this.dead = true
        }
    }
    getPlayerHtml(){
        // object destructuring is taking all the properties of an object and assigning them to a variable in a more simpler manner for easy access
        const {id, name, avatar, health, diceRollCount, diceArray} = this
        const healthBar = this.getHealthBarHtml()
        return  `<div class="character-card">
         <h4 class="name"> ${name}</h4>
         <img class="avatar" src="${avatar}"/>
         <p class="health">health: <b> ${health} </b></p>
         ${healthBar}
         <div class="dice-container">${diceArray}</div>
         </div>  `;
    }
}

export {Character}
