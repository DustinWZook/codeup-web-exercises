(function (){
    "use strict";
    console.log("sanity check");

    function showMultiplicationTable(input){
        for (let i = 0; i <= 10; i++){
            let result = input * i;
            console.log(input + " x " + i + " = " + result)
        }
        return "The multiplication table is for " + input;
    }
    //alert(showMultiplicationTable(7));


    for(let i = 0; i < 10; i++){
        let randomNum = Math.floor(Math.random() * (200 - 20 +1)+ 20);
        if(randomNum % 2 === 0){
            console.log(randomNum + " is even");
        }else {
            console.log(randomNum + " is odd");
        }
    }







})();