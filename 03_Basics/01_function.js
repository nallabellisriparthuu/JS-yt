/*
Function
--------
-> Function is the resuable block of code that bundle multiple line of code into single package. Insted of repeting same line of logic, we define it once and call wherever we need. 
*/

// console.log("J");
// console.log("A");
// console.log("V");
// console.log("A");
// console.log("S");
// console.log("C");
// console.log("R");
// console.log("I");
// console.log("P");
// console.log("T");

// console.log("J");
// console.log("A");
// console.log("V");
// console.log("A");
// console.log("S");
// console.log("C");
// console.log("R");
// console.log("I");
// console.log("P");
// console.log("T");

//Insted repeting like this line by line and resusing the same code we define it once and call whereever we need and want.

//Function decleration (Naming function)
function myName(){
    console.log("J");
    console.log("A");
    console.log("V");
    console.log("A");
    console.log("S");
    console.log("C");
    console.log("R");
    console.log("I");
    console.log("P");
    console.log("T");
}
myName() //This is we can say executing the function and calling the function
myName()

//Function Parameters & Arguments
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
addTwoNumbers(10, 5) //15
// -> Here placeholder are defined in the function called num1, num2.
// -> Actual values are passed during the call called aruguments (10, 5)

//If you pass a string to the arguments it concat to each other
addTwoNumbers("10", "5"); //105

/*
Return keyword
--------------
-> Return keyword is used in the function to perform two primary function. They are Specified return value, Terminate function execution.
    -> Specified return value: In the specified return value  'return' keyword is used to fllowed expression or a value. This is 'returned' where function is called. it can be return any datatypes in the function. if there is no return type in the function it shows undefined.
    -> Terminate function execution: In the terminate function execution if we return any value it will pass and if we pass any line of code after return keyword it will not execute it stop the function where we return the value.
*/

//1st way to return the value using varibales
function numbersAdd(num1, num2){
    let result = num1 + num2;
    return result;
}
let result = numbersAdd(55, 5);
console.log(result); //60

/*
Note:  Scoper reminder
-----  ---------------
-> If variables are declared inside the function that are not accessible outside the function called local scope, This will be learn in depth Afterwards 
*/

//2nd way to return the value directly uing return keyword
function mulAdd(num1, num2){
    return num1 * num2; 
}
let result1 = mulAdd(20, 5);
console.log(result1); //100

//login function passing an argument
function isLoggin(username){
    return `${username} is just loggin`
}
console.log(isLoggin("JavaScript")); //JavaScript is just loggin

//login function without passing an argument
function isLoggin(username){
    return `${username} is just loggin`
}
console.log(isLoggin()); //undefined is just loggin, Here we did not pass an any argument, if we dont pass any argument it will show undefined. To avoid that sistuation we write conditional statement lets demo of it. 

function isLoggin(username1){
    if(username1 === undefined){
        return `please enter the username`
    }else{
        return `${username1} is just login`
    }
}
let finalResult1 = isLoggin();
console.log(finalResult1); //please enter the username

let finalResult = isLoggin("Fullstack");
console.log(finalResult); //Fullstack is just login

//Default Parameters
function isAmount(amou1, amou2 = 25){
    return amou1 + amou2;
}
//Not overriding default parameter
console.log(isAmount(25)); //50

//overriding default parameter
console.log(isAmount(25, 50)); //75

//Not overriding default parameter
console.log(isAmount(55)); //80

