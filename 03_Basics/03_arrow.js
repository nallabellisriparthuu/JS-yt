/*
What is this
------------
-> 'this' always refer to the current context and it behaves dependes upoon the sistuation
    -> inside the object method, 'this' refer to the object itself
    -> In the global scope (browser) 'this' refer to the windows
    -> In the global scope (nodeJS) 'this' refer to the empty object
    -> In the standalone function 'this' doesn't print to object properties
*/

//inside the object method, 'this' refer to the object itself
let personInfo = {
    name: "JavaScript",
    age: 20,
    message: function(){
        console.log(`wel come to ${this.name}`); 
    }
}
personInfo.message(); //wel come to JavaScript (context wtithout change)

//context with change
personInfo.name = "ReactJS"
personInfo.message() //wel come to ReactJS

//In the global scope (browser) 'this' refer to the windows you check in the browser console. 

// [ Window {0: global, 1: global, 2: global, 3: global, 4: Window, 5: Window, 6: Window, 7: Window, 8: global, 9: global, window: Window, self: Window, document: document, name: '', location: Location, …} ]

// console.log(this);

// In the global scope (nodeJS) 'this' refer to the empty object
console.log(this); //{}

// In the standalone function 'this' doesn't print to object properties

// function greet(){
//     console.log(this);
// }
// greet();

//this will not work on standalone function it shows undefined this will only work on the methods

// function greet(){
//     let userName = "JavaScript"
//     console.log(this.userName);
// }
// greet()

/*
Note:
-----
-> Always use 'this.property' inside methods to ensure it picks the current object context.
*/

//Normal function Vs Arroww function

//Normal function: Has its own execution context. this inside points to the object if called as a method.

// let job = function(){
//     console.log(this);
// }
// job()

//Arrow function: Does not bind its own this. Inherits this from the parent scope. That’s why we say “arrow functions don’t have their own this”.

let job1 = () => {
    console.log(this);
}
job1() //{}

/*
I/Q
---
-> In the standalone function and arrow function we can't use this keyword
*/

//Arrow function

//Arrow Basic synatx
let personInfo1 = () =>{
    console.log("Hello");
}
personInfo1() //Hello

//Arrow with return syntx
let addTwo = (num1, num2) =>{
    return num1 + num2
}
let result = addTwo(5, 5)
console.log(result); //10

/*
-> Summary
    -> this = current context.
        -> Inside object → points to object.
        -> Global → window (browser), {} (Node).
        -> Normal function → has its own this.
        -> Arrow function → inherits this from parent.
    -> Arrow functions (ES6):
        -> Shorter syntax.
        -> No separate this.
        -> Allow implicit returns.
        -> Must wrap object returns in ().
    -> Widely used in React and array methods (map, forEach, filter, etc.).
*/