/*
-> What is control flow
----------------------------
-> Control flow is the logic flow which ditermine the part of code execution based on the condition. They are comparision operator, logical operator, conditional statement, Ternary operator, assignment operator.
*/

/*

comparision operator
--------------------
-> Greaterthan (>)
-> Lessthan (<)
-> Greaterthan equal (>=)
-> Lessthan equal (<=)
-> Loose equal (==)
-> Strict equal (===)
-> Loose not equal (!=)
-> Strict not equal (!==)

Logical operator
----------------
-> AND (&&)
-> OR (||)
-> NOT (!)

Conditional statement
---------------------
if, if...else, if...elseif & Switch

Ternary Operator
----------------
(condition) ? true : false

Assignment Operator
-------------------
Assignment operator (=)
Addition equal (+=)
Subtraction equal (-=)
Multipliation equal (*=)
Division equal (/=)
Modulus equal (%=)
Exponential equal (**=)
*/


// Conditional Statement:

//-> if:- (if) condition block is execute when the condition is only true if it is false code will not execute and also run outside the code. 

//true: Because executed
let isFollow = true;
if(isFollow){
    console.log("Is follow executed");
}

//Outside the block of code
console.log("JavaScript"); 

//false: Because not executed
let isUnFollow = false;
if(isUnFollow){
    console.log("Is unfollow executed");
}

//Outside the block of code
let name = "JavaScript";
console.log(name); 

//if...else: 