function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const fatherInches = 144;
const fatherFeet = inchToFeet(fatherInches);
console.log('Baba height: ',fatherFeet);

const motherInches = 121;
const motherFeet = inchToFeet(motherInches);
console.log('Ma height: ', motherFeet.toFixed(2));