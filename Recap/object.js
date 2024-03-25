//* Task 1 - Access the golden rod color value in output.
const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};

// console.log(colors["red"]);



//* Task 2 - For this object below add a property named passenger capacity with value 5
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

car.passengerCapacity = 5;

// console.log(car);



//* Task 3 - Display the physics marks as output.
const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};



// console.log(student.physics["marks"]);

//* Task 4 - Count the number of properties.
let studentInfo = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: false,
};

let numOfProperties = Object.keys(studentInfo).length;
// console.log(numOfProperties);



//* Task 5 - Loop through an object and print the key-value pairs with their types
let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

// console.log(Object.keys(myObject));
// console.log(typeof myObject.name);

// let values = Object.values(myObject);
let keys = Object.keys(myObject);

for (let key of keys) {
  // myObject[key] means value
  console.log("Key:", key, "|", "type: ", typeof myObject[key]);
}




//* Task 6 - You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

function findAveragePhonePrice(arrPhone){
  
  let prices = []

  for(let phone of arrPhone){
    prices.push(phone.price)  
  }

  let totalPrice = 0;
  for(let phonePrice = 0; phonePrice < prices.length; phonePrice++){
    totalPrice += prices[phonePrice]
  }
  return totalPrice;
}

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

console.log(findAveragePhonePrice(phones));
