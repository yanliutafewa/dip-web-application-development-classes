// Challenge 2 Solution
// Initialise the arrays
let array1 = [1, 2, 3, 2];
let array2 = [4, 5, 6, 4];

// Use the spread operator to merge the two arrays
let mergedArray = [...array1, ...array2];

// Use the Set object to remove duplicates
let uniqueArray = [...new Set(mergedArray)];

// Use array destructuring to assign the first three elements to variables
let [firstElement, secondElement, thirdElement] = uniqueArray;

// Set the value of the output filed to be the second element of the unique array
let outputField = document.getElementById("OutputField");
outputField.innerHTML = secondElement;
