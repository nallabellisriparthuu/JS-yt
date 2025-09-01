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
if, if...else, if...else if & Switch

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

//Outside of the if block of code executed
let name = "JavaScript";
console.log(name); 

//if...else:- (if...else) condition block is execute when the if block of code is true, if it is false else block of code will execute

//Lets check the person is eligible to vote or not
let personAge = 25; 
let eligibleAgeToVote = 18;
if(personAge > eligibleAgeToVote){
    let result = "Vote to right";
    console.log(result);
}else{
    let result1 = "Not vote to right";
    console.log(result1);
}

// console.log(result);
// console.log(result1);


/*
-> Change person age to below 18 and if you check result it show else block

Scope reminder
--------------
-> If you log 'result' and 'result1' outside the block it shows error that 'ReferenceError: result is not defined' & 'ReferenceError: result1 is not defined

-> Because 'let' & 'const' are the execute in the block of code where as 'var' is global/function scope it execute outside and inside the block.
*/

//if...else if:- (if...else if) is condition block it checkes the multiple block of code that which block of code is true that will be executed.

//Lets check the final score of student Grade A to Fail
let studentFinalScore = 50;

//Here used Logical 'AND(&&)' operator that tells that GTE 90 is True and LTE 100 is True then only execute. Will understand this cleraly in Logical operator topic. 
if(studentFinalScore >= 90 && studentFinalScore <=100){
    console.log("Grade A");
}else if(studentFinalScore >= 80){
    console.log("Grade B");
}else if(studentFinalScore >= 70){
    console.log("Grade C");
}else if(studentFinalScore >= 60){
    console.log("Grade D");
}else if(studentFinalScore >= 50){
    console.log("Grade E");
}else{
    console.log("Fail");
}

/*
Logical Operator
----------------
-> Logical operator is used to combine two or more conditions/expressions and return a single boolean value (true or false): They are AND(&&), OR(||), Not(!).

-> AND(&&): The AND(&&) operartor used when if all the condition is only true return the true value, otherwise return false.
    T - T = T
    T - F = F
    F - T = F
    F - F = F

-> OR(||): The OR(||) operator is used when any one of the condition is true return ture value, otherwise return false.
    T - T = T
    T - F = T
    F - T = T
    F - F = F

-> Not(!): The Not(!) operator is used when the true condition is true return false and vise-versa
    T = F
    F = T
*/

//AND(&&)

//Lets check the marks of the students that student all marks is above passing marks eligible to engineer otherwise not.
let mathsMarks = 60;
let passingMathsMarks = 40;
let physicMarks = 55;
let passingPhysicMarks = 35;
let chemistryMarks = 35;
let passingChemistryMarks = 35;

if(mathsMarks >= passingMathsMarks && physicMarks >= passingPhysicMarks && chemistryMarks >= passingChemistryMarks){
    console.log("eligible to engineer");
}else{
    console.log("Not eligible to engineer");
}

//-> Here all the condition is true such that true condition will be execute. If any one of AND should have false then the false condition will be execute

//OR(||)

//Lets check the marks of the students that student pass atleast one subject and eligible to engineer otherwise not.
let mathsMarks1 = 60;
let passingMathsMarks1 = 30;
let physicMarks2 = 55;
let passingPhysicMarks2 = 35;
let chemistryMarks3 = 35;
let passingChemistryMarks3 = 15;

if(mathsMarks1 >= passingMathsMarks1 || physicMarks2 >= passingPhysicMarks2 || chemistryMarks3 >= passingChemistryMarks3){
    console.log("eligible to engineer");
}else{
    console.log("Not eligible to engineer");
}

//Not(!)

//Lets make the absent student present
let isStudentPresent = false;
if(!isStudentPresent){
    console.log("Student present");
}else{
    console.log("Student absent");
}

/*
Switch statement
----------------
-> Switch statement is used to execute a different block of code based on a value of a single expression and after the each case we have to use 'break' keyword to stop the execution of after the each case. it is the alternative way of if...else if...else statement 
*/

//Lets check the final score of student Grade A to Fail using switch statement

let studentScore = 70;

switch(true){
    case (studentScore >=90 && studentScore <=100):
        console.log("GredeA");
        break;
    case (studentScore >= 80):
        console.log("Grade B");
        break;
    default:
        console.log("Grade C");
}

//Note: 
// switch can compare against any value → strings, numbers, or other datatypes.
// Advantage: No need to repeat == or ===. Syntax is simpler.

/*
Difference between loose equality(==) and strict equality(===)
-> loose equality(==) compares only values after that perform type coresion which can leads to unexpected result and automatically convert to datatypes
-> strict equality(===) compares both value and datatype and perform no type coresion
*/

//loose equality(==) and strict equality(===)

//Lets check the age of 2 person in the formate of string and number
let agePerson = 20; //number
let anotherAgePerson = "20"; //string

//loose equality
let result2 = agePerson == anotherAgePerson;
console.log(result2); //true beacuse it is type coresion string 5 converting to number 5

//strict equality
let result3 = agePerson === anotherAgePerson;
console.log(result3); //false because it is no type coresion string 5 will not converting to number 5

console.log(20 === 20); //true (prefer to use only strict eqyality to avoid bugs)

//Ternary operator: This operator is work as a if...else statement in the shorter way
let age = 20;
let result = (age > 18) ? "eligible to vote" : "not eligile to vote";
console.log(result);

//Assignment operator: It is used to assigned a value and arthmetic values to the varibales
let number = 20;
number+=10;
console.log(number);
number-=5;
console.log(number);
number*=2;
console.log(number);
number/=2;
console.log(number);
number**=2;
console.log(number);

/*
-> Non-empty string → truthy → condition runs.
-> Empty string "" → falsy → condition fails.

-> Complete List of Falsy Values
    -> false
    -> 0
    -> -0 (negative zero)
    -> 0n (BigInt zero)
    -> "" (empty string)
    -> null
    -> undefined
    -> NaN
** Everything else is truthy.

Truthy Examples
    -> Non-empty strings: "0", "false", " " (space)
    -> Arrays: [] (even empty arrays)
    -> Objects: {} (even empty objects)
    -> Functions: function() {}
*/