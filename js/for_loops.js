(function (){
    "use strict";
    console.log("sanity check");

    function showMultiplicationTable(input){
        for (let i = 1; i < 11; i++){
            let result = input * i;
            console.log(input + " x " + i + " = " + result)
        }
        return "The multiplication table is for " + input;
    }
    console.log(showMultiplicationTable(7));


    for(let i = 0; i < 10; i++){
        let randomNum = Math.floor(Math.random() * (200 - 20)+ 20);
        if(randomNum % 2 === 0){
            console.log(randomNum + " is even");
        }else {
            console.log(randomNum + " is odd");
        }
    }
    // found this while googling not sure exactly how this works but it does somehow?
    // im commenting through this to figure out why this works
    let x = 9;//highest number to reach
    let string = "";//sets up for a new line to be inserted into each iteration?
    for (let i = 1; i <= x; i++){//allows for loop to go 9 times
        for (let j = 1; j <= i; j++){//allows for iteration to continue equal to what the main loop is currently on
            string += i;//add a string to the end of each iteration and assigning it to string
        }
        string += "\n";//adding use new line format to create the break between each set of numbers
    }

    console.log(string);

    for (let i = 100; i >= 5; i -= 5){
        console.log(i);
    }

    // TODO: practice using .repeat to create the pyramid!
    //console.log(i.toString().repeat(i));
    // ^ method is less confusing!







})();