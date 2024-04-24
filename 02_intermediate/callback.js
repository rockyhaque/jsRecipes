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


//* another approach
function hello(){
    console.log("Hello from callback");
}

function main(cb){
    // console.log(cb); 
    // [Function: hello]
    
    cb();
}

main(hello);
