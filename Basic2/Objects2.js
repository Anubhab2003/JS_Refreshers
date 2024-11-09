// const tinderUser=new Object();
const tinderUser={

}
tinderUser.id="123abs"
tinderUser.name="John"
tinderUser.age=25
tinderUser.location="New York"
tinderUser.isloggedIn=true
// console.log(tinderUser);
//Lets see nested Object
const regularUser={
    email:"some@gmail.com",
    fullName:{
        userFullname:{
            Name:"Tony Stark"
        }
    }
}
// console.log(regularUser.fullName.userFullname.Name);
const obj1={1:"a"}
const obj2={2:"b",3:"c"}
const obj3={...obj1,...obj2} //To merge we use spread operator
// console.log(obj3);
const Ustaad=[
    {
        id:1,
        email:"a@h.com"
    },
    {
        id:2,
        email:"b@w.com"
    },
    {
        id:3,
        email:"c@c.com"
    }
]
const gettingEmail=Ustaad[0].email;
console.log(gettingEmail);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));