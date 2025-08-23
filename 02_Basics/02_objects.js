/*
What is objects
---------------
-> objects are collection of key-value of pair. Usally keys are string or symbols, values can be any datatypes such as numbers, boolean, function, string, arrays and even objects also.

way to create a object
----------------------
-> object literals: This is the most comman way to create a objects.
let variableName = {key: "value"}

-> using new keyword: This new keyword object is also called singleton objects, it is less commonly used but important conceptually.
let varibaleName = new Object();
variableName.key = "value";
*/

//object literals
let studId = Symbol("studId") //symbol it can be declare like this
let studentInfo = {
    //obj in str
    studName: "Sai",
    //obj in num
    age: 10,
    //symbol obj
    [studId]: 101, //Symbol can be access like this using square bracket of variableName
    //obj in bool
    isPass: true,
    //obj in arr
    hobbiles: ["cricket", "shettle"],
    //obj in obj
    parentsName: {
        fatherName: "sai father",
        motherName: "sai mother"
    },
    //obj in fun
    isGood: function (){
        console.log("Good person....");
        
    }
}
console.log(studentInfo); 
/*
output:
-------
{
  studName: 'Sai',
  age: 10,
  isPass: true,
  hobbiles: [ 'cricket', 'shettle' ],
  parentsName: { fatherName: 'sai father', motherName: 'sai mother' },
  isGood: [Function: isGood],
  [Symbol(studId)]: 101
}
*/

//object using new keyword
let anotherId = Symbol("anotherStudent"); //symbol can be declare like this
let anotherStudent = new Object();
anotherStudent.name = "Don",
anotherStudent.age = 20,
anotherStudent.score = {win: 10, lose: 3, tie: 2},
anotherStudent.hobbies = ["wolley ball", "footbal"],
anotherStudent.greeting = function(){
    console.log("This is greeting");
}
anotherStudent[anotherId] = 102 //Symbol can be access like this using square bracket of variableName
console.log(anotherStudent);
/*
output:
-------
{
  name: 'Don',
  age: 20,
  score: { win: 10, lose: 3, tie: 2 },
  hobbies: [ 'wolley ball', 'footbal' ],
  greeting: [Function (anonymous)],
  [Symbol(anotherStudent)]: 102
}
*/

console.log("***************************************************************************");

/*
Accesing Elements using Dot and Square bracket
----------------------------------------------
-> Dot notation in objects are used to access and add new element when key names are valid indentifiers such as not valid for no spaces, no special character only valid for letters 
-> Square brackets in objects is also used to access elements when key names are dynamic such as vaild for special character, spaces and only letters
*/

//dot notation
let mobile = {
    name: "Vivo X200fe",
    year: 2025,
    emiId: 211365899974125,
    boxInside: ["charger", "cable", "earphone"],
    performance: function(){
        console.log("Good....");
    },
    color: {
        side: "silver",
        back: "black"
    }
}
console.log(mobile);
/*
output
------
{
  name: 'Vivo X200fe',
  year: 2025,
  emiId: 211365899974125,
  boxInside: [ 'charger', 'cable', 'earphone' ],
  performance: [Function: performance],
  color: { side: 'silver', back: 'black' }
}
*/
//Access
console.log(mobile.name);
console.log(mobile.year);
console.log(mobile.emiId);
console.log(mobile.boxInside);
console.log(mobile.performance()); //In object functions can access using objName and keyName of fun and round brackets
console.log(mobile.color);
//Added
mobile.camers = "Good qualit";
mobile.photos = "Having good Ai feature";
console.log(mobile);
/*
output
------
{
  name: 'Vivo X200fe',
  year: 2025,
  emiId: 211365899974125,
  boxInside: [ 'charger', 'cable', 'earphone' ],
  performance: [Function: performance],
  color: { side: 'silver', back: 'black' },
  camers: 'Good qualit',
  photos: 'Having good Ai feature'
}
*/

//square bracket
let carName = {
    model_mode: "BMW",
    "color name": "red",
    "year-buy": 2020
}
console.log(carName["model_mode"])
console.log(carName["color name"])
console.log(carName["year-buy"])
/*
Note: Prefer to use dot notation because easy to read, add and understand
*/
//Object.freeze() is the method that prevent changes like adding, deleting and it become immutable.
console.log(Object.freeze(mobile));
mobile.buyCityName = "Hyderabad";
console.log(mobile);
mobile.color = {avalabileColor: "blue", avalabileColor1: "yello", avalabileColor2: "blk" }
console.log(mobile);

console.log("***************************************************************************");

//Nested objects: - we can create an object that contain inside the object 
let personInfo = {
  personName: {
    firstName: "Jai",
    middleName: "Sri",
    lastName: "Ram"
  },
  age: 20,
  accessories: {
    electornic: {
      mobiles: {
        phone: "Vivo",
        color: "black"
      },
      bigScreen: {
        tv: "Samsaung",
        laptops: {
          comp1: "dell",
          comp2: "lenovo"
        }
      }
    }
  }
} 

console.log(personInfo);
/*
output
------
{
  personName: { firstName: 'Jai', middleName: 'Sri', lastName: 'Ram' },
  age: 20,
  accessories: { electornic: { mobiles: [Object], bigScreen: [Object] } }
}
*/

//accessing object using dot notation
console.log(personInfo.personName); //{ firstName: 'Jai', middleName: 'Sri', lastName: 'Ram' }
console.log(personInfo.personName.firstName); //Jai
console.log(personInfo.personName.middleName); //Sri
console.log(personInfo.personName.lastName); //Ram
console.log(personInfo.age); //20
console.log(personInfo.accessories); 
/*
{
  electornic: {
    mobiles: { phone: 'Vivo', color: 'black' },
    bigScreen: { tv: 'Samsaung', laptops: [Object] }
  }
}
*/
console.log(personInfo.accessories.electornic);
/*
{
  mobiles: { phone: 'Vivo', color: 'black' },
  bigScreen: { tv: 'Samsaung', laptops: { comp1: 'dell', comp2: 'lenovo' } }
}
*/
console.log(personInfo.accessories.electornic.mobiles); //{ phone: 'Vivo', color: 'black' }
console.log(personInfo.accessories.electornic.mobiles.phone); //vivo
console.log(personInfo.accessories.electornic.bigScreen.laptops.comp1); //dell
//Like this we access deeply nested property some times it may cause error if intermidate keys are missing. To avoid this sistuation we use 'optional chaining (?.)'   
console.log(personInfo.accessories?.electornic?.mobiles); //{ phone: 'Vivo', color: 'black' } this concepts will learn later.

/*
Combining Objects
-----------------
-> Objects can be merged in 2 ways using Object.assign() & ...spread operator
->Object.assign(): The Object.assign() is used to copy all the list from the own object properties from one or more source object to a target object. It return modified target object.

->...spread operator: The ...spread operator is used for array or object used to copy, merge and pass the element indivdually and doesn't modify the original array or object
*/

//Object.assign(target, source1, source2.....)
let obj1 = {
  name: "sai",
  age: 20
}
console.log(obj1); //{ name: 'sai', age: 20 }

let obj2 = {
  role: "developer",
  hight: 169
}
console.log(obj2); //{ role: 'developer', hight: 169 }

let result = Object.assign(obj1, obj2);
console.log(result); //{ name: 'sai', age: 20, role: 'developer', hight: 169 }
console.log(obj1); //{ name: 'sai', age: 20, role: 'developer', hight: 169 }

let obj3 = {
  name: "sai",
  age: 20
}
console.log(obj3); //{ name: 'sai', age: 20 }

let obj4 = {
  role: "developer",
  hight: 169
}
console.log(obj4); //{ role: 'developer', hight: 169 }

let result1 = Object.assign({}, obj3, obj4); //This is means it create a object in new object
console.log(result1); //{ name: 'sai', age: 20, role: 'developer', hight: 169 }
console.log(obj3); //{ name: 'sai', age: 20 }
console.log(obj4); //{ role: 'developer', hight: 169 }

//...spread operator
console.log(obj3); //{ name: 'sai', age: 20 }
console.log(obj2); //{ role: 'developer', hight: 169 }

let anotherResult = {...obj3, ...obj2}
console.log(anotherResult); //{ name: 'sai', age: 20, role: 'developer', hight: 169 }

let anotherResult1 = {...obj3, ...obj2, color: "white", isHandsome: true}
console.log(anotherResult1);
/*
{
  name: 'sai',
  age: 20,
  role: 'developer',
  hight: 169,
  color: 'white',
  isHandsome: true
}
*/

/*Objects in Arrays (API Example)
-> In the real-world application like API's or database, data often are come like a array in objects
*/
let user = [
  {id1: "sai@google.com",
  role: "Mern developer"},
  {id2: "don@google.com",
  role: "Java developer"}
]
console.log(user[1].role); //Java developer
//We can iterate through such arrays with .map(), .forEach(), or loops. further

/*
Useful Object method
--------------------
* JavaScript provide some useful object methods like Object.key(obj), Object.value(obj), Object.entries(obj), hasOwnProperty()
*/

//Object.key(): The Object.key(obj) is used return an array of the given object of all keys in the object 
console.log(obj3); //{ name: 'sai', age: 20 }
let keyAccess = Object.keys(obj3);
console.log(keyAccess); //[ 'name', 'age' ]

//Object.values(): The Object.value(obj) is used to return an array of the given object of all values in the object.
console.log(obj1); //{ name: 'sai', age: 20, role: 'developer', hight: 169 }
let valueAccess = Object.values(obj1);
console.log(valueAccess); //[ 'sai', 20, 'developer', 169 ]

//Object.entries(): The Object.entries() is used to return an array of key-value pair in object and we can iterate to them.
console.log(obj1); //{ name: 'sai', age: 20, role: 'developer', hight: 169 }
let entriesAccess = Object.entries(obj1);
console.log(entriesAccess);
/*
[
  [ 'name', 'sai' ],
  [ 'age', 20 ],
  [ 'role', 'developer' ],
  [ 'hight', 169 ]
]
*/

//Iterating
for(let obj11 in obj1){
  console.log(obj11);
}
/*
name
age
role
hight
*/

//hasOwnProperty: The hasOwnProperty is used to check if the property is exisit or not if exist return true or false
console.log(obj1.hasOwnProperty("age")); //true
console.log(obj1.hasOwnProperty("education")); //false





