// Challenge 2 Starter
// Initialise the array
let numberArray = [1, 2, 3, 4, 5];

// Define the arrow function doubleNumbers
let doubleNumbers = (numbers)=> {
    return numbers.map(number => number * 2)
}

// Call the function with the numbers array
let result = doubleNumbers(numberArray)

// Console log the new array
console.log(result);
