const getDiceScoreArr = (param) => {
    // this is an array constructor that create a new array and fill it with what item you want 
    const random = new Array(param).fill(0).map((count) => {
        return Math.floor(Math.random() * 6) + 1
    })
    return random;
}

const getDicePlaceholderHtml = (diceRollCount) => {
    const placeHolder  = new Array(diceRollCount).fill(0).map(()=>{
        return `<div class="placeholder-dice"></div>`
    }).join('')
    return placeHolder
}

const getPercentage = (maximumHealth, remainingHealth) => {
    return 100 * remainingHealth / maximumHealth
}


export {getDiceScoreArr, getDicePlaceholderHtml, getPercentage}