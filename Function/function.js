function LoginUserMessage(username){
    if(username===undefined){
        console.log("Please provide a username");
        return;
    }

    return `${username} has logged in`;
}
// console.log(LoginUserMessage());

function calculateCartPrice(...num1){
    return num1//will return an array
}
// console.log(calculateCartPrice(200,440,5000));
const user={
    username:"Anubhab",
    email:"anubhabchowdhury01@gmail.com"
}

function handleObject(anyobject){
    console.log(`Username: ${anyobject.username} and Emaile is ${anyobject.email}`);
}
handleObject(user);

const myNewArray=[1,2,3,4,5,6,7,8,9,10];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));