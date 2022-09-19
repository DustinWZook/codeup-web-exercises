(function (){
    "use strict";
    let x = 2;
    while (x < 65537){
        console.log(x);
        x = x * 2
    }

    // do while loop
    // generate a random number between 50 and 100 to represent how many cones to sell before loop
    // inside loop generate between 1 and 5 for how many each customer buys
    //
    let allCones = Math.floor(Math.random() * 50) + 50;


    do {
        console.log("I have " + allCones + " cones to sell.")
        let sellCones = Math.floor(Math.random() * 5) + 1;
        if (allCones > sellCones && allCones > 0){
            allCones = allCones - sellCones;
            console.log(sellCones + " cones sold!")
        }else if(sellCones > allCones && allCones > 0){
            console.log("cannot sell you " + sellCones + " cones only have "+ allCones + " cones left.");
        }else if (sellCones == allCones && allCones > 0){
            console.log(sellCones + " cones sold");
            console.log("Yay! all cones sold!")
            break;
        }

    } while (allCones > 0);
})();