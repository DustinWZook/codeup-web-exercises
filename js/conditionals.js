(function () {


    "use strict";

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message which relates to the
     * color stated in the argument of the function. For colors you do not have
     * responses written for, return a string stating so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *
     *
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

    /*function analyzeColor (color){
        if (color == "red"){
            return "roses are red.";
        }else if (color == "blue"){
            return "blueberries are blue";
        }else if (color == "green"){
            return "grass is green";
        }else if (color == "yellow"){
            return "sunflowers are yellow";
        }else if (color == "orange"){
            return "oranges are orange";
        }else if (color == "violet"){
            return "violet is a color in a rainbow"
        }else if (color == "indigo"){
            return "indigo is also a color of the rainbow";
        }else{
            return "I do not know much about the color " + color;
        }
    }*/
    // let color
    //console.log(analyzeColor("purple"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
     * You should see a different message every time you refresh the page
     */
    //console.log(analyzeColor(randomColor));

    /**
     * TODO:
     * Comment out the code above, and refactor your function to use a switch-case statement
     */
    function testingOfFunctionInSwitch(){
        alert("test successful");
    }

    function analyzeColor(color){
        switch (color) {
            case "red":
                alert("roses are red");
                break;
            case "green":
                alert("grass is green");
                break;
            case "blue":
                alert("blueberries are blue");
                break;
            case "yellow":
                alert("sunflowers are yellow");
                break;
            case "orange":
                alert("oranges are orange");
                break;
            case "violet":
                alert("violet is a color in a rainbow");
                break;
            case "indigo":
                alert("indigo is also a color in a rainbow");
                break;
            default:
                alert("I do not know much about the color " + color)
                //testingOfFunctionInSwitch()
        }
    }

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
    let userColor = prompt("enter a color.");
    analyzeColor(userColor);

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * everything for free!.
     *
     * Write a function named `calculateTotal` which accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
    function calculateTotal(num, amount){
        if (num === 0){
            return "Sorry you do not receive a discount and your total is $" + amount;
        }else if (num === 1){
            return "Congratulations you received a 10 percent discount and your total is now $" + (amount - amount * .10).toFixed(2);
        }else if (num === 2){
            return "Congratulations you received a 25 percent discount and your total is now $" + (amount - amount * .25).toFixed(2);
        }else if (num === 3){
            return "Congratulations you received a 35 percent discount and your total is now $" + (amount - amount * .35).toFixed(2);
        }else if (num === 4){
            return "Congratulations you received a 50 percent discount and your total is now $" + (amount - amount * .50).toFixed(2);
        }else if (num === 5){
            return "Congratulations you received a 100 percent discount and your total is now $" + 0;
        //}else{
            //return "Your lucky number needs to be between 0-5."
        }
    }

    //console.log(calculateTotal(6,100));

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 5.
     * (In this line of code, 0 is inclusive, and 6 is exclusive)
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
    //Generate a random number between 0 and 6
    let luckyNumber = Math.floor(Math.random() * 6);
    let totalBill = prompt("What is your total bill amount");
    alert("your lucky number is " + luckyNumber + " and your bill total is $" + totalBill + ". " + calculateTotal(luckyNumber, totalBill));

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * Do *NOT* display any of the above information
     * if the user enters a value that is not of the number data type.
     * Instead, use an alert to inform them of the incorrect input data type.
     *
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */

    let userConfirms = confirm("Would you like to enter a number");

    function checkNumber(num){
        if (num % 2 === 0){
            alert("user number of " + num + " is even");
        }else{
            alert("user number of "+ num + " is odd");
        }

        let numberPlus100 = num + 100;
        alert("user number of "+ num +" plus 100 is "+ numberPlus100)

        if (num >= 0){
            alert("user number of " + num + " is positive");
        }else{
            alert("user number of " + num + " is negative");
        }

    }

    if(userConfirms === true){
        let userNumber = Number(prompt("enter a number."));
        if (isNaN(userNumber)){
            alert("User did not enter a number!");
        }else{
            checkNumber(userNumber);

        }
    }else{
        alert("user did not want to enter a number.")
    }
})();