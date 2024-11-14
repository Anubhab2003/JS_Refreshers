//Immediately Invoked Function Expression
(function chai(){
    console.log("Hello");
})();
//(function defination)(function call);

//Use to avoid global scope pollution
(()=>{
    console.log("Hello Spiderman");
})();

((name)=>{
    console.log(`Hello ${name} Spiderman`)
})("Tobey Maguire");