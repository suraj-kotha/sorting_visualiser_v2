const delayExecutionInMs = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function generateRandomNumbersInTheRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getBarHeight(height: number) {
    return `${height / 25}vw`
}

function getBarWidth(arraySize: number) {
   return `${84 / arraySize}vw`
}
export {delayExecutionInMs, generateRandomNumbersInTheRange, getBarHeight, getBarWidth}