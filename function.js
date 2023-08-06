// * Function Syntax
// function functionName(parameters){
//     function body
//     return
// }

// var returnedValue = functionName(parasmeters value)


// * Basic Function Practice
// function returnMoney(tk){
//     console.log("Return my money: ");
//     console.log("Take it: ",tk)
// }
// returnMoney(99);


// * Add with function without return
// function add(n1, n2){
//     var sum = n1 + n2;
//     console.log("Your total sum: ", sum);
// }
// add(100, 200)


// * Multiplication with return
// function mul(n1, n2){
//     console.log("Your entered two nums are: ", n1, n2)
//     var multiplication = n1 * n2;
//     return multiplication;
// }

// var multiplication = mul(100, 9);
// console.log('var multiplication: ', multiplication);


//* Singara Count 
function bringSingara(money){
    var perSingara = 5;
    var quantity = money / perSingara;
    return quantity;
}

var singara = bringSingara(100);
console.log('Total Singara I got: ', singara);

