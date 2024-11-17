const coding= ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'C#', 'PHP', 'Go', 'Swift', 'Kotlin'];


//forEach takes a callback function and a callback function doesn't contains a function name.
// coding.forEach( function (item){
//     console.log(item);
// })
//Now by Arrow function
// coding.forEach( (language)=>{
//     console.log(language);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach( (ITEM,index,arr)=>{
//     console.log(ITEM,index,arr);
// })

const myCoding=[
    {
    languageName: 'JavaScript',
    languageFileName: 'js'
},{
    languageName: 'C',
    languageFileName: 'c'
},{
    languageName: 'Java',
    languageFileName: 'java'
},
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
})