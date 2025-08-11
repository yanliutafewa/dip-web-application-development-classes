import { add, subtract, multiply, divide } from "./math.js";

console.log(add(3, 2)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(5, 2)); // 10
console.log(divide(5, 2)); // 2.5

let result = (add (3,2) === 5) ? 'correct' :'incorrect';

let myMessageField1 = document.getElementById("myMessage1");
myMessageField1.innerHTML = " Add 3 to 2, then we got " + add(3, 2);

let myMessageField2 = document.getElementById("myMessage2");
myMessageField2.innerHTML = " The result is " + result;