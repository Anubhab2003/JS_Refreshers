//creating a promise
// const promise1= new Promise((resolve,reject)=>{
//     //Do a async task
//     //Db calls, cryptography, network calls
//     setTimeout(()=>{
//         console.log("Async task1 completed");
//         resolve();
//     },1000)
// });
// //.then is called when promise is resolved
// //.catch is called when promise is rejected
// //.finally is called always
// promise1.then(()=>{
//     console.log("Promise is consumed");
// })


// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task2 completed");
//         resolve();
//     },1000)
// }).then(()=>{
//     console.log("Promise2 is consumed");
// })

// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:"BatMan",password:"1234"});
//     },1000)
// })
// promise3.then((user)=>{
//     console.log(user);
// })


// const promise4=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false;
//         if(!error){
//             resolve({username:"IronMan",password:"1234"});
//         }else{
//             reject("Error occurred");
//         }
//     },500)
// })

// promise4.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Promise4 is consumed");
// })


// const promise5=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=true;
//         if(!error){
//             resolve({username:"SpiderMan",password:"1234"});
//         }else{
//             reject("Error occurred Again");
//         }
//     },1000)
// })
// async function consumePromise5(){
//     try{
//         const response=await promise5
//         console.log(response);
//     }catch{
//         console.log("Error occurred");
//     }
// }
// consumePromise5();



// async function getallUsers(){
//     try{
//         const response=await fetch("https://jsonplaceholder.typicode.com/users")
//         const data=await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("Error occurred",error);
//     }
// }


// getallUsers();

fetch("https://api.github.com/users/Anubhab2003")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("Error occurred",error);
})