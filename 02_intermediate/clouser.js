function outerFunction(){
    let a = 0;

    return function innerFunction(){
        a++;
        console.log("Value from innerFunction: ",a);
    }
}

const output1 = outerFunction();
const output2 = outerFunction();

output1()
output1()
output1()

output2()
output2()
output2()
output2()
output2()
output2()
output2()
