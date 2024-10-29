const myArr=[0,1,2,true,"Anubhab"]
console.log(myArr)
//JAVASCRIPT ARRAY ARE RESIZABLE
myArr[5]="Tony Stark"
console.log(myArr)

//Array Methods
myArr.push("Thor")
console.log(myArr)
myArr.push("Captain America")
console.log(myArr)

myArr.unshift("Hulk")//Adds element at the beginning
console.log(myArr.includes("Captain America"))//Check if element is pres

const newArr=myArr.join()//Bind and convert into string
console.log(newArr)
console.log(typeof newArr)

//Advance Tools of Array
console.log("A",myArr)
const myn1=myArr.slice(1,4)//Extracts elements from 1 to 4
const myn2=myArr.splice(1,4)//Removes elements from 1 to 4 Will remove elements from original Array
console.log(myn1)
console.log(myn2)
console.log("B",myArr)

