/*
What is IFFE
-> IIFE stands for Immediatly Invooke function expression. It execute the immediatly after the execution. we wrap our function in th round bracket () that turns into an expression and after that we add another round bracket() to invoke the function.

What is the use of IIFE
-> IIFE is used for task like database connection that should start as soon as when the app run and its avoid a global scope polution and create a private scope which means the variable inside doesn't leak into global scope
*/

(function greet(){
    console.log("Hello JavaScript");
}) (); //Hello JavaScript

/*
-> Important rules
------------------
-> 1st round bracket is used for wrap the function defination
-> 2nd round bracket is used for invoke the function
-> If we write multiple IIFE atleast of the function we have to keep semicolon(;) between them to avoid the syntax error
*/

(function one(){
    console.log("One IIFE");
}) (); //One IIFE

(function two(){
    console.log("Two IIFE");
}) (); //Two IIFE

//variation of IIFE

//IIFE Anonymous function.
(function(){
    console.log("Anonymous function");
}) (); //Anonymous function

//IIFE Named function
(function addNum(){
    console.log(2+2);
}) (); //4

//IIFE with parameters
(function myName(name){
    console.log(`My name is ${name}`) 
}) ("JavaScript");  //My name is JavaScript

//IIFE arrow function
((num1, num2)=>{
    console.log(num1 + num2);
}) (2, 5); //7

//IIFE with variables and return value
const myCalculation = (()=>{
    let num11 = 10;
    let num22 = 5;
    return num11 * num22;
}) ();
console.log(myCalculation);

/*
I/Q:
IIFE stands for Immediate invoke function expression it execute immediately after defination and prevent global scope pollution and provide own scope, it can be annonymous, named, parameter function and required semicolon when declaring the multiple IIFE
*/