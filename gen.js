const getRandInt = (limit = 10) => Math.floor(Math.random() * limit);

const checkSum = (...arr) => arr.reduce((total, num) => { return total + num }, 0);


let num1 = getRandInt();
let num2 = getRandInt();
let answer = checkSum(num1,num2);

console.log(num1);
console.log(num2);
console.log(answer);

(function() {
    document.getElementById("num1").innerText = num1;
    document.getElementById("num2").innerText = num2;
    //document.getElementById("answer").innerText = answer;
}());

function checkAnswer() {
    const answer = document.getElementById("answer").value;
    console.log("Your answer is " + answer);
}

