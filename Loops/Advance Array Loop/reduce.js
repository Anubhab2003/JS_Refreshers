const myNum=[1,2,3];

// const myTotal=myNum.reduce( function(acc,currval){
//     console.log(`acc:${acc} currval :${currval}`);
//     return acc+currval;
// },0)
const myTotal=myNum.reduce( (acc,curr)=>acc+curr,0)
console.log(myTotal);

const shoppingCart=[
    {
        name:"Js course",
        price:599
    },
    {
        name:"Reactcourse",
        price:599
    },
    {
        name:"Node js course",
        price:599
    }
    
]

const total=shoppingCart.reduce( (acc,curr)=>acc+curr.price,0)
console.log(total);