const user={
    username:"Tony Parker",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} welcome to the course!`);
        console.log(this);
    },
}
// user.welcomeMessage();
// user.username="Peter Parker";
// user.welcomeMessage();

// this keyword provides the current context of the object

function chai(){
    let name="Shree Krishna"
    console.log(this.name);//undefined
}
// chai();

const chai2=()=>{
    let name="Shree Krishna"
    console.log(name);//undefined
}
chai2();
const addTwo=(n1,n2)=>{
    return n1+n2;
}
console.log(addTwo(2,3));
// Another way to write arrow function, here no curly braces and return keyword
const addthree=(n1,n2,n3)=>n1+n2+n3;
console.log(addthree(2,3,4));