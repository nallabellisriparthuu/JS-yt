/*

-> In JavaScript we have 2types of memory stack and heap memory.
-> stack memory is also knows as primitive values
-> heap memory is also knows as non-primitive (reference) values.

*/

//-----------------------------------------------------------------------------------------

/*

-> stack memory: The stack is a fixed memory structure user to store primitive values and each varibales has its own copy, it has fixed size memory and very fast to access and changing the one varibales and doesn't effect to the another varibale. Example below:

*/

let name = "JavaScript";
console.log(name); //JavaScipt
let anotherName = name;
console.log(anotherName); //JavaScipt
anotherName = "Full stack";
console.log(anotherName); //Full stack
console.log(name); //JavaScipt
//Changing 'anotherName' doesn’t affect 'name' because primitives are independent copies in the stack.

//-----------------------------------------------------------------------------------------

/*

-> head memory: The heap is a flexible memory complex data structure used to store non-primitive values by its reference which means variable holds pointer at a memory location, not at a value, it has dynamic szie like complex and large data and if the two varibales point at same object, modify one will effect other.

*/

let obj1 = {
    name: "sai",
    age: 10
}
console.log(obj1); //{ name: 'sai', age: 10 }

let obj2 = obj1 

console.log(obj2); //{ name: 'sai', age: 10 }

//changed name property in obj1 will chnage in obj2 also
obj1.name = "moneky";
console.log(obj1); //{ name: 'moneky', age: 10 }
console.log(obj2); //{ name: 'moneky', age: 10 }
//Both obj1 and obj2 point to the same location in the heap → changes through one reference affect the other.


