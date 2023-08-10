function getSumArray(numbers){
    
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum += element;
        console.log(index, element, sum);
        console.log('Total sum: ', sum);
    }
    return sum;
}

function getOddArray(numbers){
    const oddNumbers = []
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 10, 1, 155, 16,];
const oddNumbers = getOddArray(myNumbers);
console.log(oddNumbers);

const oddNumberSum = getSumArray(oddNumbers);
console.log('Odd number sum: ', oddNumberSum);