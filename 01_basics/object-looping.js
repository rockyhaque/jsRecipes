var shopingCart = {
    books: 3,
    keybord: 2,
    mouse: 1,
    pen: 25,
    shoes: 2,
    bottle: 1
}

const keys = Object.keys(shopingCart);
console.log(keys);

const values = Object.values(shopingCart);
console.log(values);

// var keys = [ 'books', 'keybord', 'mouse', 'pen', 'shoes', 'bottle' ]
for (var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shopingCart[propertyName];
    console.log(propertyName, propertyValue);
}

// Alternative using for in loop
for(var propertyName in shopingCart){
    const value = shopingCart[propertyName]
    console.log(propertyName, value);
}