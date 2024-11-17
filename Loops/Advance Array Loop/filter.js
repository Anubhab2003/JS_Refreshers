// const coding=["JavaScript","Python","Java","C++","Ruby","C#","PHP","Go","Swift","Kotlin"];coding.filter((item)=>{return item.length>4;}); //Output: ["JavaScript", "Python", "Swift", "Kotlin"]

// const values=coding.forEach( (item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values); //Output: undefined
//forEach will never return a value

// const myNums=[1,2,3,4,5,6,7,8,9,10];
// //Filter will help to fix this issue , it will return values
// const newNums=myNums.filter( (num)=>{
//     return num>5;//Return because we are wrapping it into a scope
// })
   

// console.log(newNums); 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'The Diary of a Young Girl', genre: 'Biography', publish: 1947, edition: 1997 },
    { title: 'Steve Jobs', genre: 'Biography', publish: 2011, edition: 2015 },
    { title: 'Into the Wild', genre: 'Adventure', publish: 1996, edition: 2007 },
    { title: 'Unbroken', genre: 'Biography', publish: 2010, edition: 2014 },
    { title: 'The Immortal Life of Henrietta Lacks', genre: 'Science', publish: 2010, edition: 2011 }
  ];
  

let userBooks=books.filter( (bk)=>{
    return bk.genre==='Biography'&& bk.edition>2009 ;
})
// userBooks=books.filter( (bk)=>{
//     return bk.edition>2009;
// })


console.log(userBooks)
  

