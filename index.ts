
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
        const item = getboard[randomIndex];

        const existingValue = (item as HTMLElement).dataset.value;

        if(existingValue) {
            i--;
            continue
        }

        const currentNumber = myReadyNumberArr[i];
        
        if (item) {
            (item as HTMLElement).dataset.value = currentNumber.toString();
            item.textContent = currentNumber.toString();
        }

    }
}

DoubleNumbers(arrForBoard.gameNumbers)


function managmentBoardLogic () {
    
    getboard.forEach((item, index) =>  {
        
        const row = Math.floor(index / 4);

        const value = (item as HTMLElement).dataset.value;

        if(!value) return;

        for( let i = index + 1; i < 16; i++) {
            const neighborRow = Math.floor(i / 4)

            if(row !== neighborRow) break;

            const neighborItem = getboard[i];
            const neighborValue =  (neighborItem as HTMLElement).dataset.value;

            if(!neighborValue) continue;

            if(neighborValue === value) {
                
                const sum = Number(neighborValue) + Number(value);
                (neighborItem as HTMLElement).dataset.value = sum.toString();
                neighborItem.textContent = sum.toString();
                (item as HTMLElement).dataset.value = "";
                item.textContent = "";

                break;
            }
            if(neighborValue !== value) {
                break;
            }

           
        }

        for(let j = index + 4; j < 16; j += 4) {
            
            const neighborItem = getboard[j];
            const neighborValue = (neighborItem as HTMLElement).dataset.value;

            if(!neighborValue) continue;

            if(neighborValue === value) {
               
                break;
            }
            if (neighborValue !== value) break;
        }
        
    })
}

managmentBoardLogic()









