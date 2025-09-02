// -> There are some other kind of loop in JS like for...of, for...in, foreach loops. Lets them them cleraly one by one.

//for...of loop: for...of loop is directly iterabale and gives values and it is useful for array string, maps, etc

//for...of loop with array
let course = ["HTML", "CSS", "JS", "ReactJs"];
console.log(course);

for(let cour of course){
    console.log(cour);
}
//Here its create a new variable for previous variable to iterate the value

//for...of with string
let fullName = "FullStack Web Development";
for(let myCourse of fullName){
    console.log(myCourse);
}

//for...of with string and skip spaces
for(let name of fullName){
    if(name === " "){
        continue
    }
    console.log(name);
}

/*
for...of with map: It is provide a readable way to iterate over a key-value pair of a map for that we use map keyword and to set them as key-value pair we use map.set method.   

map:- map is the object used to store key-value pair and key can be any data type
map.set method is used to add key-value pair to a map and update the value to the exisiting key
*/

let professerRole = new Map();
professerRole.set("Don", "HTML")
professerRole.set("Pon", "CSS")
professerRole.set("Fon", "JS")

for(let [key, value] of professerRole){
    console.log(key, ":", value);
}
//Note for objects we can't iterater using for..of loop

//for..in loop: For in loop is used to iterate a enumerable string property of the object.

//for..in loop with object
let score = {
    win: 5,
    lose: 2,
    tie: 3
}
for (let myScore in score){
    //console.log(myScore); //output comes key 
    //console.log(score[myScore]); //output comes value 
    console.log(myScore, ":", score[myScore]); //output comes both key-value 
}

//for..in loop with array
let num = ["one", "Two", "Three", "Four"];
for(let myNum in num){
    //console.log(myNum); //show the index value of the num
    console.log(num[myNum]); //show the value of the num
}

/*
Higher order array loop using forEach
-> forEach method is the higher order function because it is the method of the array that accpets the function as a arugment. This is also know as callback function. It execute onces for each element of the array.

-> For each loop is used to iterates over array values and does not return anything it shows always undefined and it is useful for (logging, pushing, modifying), not for building new arrays.
*/

let games = ["Pubg", "candycrush", "freefire", "8ball pool"];
games.forEach(function(gamesName){
    console.log(gamesName);
});

games.forEach((gamesName) =>{
    console.log(gamesName);
})

//arrays inside the objects extracting the values
let emplooyes = [
    {
        name: "Don",
        salary: 2000
    },

    {
        name: "Pon",
        salary: "5000"
    },

    {
        name: "Fun",
        salary: 3000
    }
]

emplooyes.forEach((myemployess)=>{
    console.log(emplooyes[myemployess]);
    
})

