const getRandInt = (limit = 10) => Math.floor(Math.random() * limit);

const getSum = (...arr) => arr.reduce((total, num) => { return total + num }, 0);

let num1 = getRandInt();
let num2 = getRandInt();
let answer = getSum(num1, num2);

const checkAnswer = (a,r) => parseInt(a) === r;

console.log(num1);
console.log(num2);
console.log(answer);

(function () {
    document.getElementById("num1").innerText = num1;
    document.getElementById("num2").innerText = num2;
    //document.getElementById("answer").innerText = answer;
}());



function checker() {
    const result = document.getElementById("validateAnswer");

    console.log("Your answer is " + result.value);

    if (checkAnswer(result.value,answer)) {
        document.getElementById("status").innerText = "Correct, try the next one ...";
        let num1 = getRandInt();
        let num2 = getRandInt();
        let answer = getSum(num1,num2);
        document.getElementById("num1").innerText = num1;
        document.getElementById("num2").innerText = num2;
        document.getElementById("validateAnswer").innerText = parseInt(0);
    } else {
        document.getElementById("status").innerText = "Oops, try again ...";
    }
}

