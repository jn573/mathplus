const getRandomInt = function randomInt(limit = 10) {
    return Math.floor(Math.random() * limit);
}

const sumChecker = (...args) => args.reduce((a, b) => a + b, 0);

function generateSum () {
    let num1 = getRandomInt();
    let num2 = getRandomInt();
    let answer = sumChecker(num1, num2)
}

const SUM  = {
    num1: getRandomInt(),
    num2: getRandomInt(),
    answer: sumChecker(this.num1,this.num2)
}


let sum = SUM{};






