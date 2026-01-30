var getboard = document.querySelectorAll(".item");
var arrForBoard = {
    gameNumbers: []
};
// const myReadyNumber: IResultNumber = {
//     resultNumber: 0
// }
function addNumbersInBoard(arr, count) {
    if (count === void 0) { count = 1; }
    for (var i = 0; i < count; i++) {
        var randomNumber = Math.random() < 0.5 ? 2 : 4;
        arr.push(randomNumber);
    }
}
var readyNumber = addNumbersInBoard(arrForBoard.gameNumbers, 16);
// function getRandomNumbers(readyNumbersArr: number[], myReadyNumber: number) {
//     const randomNum = Math.floor(Math.random() * readyNumbersArr.length);
//     const randomNumber = readyNumbersArr[randomNum]
//     return myReadyNumber = randomNumber;
// }
// getRandomNumbers(myBoard.gameNumbers, myReadyNumber.resultNumber)
function DoubleNumbers(myReadyNumberArr) {
    for (var i = 0; i < 2; i++) {
        var randomIndex = Math.floor(Math.random() * 16);
        var currentNumber = myReadyNumberArr[i];
        var item = getboard[randomIndex];
        if (item) {
            item.dataset.value = currentNumber.toString();
            item.textContent = currentNumber.toString();
        }
    }
}
DoubleNumbers(arrForBoard.gameNumbers);
