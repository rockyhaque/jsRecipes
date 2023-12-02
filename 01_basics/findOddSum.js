function oddSum(arr){
    let sum = 0;
    let reservedArray = [];
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        const rem = element % 2;
        if(rem != 0){
            sum += element;
         
        }
    }
    reservedArray.push(sum)
    return reservedArray;
}

const x = [1, 2, 4, 5, 8, 10];
console.log(oddSum(x));