function ageEven(friendsAge){
    for(let i = 0; i < friendsAge.length; i++){
        const item = friendsAge[i]
        let evens = item % 2;
        if(evens == 0){
            console.log(friendsAge[i]);
        }
    }
    return false;
}

const ages = [22, 23, 44];
// console.log(ageEven(ages));
