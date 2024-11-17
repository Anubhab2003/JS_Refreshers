// For of loop

// ["","",""]
// [{},{},{}]
// const arr=[1,2,3,4,5,6,7,8,9,10];

// for (const num of arr) {
//     console.log(num);
// }
// const name="Anubhab is a Smart, hardworking and handsome Men";
// for (const char of name) {
//     console.log(char);
// }


//Maps hold key value pair(Unique values)

const map=new Map();
map.set('India','New Delhi');
map.set('USA','Washington DC');
map.set('UK','London');
map.set('Australia','Canberra');
map.set('Japan','Tokyo');
map.set('China','Beijing');
map.set('Russia','Moscow');
map.set('France','Paris');
map.set('Germany','Berlin');
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,'=>',value);
}

const myObj={
    'game1':'Batman Arkham City',
    'game2':'SpiderMan Remastered',
}
//Forof not working for object
// for (const [key,value] of myObj) {
//     console.log(key,'=>',value);
    
// }