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
    alert(showMultiplicationTable(7));





})();