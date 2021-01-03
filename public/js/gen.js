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

function updateStatus(msg, state) {
    const status = document.getElementById("status");
    status.textContent = msg;

    if (state === "correct") {
        status.style = "color: green;";
    } else {
        status.style = "color: red;";
    }
}


updateElements(num1, num2);

function checker() {
    let answer = elemAnswer.valueAsNumber;

    if (checkAnswer(answer, sum)) {
        addElement(`${num1} + ${num2} = ${sum}`, 'correct');
        updateStatus('Correct, try the next one ...', 'correct');
        num1 = getRandInt();
        num2 = getRandInt();
        sum = getTotal(num1, num2);
        updateElements();
        // elemAnswer.innerText = 0;
    } else {
        updateStatus('Oops, try again ...', 'wrong');
        addElement(`${num1} + ${num2} = ${answer}`, "wrong");
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
    div.textContent = msg;
    div.className = getBgColour(result);
    div.role = "alert";

    parentDiv.prepend(div);
}


function sendAlert() {
    let anElement = document.getElementById("alertInput");
    let elemName = anElement.value;
    if (elemName.length > 0) {
        // alert(`Hi ${elemName}`);
        console.log(`Hi ${elemName}`);
        console.log(elemName);
        console.log(anElement);
    } else {
        alert("You did not enter a name!");
    }
}