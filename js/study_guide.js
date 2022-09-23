"use strict"

// Core competencies assessed
// Reading and following directions
// Producing solutions that match the problem specification
// Using Git and working with GitHub
//     Cloning a git repository from GitHub
// Creating your own branch
// Committing and pushing work to a new branch on GitHub
// Programing fundamentals in JavaScript
// Working with values, variables, and data types
// Using assignment and comparision operators
// Working with JS internal functions to make decisions and perform actions.
//     Using conditional logic to make decisions inside functions
// Writing functions that take in inputs, process, and return outputs.
//     Here's some example word problems:

//----------//

// Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.

// convertDaystoHours(0) //0
// convertDaystoHours('5') // 120
// convertDaystoHours('Texas') //false
// convertDaystoHours([2, 1, 0]) //false
// convertDaystoHours(true) //false
// convertDaystoHours(false) //false

// 1 deifne function named timeFour
// 2 timesFour takes in one parameter - input
// 3 inside of function: multiply input by 4
// 4 IF(input is number) --> return true
// 5 IF(input is NOT number) --> return false

function timesF(input) {
    if(typeof input == "number") {
        return input * 4;
    } else {
        return false
    }
}

timesF();

function timesFour(input) {
    if (isNaN(input)){
        return false;
    }
    else if (typeof(input) == "number" || parseInt(input)) {
        return Number(input) * 4
    }
    else {
        return false;
    }
}

timesFour();

// function realTimes4(input) {
//     typeof (input) == "number"
//     // || parseInt(input)
//     {
//         return input * 4
//     }
// }
//
// realTimes4();
//----------//

// Define a function named convertDaystoHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaystoHours, should return false.
// convertDaystoHours(0) //0
// convertDaystoHours('5') // 120
// convertDaystoHours('Texas') //false
// convertDaystoHours([2, 1, 0]) //false
// convertDaystoHours(true) //false
// convertDaystoHours(false) //false

//define function convertDaystoHours
//takes in 1 parameter
//return conversion of days to hours
//if not numeric or numeric string return false

function convertDaystoHours (days) {
    if (isNaN(days)) {
        return false;
    }
    else if (typeof(days) == "number" || parseInt(days)) {
        return Number(days) * 24
    }
    else{
        return false;
    }
}

convertDaystoHours();

//----------//

// Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: "$XX.XX". If either or both inputs are not numeric or numeric strings, calculateTax should return false.
// calculateTax(25, 8)               // "$27.00"
// calculateTax(10, 12)             // "$11.20"
// calculateTax(120, 15.5)           // "$138.60"
// calculateTax(10, true)           // false
// calculateTax([1, 2, 3], 10)      // false
// calculateTax("Codeup", 100)      // false
// calculateTax()                   // false
// function calculateTax
// parameters --> 2 (totalPaid, taxPercent)
// if parameters are numeric or numeric strings
//return total bill with tax added in a string
// if parameters are not numeric or numeric strings
//return false

function calculateTax(totalPaid, taxPercent) {
    let percent = taxPercent / 100
    if (isNaN(totalPaid || taxPercent )) {
        return false;
    } else if (typeof(totalPaid && taxPercent) == "number" || parseInt(totalPaid && taxPercent)) {
        return `$${Number(( totalPaid) + (totalPaid * percent)).toFixed(2)}`
    }
    else{
        return false;
    }
}
calculateTax();


let schoolName = `codeup`;
console.log(`Hi my name is John and I attend ${schoolName}`);

let conesToSell = Math.floor(50 + Math.random() * (100 - 50 + 1));

console.log(`I have to sell ${conesToSell} cones`);

do {
    let customerWants = Math.floor(Math.random() * (100 - 50 + 1));
    if(conesToSell < customerWants) {
        console.log(`Cannot sell you ${customerWants} cones, I only have ${conesToSell}...`);
    } else if(conesToSell > customerWants) {
        conesToSell -= customerWants;
        console.log(`${customerWants} cones sold...`);
    } else {
        conesToSell -= customerWants;
        console.log("Yay! I sold them all!");
    }
} while(conesToSell > 0);