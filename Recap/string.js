//*** Task 1 - Count how many times a string has the letter a or A
function myStr(letters) {
  let count = 0;

  for (let letter of letters) {
    if (letter == "a" || letter == "A") {
      count++;
    }
  }
  return count;
}

let task1 = myStr("aaAdhdAia");
// console.log(task1);




//*** Task 2 - If a given string has either x, replace x by y. if the given string has X, replace it by Y.
function existOrNot(chars){
    let result = "";
    for(let char of chars){
        if(char.includes('x')){
            result += 'y'
            // equal operator and include methods works
        } else if(char === 'X'){
            result += 'Y'
        } else{
            result += char
        }
    }
    return result;
}

let task2 = existOrNot("Ax1XyYZ");
// console.log(task2);




//*** Task 3 - Capitalize Every first Letter of each word in a String
function letterCapitalition(sentence){
    const wordsArray = sentence.split(" ");
    const capitalizedWords = wordsArray.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    })

    return capitalizedWords.join(" ");
}

let task3 = letterCapitalition("ax1X yYZ Caab");
// console.log(task3);



//*** Task 3 [Alternative]
function letterCapitalization(sentence) {

    /*
        \b matches the beginning or end of a word.
        \w matches any word character (letter, digit, or underscore).
        /g is the global flag that performs a global search for all matches in the string.
    */
   
    return sentence.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

let task3Alternative = letterCapitalization("ax1X yYZ Caab");
// console.log(task3Alternative);
