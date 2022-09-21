function triangleArea(side1, side2, side3){
    let s = (side1 + side2 + side3)/2;
    let area = Math.sqrt(s * ((s - side1)*(s - side2)*(s - side3)));
    return console.log(area);
}

triangleArea(3, 4, 5);


function reverseString(input){
    let inputToArray = input.split("");
    let reverseArray = inputToArray.reverse();
    let reverseInput = reverseArray.join('');
    console.log(reverseInput)
}
reverseString("codeup")

for (let i = 1; i <= 100; i++){

    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
        continue;
    }else if(i % 3 == 0){
        console.log("fizz")
        continue;
    }else if (i % 5 == 0){
        console.log("buzz")
        continue;
    }
    console.log(i);
}

function shuffleArray(input){
    return console.log(input.sort(() => .5 - Math.random()));
}
let num = [1,2,3,4,5,6,7,8,9];

shuffleArray(num);