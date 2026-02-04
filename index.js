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
        var item = getboard[randomIndex];
        var existingValue = item.dataset.value;
        if (existingValue) {
            i--;
            continue;
        }
        var currentNumber = myReadyNumberArr[i];
        if (item) {
            item.dataset.value = currentNumber.toString();
            item.textContent = currentNumber.toString();
        }
    }
}
DoubleNumbers(arrForBoard.gameNumbers);
function managmentBoardLogic() {
    getboard.forEach(function (item, index) {
        var row = Math.floor(index / 4);
        var value = item.dataset.value;
        if (!value)
            return;
        for (var i = index + 1; i < 16; i++) {
            var neighborRow = Math.floor(i / 4);
            if (row !== neighborRow)
                break;
            var neighborItem = getboard[i];
            var neighborValue = neighborItem.dataset.value;
            if (!neighborValue)
                continue;
            if (neighborValue === value) {
                console.log("\u0423\u0420\u0410! \u041F\u0430\u0440\u0430 \u0447\u0435\u0440\u0435\u0437 \u043F\u0443\u0441\u0442\u043E\u0442\u0443! \u0418\u043D\u0434\u0435\u043A\u0441 ".concat(index, " \u0438 ").concat(i, " (\u0427\u0438\u0441\u043B\u043E ").concat(value, ")"));
                var sum = Number(neighborValue) + Number(value);
                neighborItem.dataset.value = sum.toString();
                neighborItem.textContent = sum.toString();
                item.dataset.value = "";
                item.textContent = "";
                break;
            }
            if (neighborValue !== value) {
                break;
            }
        }
        for (var j = index + 4; j < 16; j += 4) {
            var neighborItem = getboard[j];
            var neighborValue = neighborItem.dataset.value;
            if (!neighborValue)
                continue;
            if (neighborValue === value) {
                console.log("\u0412\u0415\u0420\u0422\u0418\u041A\u0410\u041B\u042C: \u041F\u0430\u0440\u0430 ".concat(index, " \u0438 ").concat(j, " (\u0427\u0438\u0441\u043B\u043E ").concat(value, ")"));
                break;
            }
            if (neighborValue !== value)
                break;
        }
    });
}
managmentBoardLogic();
