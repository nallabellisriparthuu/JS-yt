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

//for...of with map: It is provide a readable way to iterate over a key-value pair of a map