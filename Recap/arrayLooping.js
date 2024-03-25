//* Task 1 - Write a JavaScript code to reverse the array colors without using the reverse method.

//! Approach - 1: using unshift method
const colors = ['red', 'blue', 'green', 'yellow', 'orange']

let reverseColor = [];

for(let color of colors){
    reverseColor.unshift(color);
}
// console.log(reverseColor);

//! Approach - 2: using for loop
let reverseColor2 = []

for(let i = 0; i < colors.length; i++){
    let color = colors[i];
    reverseColor2.unshift(color)
}
// console.log(reverseColor2);

//! Approach - 3: using reverse for loop
for(let i = colors.length - 1; i >= 0; i--){
    let color = colors[i];
    // console.log(color);
}



//* Task 2 - Write a JavaScript code to get the even numbers from an array using any looping technique.

//! Approach - 1: simple for loop
const numbers = [12, 98, 5, 41, 23, 78, 46];
for(let number of numbers){
    if(number % 2 === 0){
        // console.log(number);
    }
}


//! Approach - 2: using push method
let evenNumbers = [];
for(let number of numbers){
    if(number % 2 === 0){
        evenNumbers.push(number)
    }
}

// console.log(evenNumbers);



//* Task 3 - Use a for...of loop to concatenate all the elements of an array into a single string.

//! Approach - 1: using join method
let string = ['Tom', 'Tim', 'Tin', 'Tik'];
// console.log(string.join(''));

//! Approach - 2: using empty string
let concatenatedString = '';

for(let element of string){
    concatenatedString += element
}

// console.log(concatenatedString);



//* Task 4 - Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person'

const words = statement.split(" ")
const reversedWords = words.reverse();
const reversedStatement = reversedWords.join(" ")

// console.log(reversedStatement);




//* Task 5 
/* You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2

*/
let arrayNumbers = [5, 6, 5, 11, 12, 98, 5];
let find = 5;
let count = 0;

for(let element of arrayNumbers){
    if(find === element){
        count++;
    }
}

// console.log(count);




//* Task 6 - Find the lowest number in the array below.

//! Approach - 1: using min method
const heights2 = [167, 190, 120, 165, 137];

// let minHeights2 = Math.min(...heights2)
// console.log(minHeights2);

//! Approach - 1: using min method
let minHeights2 = Infinity;
// let minHeights2 = heights2[0];

for(let height2 of heights2){
    if(height2 < minHeights2){
        minHeights2 = height2;
    }
}

// console.log(minHeights2);



//* Task 7 - Find the friend with the smallest name.

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let smallestName = names[0];

for(let i = 0; i < names.length; i++){
    
    if(names[i].length < smallestName.length){
        smallestName = names[i];
    }
}

console.log(smallestName);
