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

function lowToHigh(input){
    console.log(input.sort(function (a, b){return a - b}));
}
let num2 = [3,6,3,2,6,8,9,6,4,3]
lowToHigh(num2);

let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

function readStatus(input){
    for (let i = 0; i < input.length; i++){
        console.log(input[i].title + " by " + input[i].author + " have finished reading: " + input[i].readingStatus)
    }
}

readStatus(library);
let arrayNum = [1,2,3,4,5,6,7,8];
let arrayEven = [];
// function evenArray(input){
//     input.forEach(function(element){
//         if (element % 2 === 0){
//             arrayEven.push(element);
//         }
//     })
// }

function evenArray(input){
    arrayEven = input.filter(number => {
        return number % 2 === 0;
        })

}

evenArray(arrayNum)
console.log(arrayEven);


function arrayObjectAdd(input, string){
    input[0].continent = string;
    input[1].continent = string;
    console.log(input)
}

let places = [{city: 'Tokyo', country: 'Japan'}, {city: 'Bangkok', country: 'Thailand'}];

arrayObjectAdd(places, 'Asia');


for (let i = 20; i >= 0; i--){
        console.log(i)
}

let fruit = ['mango', 'blueberries', 'oranges', 'banana', 'papaya', 'kiwi'];

console.log(fruit.push('strawberry'),fruit.unshift('strawberry'), fruit.splice(4,0, 'strawberry'), fruit);
