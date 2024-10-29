// singleton

//object literals

const mySym=Symbol("Key1")
const JSUser={
    name: 'John Wick',
    [mySym]: 'Key1',
    age: 25,
    email: 'j@ok',
    isLoggedIn: true,
    LastLoginDays:["Monday","Tuesday","Wednesday"]
    
}
console.log(JSUser["email"]);
console.log(typeof JSUser["mySym"])
JSUser.email="anubhabchowdhury@google.com"
// Object.freeze(JSUser);//The value will not change further

console.log(JSUser["email"]);


JSUser.greeting=()=>{
    console.log("Hello Tony Stark")
}
JSUser.greeting2=()=>{
    console.log(`Hello ${JSUser.name}`)
}
console.log(JSUser.greeting());
console.log(JSUser.greeting2());