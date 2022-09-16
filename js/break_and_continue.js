(function (){
    "use strict";
    console.log("sanity check");

    // prompt user for odd number between 1 and 50
    // use a loop and break statement to continue prompting user for an odd input if input was something else
    // use a loop and continue statement to output all odd number 1-50 and except user number
    let num;
    // do {
    //     num = prompt("enter an odd number 1 - 50.");
    // } while (num % 2 == 0);

    while (true){
        num = prompt("enter an odd number 1 - 50.");
        if (num % 2 !== 0 && num < 50 && num >= 1){
            break;
        }
    }

    for (let i = 1; i < 50;  i++){
        if(i % 2 !== 0){
            if(i == num){
                console.log("Yikes! Skipping number: " + num);
                continue;
        }
            console.log(i);
        }


    }



})();