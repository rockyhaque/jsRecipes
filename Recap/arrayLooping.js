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


