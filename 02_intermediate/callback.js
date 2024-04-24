function show(name, age){
    console.log("my name is:", name, " My age is:",age);
}

function main(name, age, callback){
    console.log("My main function");
    setTimeout(() => {
        callback(name, age)
    }, 2000)
}

main("Rocky", 22, show)
