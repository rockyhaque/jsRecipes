var shopingCart = {
    books: 3,
    bookName: 'Code of Life',
    keybord: 2,
    mouse: 1,
    pen: 25
}

var penCount = shopingCart.pen;
console.log(penCount);

// Alternative system
var penCount2 = shopingCart['bookName'];
console.log(penCount2)

// Get all the keys or properties
var propertyKeys = Object.keys(shopingCart);
console.log(propertyKeys); // [ 'books', 'bookName', 'keybord', 'mouse', 'pen' ]

// Get all the values
var propertyValues = Object.values(shopingCart);
console.log(propertyValues);  // [ 3, 'Code of Life', 2, 1, 25 ]

// Showing the value
var propertyName = 'mouse';
var propertyValue = shopingCart[propertyName];
console.log(propertyName, propertyValue)  // mouse 1

// Alternative of Showing the value
console.log(shopingCart.mouse);

// update property value
shopingCart['mouse'] = 29;
console.log(shopingCart);

// Alternative of update property value
shopingCart.mouse = 39;
console.log(shopingCart);

// Another Alternative of update property value
shopingCart[propertyName] = 49;
console.log(shopingCart);


