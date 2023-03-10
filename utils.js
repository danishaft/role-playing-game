const getDiceScoreArr = (param) => {
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

export {getDiceScoreArr, getDicePlaceholderHtml}