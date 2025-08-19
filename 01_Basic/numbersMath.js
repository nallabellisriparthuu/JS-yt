//Numbers and Math

/*

-> Number: It can be integer (5), decimal or floating (5.0), when we doing some operation on floating points may cause rounding error to fix that we have some numbers methods. 

*/
let num1 = 11; //number
let num2 = 55.23; //floating or decimal
let num3 = 0.1+0.2
console.log(num3); //0.30000000000000004 here we see the floating point issuse

//numbers methods
//-> Js provide usefull several methods to work with numbers like to .toFixed(), .toPrecision(), Number(), parseInt(), parseFloat()

//->.toFIxed(digit): The .toFixed method always return a string an rounded to no.of decimal values
let number = 123.456789;
console.log(number); //123.456789
console.log(typeof number); //number
console.log(number.toFixed(3)); //123.457
console.log(typeof number.toFixed(3)); //string

//->.toPrecision(precision): The toPrecision() method of Number values returns a string representing this number to the specified number of significant digits.
let number1 = 123.560;
console.log(number1); //123.560
console.log(typeof number1); //number
console.log(number1.toPrecision(4)); //123.6
console.log(typeof number1.toPrecision(4)); //string

//ParseInt()
let userId = "75243";
console.log(userId); //75243
console.log(typeof userId); //string
let userId1 = parseInt(userId);
console.log(userId1); //75243
console.log(typeof userId1); //number

//parseFloat()
let price = "55.6";
console.log(price); //55.6
console.log(typeof price); //string
let price1 = parseFloat(price);
console.log(price1); //55.6
console.log(typeof price1); //number

//Number()
let age = "100";
console.log(age); //100
console.log(typeof age); //string
//declaring varibales and using 'Number()' method to convert (S->N)
let age1 = Number(age);
console.log(age1); //100
console.log(typeof age1); //number


/*

-> Math: JavaScript provide built-in Math object it contain constants and mehtods in mathematical operations

//constant :
-> Math.PI: It return the value of mathematical constant PI(π) which is approx 3.141592653 
-> Math.E: It represents Euler's number, which is the base of natural logarithms, and its approximate value is 2.718.

//Rounding Methods:
-> Math.round(): The decimal number which is rounded to a integer
-> Math.ceil(): The decimal number which is rounded up to a nearest integer
-> Math.floor(): The decimal numner which is rounded down to a nearest integer
-> Math.turnc(): The decimal number which is remove the decimal number

*/

//constant
console.log(Math.PI); //3.141592653589793
console.log(Math.E); //2.718281828459045

//Rounding Methods
console.log(Math.round(55.4)); //55
console.log(Math.ceil(76.7)); //77
console.log(Math.floor(23.99)); //23
console.log(Math.trunc(99.9)); //99

//Random Numbers in JavaScript

//Returns a random decimal between 0 (inclusive) and 1 (exclusive).
console.log(Math.random()); //0.03526626000018673

//Random Decimal 1 → 11
/*
-> Math.random() * 10 → random decimal in [0, 9.999...].
-> +1 shifts it into [1, 10.999...].
-> Still decimal, not integer.
*/
console.log((Math.random()*10)+1);

//Random Integer 1 → 10
/*
-> Math.random() * 10 → range [0, 9.999...].
-> Math.floor() → cuts to integer 0–9.
-> +1 shifts into 1–10.
-> Classic formula for 1–10 random integers.
*/
console.log(Math.floor((Math.random()*10)+1));

//Random Integer Between min and max
/*
-> (max - min + 1) → size of range.
-> Math.random() * range → random decimal in [0, range-1].
-> Math.floor(...) → converts to integer.
-> + min → shifts into [min, max] inclusive.
-> Example (min=10, max=20):
-> Random = 0.73 → *11 = 8.03 → Math.floor=8 → +10=18.
*/

let max = 20;
let min = 10;

console.log(Math.floor((Math.random(max - min)*10)+1)); //6





