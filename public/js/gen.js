const getRandInt = (limit = 10) => Math.floor(Math.random() * limit);

const getTotal = (...arr) => arr.reduce((total, num) => { return total + num }, 0);

const checkAnswer = (a,r) => parseInt(a) === r;

let num1 = getRandInt();
let num2 = getRandInt();
let sum = getTotal(num1,num2);

let elemNum1 = document.getElementById("num1");
let elemNum2 = document.getElementById("num2");
let elemAnswer = document.getElementById("validateAnswer");

function updateElements() {
    elemNum1.innerText = num1;
    elemNum2.innerText = num2;
    elemAnswer.value = "";
}


updateElements(num1,num2);

function checker() {
    answer = elemAnswer.valueAsNumber;

    if (checkAnswer(answer,sum)) {
        document.getElementById("status").innerText = "Correct, try the next one ...";
        num1 = getRandInt();
        num2 = getRandInt();
        sum = getTotal(num1,num2);
        updateElements();
        // elemAnswer.innerText = 0;
    } else {
        document.getElementById("status").innerText = "Oops, try again ...";
    }
}

