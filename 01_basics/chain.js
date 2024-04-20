//* Data Access
const data = [
    {id: 12, name: "Rocky", address: "Dhaka"}, 
    {id: 120, name: "Rock", address: "BD"}

];

// console.log(data[1].address);


//* Second Product price
const products = {
    count: 500,
    data: [
        {id: 101, name: 'lenevo', price: 23000},
        {id: 102, name: 'mac', price: 240000},
    ]
}

// console.log(products.data[1].price);


//* Address of second street
const user = {
    id: 5001,
    name: 'Umar Ali',
    address: {
        street: {
            first: '33/G/A',
            second: 'Bapari Para',
            third: 'khikhet'
        },
        city: 'Dhaka',
    }
}

// console.log(user.address.street.second);


//* Optional Chaning
const user2 = {
    id: 5002,
    name: 'Ali',
    address: {
        location: 'Asia',
        country: 'BD',
        city: 'Dhaka'
    }
}

// console.log(user2.address?.street?.second);


const arr = [4, 5, 3, 2, 6];
const tripleIt = [];

for(const item of arr)
{
    const triple = item * 3;
    tripleIt.push(triple);
}

// console.log(tripleIt);




//* Map
const numbers = [1, 2, 5, 6, 10];

function doubleIt(num){
    // console.log('Number Now: ', num);
    return num * 2;
}

// Alternative function
const double2 = n => n * 2;


const result = numbers.map(doubleIt);
// console.log(result);

const output2 = numbers.map(n => n * 2);
console.log(output2);