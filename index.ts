
const getboard = document.querySelectorAll(".item");

type gameBoard = {
    gameNumbers: number[];
}

type IResultNumber = {
    resultNumber: number
}

const arrForBoard: gameBoard = {
    gameNumbers: []
}

// const myReadyNumber: IResultNumber = {
//     resultNumber: 0
// }

function addNumbersInBoard(arr: number[], count: number = 1) {
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.random() < 0.5 ? 2 : 4;
        arr.push(randomNumber);
    }
}

const readyNumber = addNumbersInBoard(arrForBoard.gameNumbers, 16);


// function getRandomNumbers(readyNumbersArr: number[], myReadyNumber: number) {
//     const randomNum = Math.floor(Math.random() * readyNumbersArr.length);
//     const randomNumber = readyNumbersArr[randomNum]
//     return myReadyNumber = randomNumber;
// }

// getRandomNumbers(myBoard.gameNumbers, myReadyNumber.resultNumber)

function DoubleNumbers(myReadyNumberArr: number[]) {
    for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * 16)
        const currentNumber = myReadyNumberArr[i];
        const item = getboard[randomIndex]
        if (item) {
            (item as HTMLElement).dataset.value = currentNumber.toString();
            item.textContent = currentNumber.toString();
        }

    }
}

DoubleNumbers(arrForBoard.gameNumbers)





