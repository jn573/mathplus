const getRandInt = (limit = 10) => Math.floor(Math.random() * limit);

const getTotal = (...arr) => arr.reduce((total, num) => {
    return total + num
}, 0);

const checkAnswer = (a, r) => parseInt(a) === r;

let num1 = getRandInt();
let num2 = getRandInt();
let sum = getTotal(num1, num2);

let elemNum1 = document.getElementById("num1");
let elemNum2 = document.getElementById("num2");
let elemAnswer = document.getElementById("validateAnswer");

function updateElements() {
    elemNum1.innerText = num1;
    elemNum2.innerText = num2;
    elemAnswer.value = "";
}


updateElements(num1, num2);

function checker() {
    let answer = elemAnswer.valueAsNumber;

    if (checkAnswer(answer, sum)) {
        document.getElementById("status").innerText = "Correct, try the next one ...";
        addElement(`${num1} + ${num2} = ${sum}`,"correct");
        num1 = getRandInt();
        num2 = getRandInt();
        sum = getTotal(num1, num2);
        updateElements();
        // elemAnswer.innerText = 0;
    } else {
        document.getElementById("status").innerText = "Oops, try again ...";
        addElement(`${num1} + ${num2} = ${answer}`,"wrong");
    }
}

function getBgColour(r) {
    const COLOURS = ["alert alert-success", "alert alert-warning"]
    if (r === "correct") {
        return COLOURS[0];
    } else {
        return COLOURS[1];
    }
}

function addElement(msg, result) {
    let parentDiv = document.getElementById('history');
    let div = document.createElement('li');
    div.textContent=msg;
    div.className = getBgColour(result);
    div.role = "alert";

    parentDiv.appendChild(div);
}


