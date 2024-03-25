//*** Task 1 - Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


function evenOdd(num){
    if(num % 2 !== 0){
        return num * 2;
    } else{
        return num / 2;
    }
}

// console.log(evenOdd(11));



//* Task 2 - Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(arr, n){
    let sum = 0, avg;
    for(let i = 0; i < n; i++){
        sum += arr[i]
        avg = sum / n;
    }
    return avg;
}

const inputArray = [1, 2, 3, 4, 5, 6];
// console.log(make_avg(inputArray, 6));


//* Task 3 - Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str){
    let zeroCount = 0;
    for(let digit of str){
        
        if(digit == !'0' || digit == !'1'){
            console.log("Wrong input");
            // return 0;
            // return "Wrong input";
            // break; 
        } 

        if(digit === '0'){
            zeroCount++
        }
         
    }
    return zeroCount;

}

console.log(count_zero("0001110101"));



//* Task 4 - Write a function to find the longest word in a given string.

function longestWord(statement){
    let splitedStatement = statement.split(" ");
    let maxLengthWord = "";

    for(let word of splitedStatement){
        if(word.length > maxLengthWord.length){
            maxLengthWord = word;
        }
    }
    return maxLengthWord;

}

console.log(longestWord("I am learning Programming to become a programmer"));
