/*

DataTypes in JavaScript
-----------------------
-> In JavaScript data-types are classified into two types. They are primitive and non primitive (reference) data-type.

-> Primitive data-type: Primitive data-types are immutable and stores a value. They are 7 types.
    * String: It is used to store the value one or more character. Ex: 'Hello', "Hello", `Hello`
    * Number: It is used to store the value integer and floating or decimal values. Ex: 25, 2.5
    * BigInt: It is use to store the large number of values. At last we keep 'n'. Ex: 145789654231469875n
    * Boolean: It used for logical values. It stores both 'true' & 'false'
    * Undefined: It indicates that varibales is declared but value is not assigned.
    * null: It represent that intensionally empty value.
    * Symbol: It is unique and immutable identifier.

-> Non-primitive (reference) data-type: It is mutable and store reference by value. They are array, object, function and more
    * array: It is used to store multiple data-types values like number, text, etc and uses square bracket notation[]. Ex: [1, 2, 'Hello', true, [], {}.....]  
    * object: It is used to store collections of values like key-value pair. Ex: {name: 'sai', age: 25,......}
    * function: It is used for reusable block of code. Ex: function greet(){...} 
*/

/*
(typeof) operator: It is the unary operator is used to check data-type of operand
*/

// primitive data-type:
//-----------------------

//string 
let userName = "Hello";
console.log(userName);
console.log(typeof userName);

//number
let userId = 5647;
console.log(userId);
console.log(typeof userId);

//BigInt
let userTransactionId = 5647895231456215522n;
console.log(userTransactionId);
console.log(typeof userTransactionId);

//Boolean
let isFollow = true;
console.log(isFollow);
console.log(typeof isFollow);


//undefined
let salary;
console.log(salary);
console.log(typeof salary);

//null
let isGood = null;
console.log(isGood);
console.log(typeof isGood); // It is a bug from JS thats why it return obj

console.log("************************************************************");

// non-primitive (reference) data-type:
//-------------------------------------

//Array
let myArray = [1, 2, "hello", true];
console.log(myArray);
console.log(typeof myArray);

//Objet
let person = {
    name: 'sai',
    age: 25
}
console.log(person);
console.log(typeof person);

//function
function greet(){
    console.log("Hello");
}
greet();
console.log(typeof greet);

console.log("************************************************************");

//Arithmetic Operators
let num1 = 15;
let num2 = 2;
console.log(num1+num2); //17
console.log(num1 - num2); //13
console.log(num1 * num2); //30
console.log(num1 / num2); //7.5
console.log(num1 % num2); //1 
console.log(num2**3); //8







