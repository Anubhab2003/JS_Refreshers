const marvelHeros=['Ironman','Spiderman','Thor','Hulk','Captain America'];

const dcHeros=['Batman','Superman','Wonder Women','Flash','Green Lantern'];

// marvelHeros.push(dcHeros)
// console.log(marvelHeros) // Output: [ 'Ironman', 'Spiderman', 'Thor', 'Hulk', 'Captain America', [ 'Batman', 'Super Array ke ander Array aa gaya

// const mixedHeros=marvelHeros.concat(dcHeros)
// console.log(mixedHeros) 

const allHeros=[...marvelHeros,...dcHeros]
console.log(allHeros) // Output: [ 'Ironman', 'Spiderman', 'Thor', 'Hulk', 'Captain America', 'Batman', 'Superman', 'Wonder

console.log(Array.isArray(allHeros)) // Output: true
console.log(Array.from("Anubhab"))

console.log(Array.from({name:'Anubhab'})) // Output: [] Empty Array

let score1=1000
let score2=2000
let score3=3000

console.log(Array.of(score1,score2,score3)) // Output: [ 1000, 2000, 3000 ]