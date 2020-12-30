const ageplusten = (x) => x+10;
const magic = () => new Date();
let age = ageplusten(34);

const greeting = (name = 'James') => console.log('Hi ' + name);

const dt = new Date();

console.log(age);
console.log(magic());
greeting('Evan');


function manyArgs(...args) {
    if (args.length>0) {
        args.forEach((arg) => console.log('arg: ' + arg));
    } else {
        console.log('Sorry, no args');
    }
}

manyArgs(1,2,3);

const sum = (...args) => args.reduce((a,b) => a + b, 0);

console.log(sum(1,2,3,4,5));


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2.forEach((month) => console.log(month)));